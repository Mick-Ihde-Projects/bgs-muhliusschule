'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { colors } from '@/style/colors';

const schema = z.object({
  name: z.string().min(2, 'Mindestens 2 Zeichen'),
  email: z.string().email('Ungültige E-Mail-Adresse'),
  telefon: z.string().optional(),
  betreff: z.string().min(3, 'Bitte einen Betreff angeben'),
  nachricht: z.string().min(10, 'Mindestens 10 Zeichen'),
  datenschutz: z.boolean().refine((v) => v === true, 'Datenschutz muss akzeptiert werden'),
  _honeypot: z.string().max(0).optional(),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { datenschutz: false },
  });

  async function onSubmit(data: FormData) {
    if (data._honeypot) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/kontakt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Server error');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <CheckCircle2 className="w-16 h-16 mx-auto mb-4" style={{ color: colors.success }} />
        <h3 className="font-heading font-bold text-2xl mb-2" style={{ color: colors.text }}>
          Nachricht gesendet!
        </h3>
        <p style={{ color: colors.muted }}>
          Vielen Dank! Wir melden uns schnellstmöglich bei Ihnen.
        </p>
      </div>
    );
  }

  const fieldStyle = {
    border: `1px solid ${colors.muted}44`,
    background: colors.surface,
    color: colors.text,
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...form.register('_honeypot')}
          type="text"
          className="sr-only"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField control={form.control} name="name" render={({ field }) => (
            <FormItem>
              <FormLabel style={{ color: colors.text }}>Name *</FormLabel>
              <FormControl><Input {...field} style={fieldStyle} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="email" render={({ field }) => (
            <FormItem>
              <FormLabel style={{ color: colors.text }}>E-Mail *</FormLabel>
              <FormControl><Input type="email" {...field} style={fieldStyle} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField control={form.control} name="telefon" render={({ field }) => (
            <FormItem>
              <FormLabel style={{ color: colors.text }}>Telefon</FormLabel>
              <FormControl><Input type="tel" {...field} style={fieldStyle} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="betreff" render={({ field }) => (
            <FormItem>
              <FormLabel style={{ color: colors.text }}>Betreff *</FormLabel>
              <FormControl><Input {...field} style={fieldStyle} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
        </div>

        <FormField control={form.control} name="nachricht" render={({ field }) => (
          <FormItem>
            <FormLabel style={{ color: colors.text }}>Nachricht *</FormLabel>
            <FormControl><Textarea {...field} rows={5} style={fieldStyle} /></FormControl>
            <FormMessage />
          </FormItem>
        )} />

        <FormField control={form.control} name="datenschutz" render={({ field }) => (
          <FormItem className="flex items-start gap-3 space-y-0">
            <FormControl>
              <input
                type="checkbox"
                checked={field.value}
                onChange={field.onChange}
                className="mt-1 cursor-pointer"
                style={{ accentColor: colors.primary }}
              />
            </FormControl>
            <div>
              <FormLabel className="cursor-pointer font-normal" style={{ color: colors.text }}>
                Ich habe die{' '}
                <a href="/impressum" className="underline cursor-pointer" style={{ color: colors.primary }}>
                  Datenschutzerklärung
                </a>{' '}
                gelesen und akzeptiere diese. *
              </FormLabel>
              <FormMessage />
            </div>
          </FormItem>
        )} />

        {status === 'error' && (
          <div
            className="flex items-center gap-3 p-4 rounded-xl"
            style={{ background: `${colors.error}15`, border: `1px solid ${colors.error}30` }}
          >
            <AlertCircle className="w-5 h-5 flex-shrink-0" style={{ color: colors.error }} />
            <p className="text-sm" style={{ color: colors.error }}>
              Fehler beim Senden. Bitte versuchen Sie es erneut.
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full py-4 rounded-full font-semibold text-white cursor-pointer transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` }}
        >
          {status === 'loading' && <Loader2 className="w-5 h-5 animate-spin" />}
          {status === 'loading' ? 'Wird gesendet…' : 'Nachricht senden'}
        </button>
      </form>
    </Form>
  );
}

'use client';

import { useState } from 'react';
import { useForm, type Resolver } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select';
import { colors } from '@/style/colors';

const schema = z.object({
  kindVorname: z.string().min(2, 'Mindestens 2 Zeichen'),
  kindNachname: z.string().min(2, 'Mindestens 2 Zeichen'),
  geburtsdatum: z.string().min(1, 'Pflichtfeld'),
  klassenstufe: z.enum(['1', '2', '3', '4']),
  einschulungsdatum: z.string().min(1, 'Pflichtfeld'),
  eltern1Vorname: z.string().min(2, 'Mindestens 2 Zeichen'),
  eltern1Nachname: z.string().min(2, 'Mindestens 2 Zeichen'),
  eltern1Telefon: z.string().min(6, 'Ungültige Telefonnummer'),
  eltern1Email: z.string().email('Ungültige E-Mail-Adresse'),
  eltern2Vorname: z.string().optional(),
  eltern2Nachname: z.string().optional(),
  eltern2Telefon: z.string().optional(),
  strasse: z.string().min(3, 'Mindestens 3 Zeichen'),
  plz: z.string().regex(/^\d{5}$/, 'Bitte 5-stellige PLZ eingeben'),
  ort: z.string().min(2, 'Mindestens 2 Zeichen'),
  betreuungsmodell: z.enum(['Betreute Grundschule', 'Offener Ganztag']),
  ferienbetreuung: z.boolean().default(false),
  allergien: z.string().optional(),
  besonderheiten: z.string().optional(),
  abholberechtigte: z.string().optional(),
  notfallkontakt: z.string().min(5, 'Pflichtfeld'),
  datenschutz: z.boolean().refine((v) => v === true, 'Datenschutz muss akzeptiert werden'),
  sepaEinwilligung: z.boolean().refine((v) => v === true, 'SEPA-Einwilligung erforderlich'),
  iban: z.string().regex(/^[A-Z]{2}\d{2}[A-Z0-9]{11,30}$/, 'Ungültige IBAN'),
  kontoinhaber: z.string().min(3, 'Pflichtfeld'),
  _honeypot: z.string().max(0).optional(),
});

type FormData = z.infer<typeof schema>;

export function RegistrationForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const form = useForm<FormData>({
    resolver: zodResolver(schema) as Resolver<FormData>,
    defaultValues: {
      klassenstufe: '1',
      betreuungsmodell: 'Betreute Grundschule',
      ferienbetreuung: false,
      datenschutz: false,
      sepaEinwilligung: false,
    },
  });

  async function onSubmit(data: FormData) {
    if (data._honeypot) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/anmeldung', {
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
      <div className="text-center py-16">
        <CheckCircle2 className="w-16 h-16 mx-auto mb-4" style={{ color: colors.success }} />
        <h3 className="font-heading font-bold text-2xl mb-2" style={{ color: colors.text }}>
          Anmeldung eingegangen!
        </h3>
        <p style={{ color: colors.muted }}>
          Wir werden uns in Kürze bei Ihnen melden. Bitte prüfen Sie Ihren Posteingang.
        </p>
      </div>
    );
  }

  const fieldStyle = {
    border: `1px solid ${colors.muted}44`,
    background: colors.surface,
    color: colors.text,
  };

  const sectionClass = 'rounded-2xl p-6 mb-6';
  const sectionStyle = { background: `${colors.primary}05`, border: `1px solid ${colors.primary}15` };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-0">
        {/* Honeypot */}
        <input
          {...form.register('_honeypot')}
          type="text"
          className="sr-only"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        {/* Kind */}
        <div className={sectionClass} style={sectionStyle}>
          <h3 className="font-heading font-bold text-lg mb-4" style={{ color: colors.text }}>
            Angaben zum Kind
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField control={form.control} name="kindVorname" render={({ field }) => (
              <FormItem>
                <FormLabel style={{ color: colors.text }}>Vorname des Kindes *</FormLabel>
                <FormControl><Input {...field} style={fieldStyle} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="kindNachname" render={({ field }) => (
              <FormItem>
                <FormLabel style={{ color: colors.text }}>Nachname des Kindes *</FormLabel>
                <FormControl><Input {...field} style={fieldStyle} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="geburtsdatum" render={({ field }) => (
              <FormItem>
                <FormLabel style={{ color: colors.text }}>Geburtsdatum *</FormLabel>
                <FormControl><Input type="date" {...field} style={fieldStyle} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="klassenstufe" render={({ field }) => (
              <FormItem>
                <FormLabel style={{ color: colors.text }}>Klassenstufe *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger style={fieldStyle} className="cursor-pointer">
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {['1','2','3','4'].map((v) => (
                      <SelectItem key={v} value={v} className="cursor-pointer">Klasse {v}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="einschulungsdatum" render={({ field }) => (
              <FormItem>
                <FormLabel style={{ color: colors.text }}>Einschulungsdatum *</FormLabel>
                <FormControl><Input type="date" {...field} style={fieldStyle} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>
        </div>

        {/* Eltern 1 */}
        <div className={sectionClass} style={sectionStyle}>
          <h3 className="font-heading font-bold text-lg mb-4" style={{ color: colors.text }}>
            Erziehungsberechtigte/r 1
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField control={form.control} name="eltern1Vorname" render={({ field }) => (
              <FormItem>
                <FormLabel style={{ color: colors.text }}>Vorname *</FormLabel>
                <FormControl><Input {...field} style={fieldStyle} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="eltern1Nachname" render={({ field }) => (
              <FormItem>
                <FormLabel style={{ color: colors.text }}>Nachname *</FormLabel>
                <FormControl><Input {...field} style={fieldStyle} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="eltern1Telefon" render={({ field }) => (
              <FormItem>
                <FormLabel style={{ color: colors.text }}>Telefon *</FormLabel>
                <FormControl><Input type="tel" {...field} style={fieldStyle} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="eltern1Email" render={({ field }) => (
              <FormItem>
                <FormLabel style={{ color: colors.text }}>E-Mail *</FormLabel>
                <FormControl><Input type="email" {...field} style={fieldStyle} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>
        </div>

        {/* Eltern 2 */}
        <div className={sectionClass} style={sectionStyle}>
          <h3 className="font-heading font-bold text-lg mb-4" style={{ color: colors.text }}>
            Erziehungsberechtigte/r 2 <span style={{ color: colors.muted }}>(optional)</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField control={form.control} name="eltern2Vorname" render={({ field }) => (
              <FormItem>
                <FormLabel style={{ color: colors.text }}>Vorname</FormLabel>
                <FormControl><Input {...field} style={fieldStyle} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="eltern2Nachname" render={({ field }) => (
              <FormItem>
                <FormLabel style={{ color: colors.text }}>Nachname</FormLabel>
                <FormControl><Input {...field} style={fieldStyle} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="eltern2Telefon" render={({ field }) => (
              <FormItem>
                <FormLabel style={{ color: colors.text }}>Telefon</FormLabel>
                <FormControl><Input type="tel" {...field} style={fieldStyle} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>
        </div>

        {/* Adresse */}
        <div className={sectionClass} style={sectionStyle}>
          <h3 className="font-heading font-bold text-lg mb-4" style={{ color: colors.text }}>Adresse</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-3">
              <FormField control={form.control} name="strasse" render={({ field }) => (
                <FormItem>
                  <FormLabel style={{ color: colors.text }}>Straße & Hausnummer *</FormLabel>
                  <FormControl><Input {...field} style={fieldStyle} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            </div>
            <FormField control={form.control} name="plz" render={({ field }) => (
              <FormItem>
                <FormLabel style={{ color: colors.text }}>PLZ *</FormLabel>
                <FormControl><Input {...field} maxLength={5} style={fieldStyle} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <div className="md:col-span-2">
              <FormField control={form.control} name="ort" render={({ field }) => (
                <FormItem>
                  <FormLabel style={{ color: colors.text }}>Ort *</FormLabel>
                  <FormControl><Input {...field} style={fieldStyle} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            </div>
          </div>
        </div>

        {/* Betreuung */}
        <div className={sectionClass} style={sectionStyle}>
          <h3 className="font-heading font-bold text-lg mb-4" style={{ color: colors.text }}>Betreuung</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <FormField control={form.control} name="betreuungsmodell" render={({ field }) => (
                <FormItem>
                  <FormLabel style={{ color: colors.text }}>Betreuungsmodell *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger style={fieldStyle} className="cursor-pointer">
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {['Betreute Grundschule', 'Offener Ganztag'].map((v) => (
                        <SelectItem key={v} value={v} className="cursor-pointer">{v}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )} />
            </div>
            <FormField control={form.control} name="notfallkontakt" render={({ field }) => (
              <FormItem>
                <FormLabel style={{ color: colors.text }}>Notfallkontakt (Name + Tel.) *</FormLabel>
                <FormControl><Input {...field} placeholder="Maria Muster, 0176 – 123 456" style={fieldStyle} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <div className="flex items-center gap-3 mt-2">
              <FormField control={form.control} name="ferienbetreuung" render={({ field }) => (
                <FormItem className="flex items-center gap-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="cursor-pointer"
                      style={{ borderColor: colors.primary }}
                    />
                  </FormControl>
                  <FormLabel className="cursor-pointer" style={{ color: colors.text }}>
                    Ferienbetreuung gewünscht
                  </FormLabel>
                </FormItem>
              )} />
            </div>
            <div className="md:col-span-2">
              <FormField control={form.control} name="allergien" render={({ field }) => (
                <FormItem>
                  <FormLabel style={{ color: colors.text }}>Allergien / Unverträglichkeiten</FormLabel>
                  <FormControl><Textarea {...field} rows={2} style={fieldStyle} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            </div>
            <div className="md:col-span-2">
              <FormField control={form.control} name="besonderheiten" render={({ field }) => (
                <FormItem>
                  <FormLabel style={{ color: colors.text }}>Besonderheiten / Anmerkungen</FormLabel>
                  <FormControl><Textarea {...field} rows={2} style={fieldStyle} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            </div>
            <div className="md:col-span-2">
              <FormField control={form.control} name="abholberechtigte" render={({ field }) => (
                <FormItem>
                  <FormLabel style={{ color: colors.text }}>Weitere Abholberechtigte</FormLabel>
                  <FormControl><Textarea {...field} rows={2} placeholder="Name, Telefonnummer..." style={fieldStyle} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            </div>
          </div>
        </div>

        {/* SEPA */}
        <div className={sectionClass} style={sectionStyle}>
          <h3 className="font-heading font-bold text-lg mb-4" style={{ color: colors.text }}>
            SEPA-Lastschriftmandat
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField control={form.control} name="kontoinhaber" render={({ field }) => (
              <FormItem>
                <FormLabel style={{ color: colors.text }}>Kontoinhaber *</FormLabel>
                <FormControl><Input {...field} style={fieldStyle} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="iban" render={({ field }) => (
              <FormItem>
                <FormLabel style={{ color: colors.text }}>IBAN *</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="DE00 0000 0000 0000 0000 00"
                    onChange={(e) => field.onChange(e.target.value.replace(/\s/g, '').toUpperCase())}
                    style={fieldStyle}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>
        </div>

        {/* Einwilligungen */}
        <div className={sectionClass} style={sectionStyle}>
          <h3 className="font-heading font-bold text-lg mb-4" style={{ color: colors.text }}>Einwilligungen</h3>
          <div className="space-y-4">
            <FormField control={form.control} name="sepaEinwilligung" render={({ field }) => (
              <FormItem className="flex items-start gap-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="mt-0.5 cursor-pointer"
                    style={{ borderColor: colors.primary }}
                  />
                </FormControl>
                <div>
                  <FormLabel className="cursor-pointer font-normal" style={{ color: colors.text }}>
                    Ich erteile das SEPA-Lastschriftmandat für die monatlichen Betreuungsgebühren. *
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )} />
            <FormField control={form.control} name="datenschutz" render={({ field }) => (
              <FormItem className="flex items-start gap-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="mt-0.5 cursor-pointer"
                    style={{ borderColor: colors.primary }}
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
          </div>
        </div>

        {status === 'error' && (
          <div
            className="flex items-center gap-3 p-4 rounded-xl"
            style={{ background: `${colors.error}15`, border: `1px solid ${colors.error}30` }}
          >
            <AlertCircle className="w-5 h-5 flex-shrink-0" style={{ color: colors.error }} />
            <p className="text-sm" style={{ color: colors.error }}>
              Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full py-4 rounded-full font-semibold text-lg text-white cursor-pointer transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` }}
        >
          {status === 'loading' && <Loader2 className="w-5 h-5 animate-spin" />}
          {status === 'loading' ? 'Wird gesendet…' : 'Anmeldung absenden'}
        </button>
      </form>
    </Form>
  );
}

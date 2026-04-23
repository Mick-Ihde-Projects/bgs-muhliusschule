'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { elternAbc } from '@/static/elternAbc';
import { colors } from '@/style/colors';

export function AccordionElternABC() {
  return (
    <Accordion type="multiple" className="space-y-2">
      {elternAbc.map((entry) => (
        <AccordionItem
          key={entry.id}
          value={entry.id}
          className="rounded-xl border px-4"
          style={{ borderColor: `${colors.muted}33`, background: colors.surface }}
        >
          <AccordionTrigger className="hover:no-underline py-4 cursor-pointer">
            <div className="flex items-center gap-3 text-left">
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{ background: `${colors.primary}15`, color: colors.primary }}
              >
                {entry.letter}
              </span>
              <span className="font-semibold" style={{ color: colors.text }}>
                {entry.title}
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-4">
            <p className="text-sm leading-relaxed pl-11" style={{ color: colors.muted }}>
              {entry.content}
            </p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

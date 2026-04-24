'use client'

import ScrollExpandMedia from '@/components/blocks/scroll-expansion-hero'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <ScrollExpandMedia
      mediaType="image"
      mediaSrc="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop"
      bgImageSrc="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1920&auto=format&fit=crop"
      title="LUCIE KINE & COACH"
      date="Performance Coaching • Kinesitherapie • Antwerpen"
      scrollToExpand="↓ Scroll om te beginnen"
      textBlend
    >
      {/* Shown after full expansion */}
      <div className="max-w-5xl mx-auto text-center py-16 md:py-24 bg-white">
        <p className="text-[#0EA5E9] text-[11px] uppercase tracking-[0.35em] mb-5">
          Professionele begeleiding op maat
        </p>
        <h2 className="font-display text-5xl md:text-7xl text-slate-900 mb-8 leading-none">
          KLAAR OM TE BEGINNEN?
        </h2>
        <p className="text-slate-500 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          1-op-1 coaching, kinesitherapie, sportmassage en revalidatie —
          alles onder één dak in Antwerpen.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#boek"
            className="inline-flex items-center gap-3 bg-[#0EA5E9] text-white font-black uppercase tracking-[0.2em] text-sm px-10 py-4 hover:bg-sky-600 transition-colors duration-200"
          >
            Boek Je Afspraak
            <ArrowRight size={16} />
          </a>
          <a
            href="#diensten"
            className="inline-flex items-center gap-2 border border-slate-300 text-slate-700 text-sm uppercase tracking-[0.2em] px-10 py-4 hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition-colors duration-200"
          >
            Onze Diensten
          </a>
        </div>
      </div>
    </ScrollExpandMedia>
  )
}

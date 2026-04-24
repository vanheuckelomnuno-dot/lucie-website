'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Phone, Clock, MapPin, MessageCircle } from 'lucide-react'

export default function BookingCTA() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="boek" ref={ref} className="bg-[#0EA5E9] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-white/70 text-[11px] uppercase tracking-[0.35em] mb-5">
              Klaar voor het volgende niveau?
            </p>
            <h2 className="font-display text-6xl md:text-8xl text-white leading-none mb-8">
              BOEK JE<br />EERSTE<br />AFSPRAAK
            </h2>
            <p className="text-white/80 text-base leading-relaxed max-w-md">
              Één gesprek is genoeg om te weten wat je nodig hebt. Geen
              verplichtingen, geen standaard pakket — gewoon een eerlijk gesprek
              over jouw doelen en hoe wij je daarnaar toe begeleiden.
            </p>
          </motion.div>

          {/* Right: card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="bg-white p-8 md:p-10"
          >
            <p className="text-slate-400 text-xs uppercase tracking-[0.25em] mb-8">
              Praktische info
            </p>

            <div className="flex flex-col gap-5 mb-10">
              {[
                { icon: MapPin, title: 'Kontichsesteenweg 73', sub: '2630 Aartselaar, Antwerpen' },
                { icon: Clock, title: 'Ma — Vr: op afspraak', sub: 'Uren te bespreken' },
                { icon: Phone, title: '+32 470 67 34 46', sub: 'Of boek via WhatsApp' },
              ].map(({ icon: Icon, title, sub }) => (
                <div key={title} className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-sky-50 border border-sky-200 flex items-center justify-center shrink-0">
                    <Icon size={14} className="text-[#0EA5E9]" />
                  </div>
                  <div>
                    <div className="text-slate-900 text-sm font-medium">{title}</div>
                    <div className="text-slate-400 text-xs">{sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-px bg-slate-100 mb-8" />

            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/32470673446"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-[#0EA5E9] text-white font-black uppercase tracking-[0.15em] text-sm px-7 py-5 hover:bg-sky-600 transition-colors duration-200 group"
              >
                <span className="flex items-center gap-2">
                  <MessageCircle size={16} />
                  Boek via WhatsApp
                </span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="mailto:lucie.mulders@outlook.be"
                className="flex items-center justify-between border border-slate-300 text-slate-700 text-sm uppercase tracking-[0.15em] px-7 py-4 hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition-colors duration-200 group"
              >
                <span>lucie.mulders@outlook.be</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

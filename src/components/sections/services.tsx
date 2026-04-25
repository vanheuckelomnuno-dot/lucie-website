'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Dumbbell, Activity, Waves, TrendingUp } from 'lucide-react'

const services = [
  {
    icon: Dumbbell,
    label: '01',
    title: '1-op-1 Coaching',
    desc: 'Gepersonaliseerd trainingsplan afgestemd op jouw lichaam en doelstellingen. Maximale resultaten door directe, persoonlijke coaching.',
    detail: 'Kracht • Conditie • Hyrox',
  },
  {
    icon: Activity,
    label: '02',
    title: 'Kinesitherapie',
    desc: 'Als kinesitherapeut behandel ik acute en chronische klachten met klinisch onderbouwde technieken — van gedetailleerde diagnose tot volledig functioneel herstel.',
    detail: 'Manuele therapie • Dry needling • Sporttaping',
  },
  {
    icon: Waves,
    label: '03',
    title: 'Sportmassage',
    desc: 'Diepteontspanning van overbelaste spieren en bindweefsel. Sneller herstel, betere doorbloeding en verhoogde prestatiegrens.',
    detail: 'Herstel • Ontspanning • Performantie',
  },
  {
    icon: TrendingUp,
    label: '04',
    title: 'Sportrevalidatie',
    desc: 'Kinesitherapeutische revalidatie na blessures of chirurgie. Met bewezen protocollen en nauwgezette opvolging keer je sterker en veiliger terug naar sport.',
    detail: 'Post-chirurgie • Return-to-sport • Monitoring',
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="diensten" className="bg-white py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="text-[#0EA5E9] text-[11px] uppercase tracking-[0.35em] mb-4">
              Wat wij doen
            </p>
            <h2 className="font-display text-6xl md:text-8xl text-slate-900 leading-none">
              ONZE<br />DIENSTEN
            </h2>
          </div>
          <p className="text-slate-500 text-sm max-w-xs leading-relaxed md:text-right">
            Elk traject begint met een grondige analyse. Geen generieke aanpak — enkel
            wat werkt voor jou.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 + 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-white p-8 flex flex-col gap-6 hover:bg-sky-50 transition-colors duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <svc.icon
                  size={28}
                  strokeWidth={1.5}
                  className="text-[#0EA5E9] group-hover:drop-shadow-[0_0_8px_#0EA5E9] transition-all duration-300"
                />
                <span className="text-slate-300 text-xs font-mono">{svc.label}</span>
              </div>

              <div>
                <h3 className="text-slate-900 font-black uppercase tracking-wide text-base mb-3">
                  {svc.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {svc.desc}
                </p>
              </div>

              <div className="mt-auto pt-4 border-t border-slate-100">
                <p className="text-[#0EA5E9]/70 text-[10px] uppercase tracking-[0.2em]">
                  {svc.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

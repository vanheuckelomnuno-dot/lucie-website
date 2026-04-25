'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle } from 'lucide-react'

const credentials = [
  'Gecertificeerd Personal Trainer (NASM) — Hyrox specialist',
  'Gespecialiseerd in sportrevalidatie & blessurepreventie',
  'Gecertificeerd Dry Needling therapeut',
  'Sporttaping',
]

const stats = [
  { num: '6+', label: 'Jaar klinische ervaring' },
  { num: '3', label: 'Erkende specialisaties' },
  { num: '100%', label: 'Persoonlijke aanpak' },
]

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section id="over-ons" ref={sectionRef} className="bg-white py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-3 border border-slate-200 mb-24"
        >
          {stats.map(({ num, label }, i) => (
            <div
              key={label}
              className={`px-8 py-8 ${i < 2 ? 'border-r border-slate-200' : ''}`}
            >
              <div className="font-display text-5xl text-[#0EA5E9] leading-none mb-2">{num}</div>
              <div className="text-slate-500 text-xs uppercase tracking-[0.2em]">{label}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: Anatomy illustration */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-[380px] mx-auto">
              <div className="absolute inset-8 bg-[#0EA5E9]/15 blur-3xl rounded-full" />
              <Image
                src="/lucie-anatomy.jpg"
                alt="Kinesitherapie illustratie — spieren en beweging"
                width={700}
                height={900}
                className="relative w-full h-auto object-contain drop-shadow-xl"
              />
            </div>
          </motion.div>

          {/* RIGHT: Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div>
              <p className="text-[#0EA5E9] text-[11px] uppercase tracking-[0.35em] mb-4">Over ons</p>
              <h2 className="font-display text-5xl md:text-6xl text-slate-900 leading-none mb-6">
                WAAR EXPERTISE<br />SPORT ONTMOET
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                Als kinesitherapeut en gecertificeerd coach combineer ik
                klinische kinesitherapie met sportgericht prestatiecoaching in Aartselaar (Antwerpen).
                Jouw klacht of doel staat centraal — de aanpak is altijd wetenschappelijk onderbouwd
                en 100% op maat.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                Van blessurebehandeling en manuele therapie tot functionele revalidatie en
                krachtontwikkeling — elk traject vertrekt vanuit een grondige kinesitherapeutische
                screening van jouw bewegingspatronen en doelstellingen.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-slate-400 text-[10px] uppercase tracking-[0.25em] mb-1">
                Kwalificaties & erkenningen
              </p>
              {credentials.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={14} className="text-[#0EA5E9] mt-0.5 shrink-0" strokeWidth={2} />
                  <span className="text-slate-600 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="https://wa.me/32470673446"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#0EA5E9] text-white font-black uppercase tracking-[0.2em] text-sm px-8 py-4 hover:bg-sky-600 transition-colors duration-200"
              >
                Boek via WhatsApp
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center border border-slate-300 text-slate-700 text-sm uppercase tracking-[0.2em] px-8 py-4 hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition-colors duration-200"
              >
                Contacteer Ons
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

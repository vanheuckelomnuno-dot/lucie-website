'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

export default function BodyShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40])
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.03, 1, 1.03])

  return (
    <section ref={sectionRef} className="bg-sky-50 py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <p className="text-[#0EA5E9] text-[11px] uppercase tracking-[0.35em] mb-4">
            Anatomie & Prestatie
          </p>
          <h2 className="font-display text-6xl md:text-8xl text-slate-900 leading-none">
            KEN JE<br />LICHAAM
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: Athlete photo */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -80 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <motion.div
              style={{ y: imageY, scale: imageScale }}
              className="relative h-[560px] md:h-[680px] overflow-hidden"
            >
              <Image
                src="/lucie-hero.png"
                alt="Atleet in training"
                fill
                className="object-cover object-center"
              />
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#0EA5E9]" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute bottom-6 left-6 right-6 flex gap-3"
              >
                {[
                  { num: '6+', label: 'Jaar ervaring' },
                  { num: '100%', label: 'Maatwerk' },
                ].map(({ num, label }) => (
                  <div key={label} className="flex-1 bg-white/90 backdrop-blur-sm border border-slate-200 px-3 py-2.5">
                    <div className="font-display text-xl text-[#0EA5E9] leading-none">{num}</div>
                    <div className="text-slate-500 text-[9px] uppercase tracking-widest mt-1">{label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Text */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <h3 className="font-display text-4xl md:text-5xl text-slate-900 leading-none">
              WIE BEN IK?
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Ik ben <span className="text-slate-700 font-semibold">Lucie Mulders</span> — kinesitherapeut, coach en zelf een gepassioneerde sporter.
              Ik doe zelf aan Hyrox en weet dus uit eigen ervaring wat het vraagt om je lichaam te pushen én te herstellen.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">
              Als kinesitherapeut begeleid ik mensen met blessures, chronische klachten of revalidatietrajecten.
              Als coach help ik je sterker, sneller en weerbaarder worden — met een aanpak die volledig op jou is afgestemd.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">
              Sport is voor mij geen job, het is een levensstijl. En dat gevoel wil ik ook aan jou meegeven.
            </p>
            <a
              href="#boek"
              className="mt-2 inline-flex items-center gap-3 text-[#0EA5E9] text-xs uppercase tracking-[0.25em] group"
            >
              <span>Start je traject</span>
              <span className="w-8 h-px bg-[#0EA5E9] group-hover:w-14 transition-all duration-300" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

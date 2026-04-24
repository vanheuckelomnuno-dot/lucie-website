'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Phone, Mail, Globe, Share2 } from 'lucide-react'

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="contact" ref={ref} className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-[#0EA5E9] text-[11px] uppercase tracking-[0.35em] mb-4">Kom langs</p>
          <h2 className="font-display text-6xl md:text-7xl text-slate-900 leading-none">CONTACT</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-px bg-slate-200">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 bg-white p-8 md:p-10 flex flex-col gap-8"
          >
            <div className="flex flex-col gap-6">
              {[
                { icon: MapPin, label: 'Adres', text: 'Kontichsesteenweg 73\n2630 Aartselaar\nAntwerpen, België' },
                { icon: Phone, label: 'Telefoon / WhatsApp', text: '+32 470 67 34 46' },
                { icon: Mail, label: 'E-mail', text: 'lucie.mulders@outlook.be' },
              ].map(({ icon: Icon, label, text }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-sky-50 border border-sky-200 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={15} className="text-[#0EA5E9]" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-[10px] uppercase tracking-[0.2em] mb-1">{label}</p>
                    <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-line">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="text-slate-400 text-[10px] uppercase tracking-[0.2em] mb-4">Openingstijden</p>
              <div className="flex flex-col gap-2">
                {[
                  ['Maandag – Vrijdag', 'Op afspraak'],
                  ['Uren', 'Te bespreken'],
                ].map(([day, hours]) => (
                  <div key={day} className="flex justify-between items-center">
                    <span className="text-slate-500 text-xs">{day}</span>
                    <span className="text-slate-800 text-xs font-medium">{hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-auto">
              <p className="text-slate-400 text-[10px] uppercase tracking-[0.2em] mb-4">Volg ons</p>
              <div className="flex gap-3">
                {[
                  { icon: Globe, href: '#', label: 'Website' },
                  { icon: Share2, href: '#', label: 'Delen' },
                ].map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} aria-label={label}
                    className="w-9 h-9 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#0EA5E9] hover:border-[#0EA5E9] transition-all duration-200"
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3 bg-white relative min-h-[380px]"
          >
            <iframe
              src="https://maps.google.com/maps?q=Kontichsesteenweg+73,+2550+Aartselaar&output=embed&z=15"
              width="100%"
              height="100%"
              className="w-full h-full min-h-[380px]"
              style={{ border: 0, filter: 'saturate(0.7) hue-rotate(180deg) brightness(1.1)' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Locatie Lucie Kine & Coach"
            />
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-end gap-0">
            <span className="font-display text-xl text-slate-900 tracking-widest">LUCIE KINE & COACH</span>
            <span className="text-[#0EA5E9] font-display text-2xl leading-none mb-0.5">.</span>
          </div>
          <p className="text-slate-400 text-xs uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} — Kinesitherapie & Performance Coaching Aartselaar
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-[#0EA5E9] text-xs uppercase tracking-widest transition-colors">Privacy</a>
            <a href="#" className="text-slate-400 hover:text-[#0EA5E9] text-xs uppercase tracking-widest transition-colors">Disclaimer</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

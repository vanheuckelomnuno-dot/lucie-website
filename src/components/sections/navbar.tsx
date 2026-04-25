'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Diensten', href: '#diensten' },
  { label: 'Over Ons', href: '#over-ons' },
  { label: 'Contact', href: '#contact' },
]

function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault()
  window.dispatchEvent(new CustomEvent('expandHero'))
  setTimeout(() => {
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }, 120)
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">

        {/* Nav links — centered */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              className={`text-[11px] uppercase tracking-[0.25em] transition-colors duration-200 hover:text-[#0EA5E9] ${
                scrolled ? 'text-slate-500' : 'text-white/80'
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#boek"
          onClick={(e) => handleNavClick(e, '#boek')}
          className="hidden md:inline-flex items-center bg-[#0EA5E9] text-white text-[11px] font-black uppercase tracking-[0.2em] px-7 py-3 hover:bg-sky-600 transition-colors duration-200"
        >
          Boek Afspraak
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-1 transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-200 px-6 py-8 flex flex-col gap-6 shadow-lg">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => { handleNavClick(e, href); setOpen(false) }}
              className="text-slate-600 text-sm uppercase tracking-[0.25em] py-1 hover:text-[#0EA5E9] transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="#boek"
            onClick={(e) => { handleNavClick(e, '#boek'); setOpen(false) }}
            className="bg-[#0EA5E9] text-white text-sm font-black uppercase tracking-[0.2em] py-4 text-center mt-2 hover:bg-sky-600 transition-colors"
          >
            Boek Afspraak
          </a>
        </div>
      )}
    </header>
  )
}

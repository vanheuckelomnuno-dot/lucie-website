'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/32470673446"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] text-white font-bold text-sm pl-4 pr-5 py-3.5 shadow-lg hover:bg-[#1fba58] transition-colors duration-200"
      style={{ borderRadius: 50 }}
    >
      <MessageCircle size={20} strokeWidth={2} />
      <span className="tracking-wide">WhatsApp</span>
    </motion.a>
  )
}

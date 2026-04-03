'use client'
import { motion } from 'framer-motion'
import { ShieldCheck, PhoneCall, EuroIcon } from 'lucide-react'
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay } }) }
const trustSignals = [{ icon: ShieldCheck, text: 'Clínicas con acreditación JCI' },{ icon: PhoneCall, text: 'Atención en español 24/7' },{ icon: EuroIcon, text: 'Sin costes ocultos' }]
const Hero = () => (
  <section className="bg-[#1a1a1a] pt-32 pb-20 md:pt-40 md:pb-28 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0} className="inline-flex items-center gap-2 mb-8">
        <span className="inline-block px-4 py-1.5 bg-[#C0272D] text-white text-xs font-semibold rounded-full tracking-wide uppercase">Empresa española · Clínicas certificadas JCI</span>
      </motion.div>
      <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={0.1} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-6">Opérate en Turquía.<br<span className="text-white">Sin riesgos.</span> <span className="text-white">Sin sorpresas.</span><br<span className="text-[#C0272D]">Con alguien de tu lado.</span></motion.h1>
      <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={0.2} className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">Somos el equipo español que selecciona las mejores clínicas de Turquía, gestiona todo el proceso y te acompaña desde la primera llamada hasta tu recuperación. Tú solo tienes que decidir.</motion.p>
      <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.3} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <a href="#contacto" className="inline-flex items-center justify-center px-8 py-4 bg-[#C0272D] text-white font-semibold rounded-md hover:bg-[#a61f24] transition-all duration-200 text-base shadow-lg">Agenda tu videollamada gratuita</a>
        <a href="#procedimientos" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-[#1a1a1a] transition-all duration-200">Ver procedimientos</a>
      </motion.div>
      <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.4} className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
        {trustSignals.map(({ icon: Icon, text }) => (<div key={text} className="flex items-center gap-2.5"><Icon size={18} className="text-[#C0272D] flex-shrink-0" /><span className="text-sm text-gray-300 font-medium">{text}</span></div>))}
      </motion.div>
    </div>
  </section>
)
export default Hero

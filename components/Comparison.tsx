'use client'
import { motion } from 'framer-motion'
import { X, Check } from 'lucide-react'
const rows = [{sin:'Hablas con un comercial turco por WhatsApp',con:'Hablas con un consultor expañol que te entiende'},{sin:'Eliges clínica por precio o por Instagram',con:'Clínica seleccionada y auditada por nuestro equipo'},{sin: 'Si algo sale mal, nadie responde',con:'Garantía médica y mediación incluida'},{sin:'Contrato en turco que no entiendes',con: 'Contrato en español, claro y legal'},{sin: 'Tu familia no sabe nada hasta que vuelves',con:'Tu familia informada en todo momento'},{sin:'Postoperatorio: apáñatelas',con: 'Seguimiento hasta tu recuperación total'}]
const Comparison = () => (
  <section className="bg-[#F4F4F4] py-20 md:py-28 px-4">
    <div className="max-w-5xl mx-auto">
      <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin: '-50px'}} transition={{duration:0.6,ease:'easeOut'}} className="text-center mb-14"><h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1a1a1a] mb-4">¿Por qué no ir por tu cuenta?</h2><p className="text-base md:text-lg text-[#666666] max-w-2xl mx-auto">Mucha gente lo intenta. Algunas veces sale bien. Otras veces acaban en urgencias de vuelta en España.</p></motion.div>
      <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin: '-50px'}} transition={{duration:0.6,ease:'easeOut'}} className="rounded-xl overflow-hidden shadow-sm border border-gray-200">
        <div className="grid grid-cols-2"><div className="bg-white px-6 py-4 border-b border-gray-200"><span className="text-sm font-bold text-[#666666] uppercase tracking-wide">Sin Medbe Care</span></div><div className="bg-[#C0272D] px-6 py-4 border-b border-[#a61f24]"><span className="text-sm font-bold text-white uppercase tracking-wide">Con Medbe Care</span></div></div>
        {rows.map(({sin,con},i) => (<div key={i} className="grid grid-cols-2"><div className="bg-white px-6 py-5 border-b border-gray-100 flex items-start gap-3"><div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5"><X size={12} className="text-[#C0272D]" strokeWidth={3} /></div><p className="text-sm text-[#666666] leading-relaxed">{sin}</p></div><div className="bg-[#FFF5F5] px-6 py-5 border-b border-red-100 flex items-start gap-3"><div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#C0272D] flex items-center justify-center mt-0.5"><Check size={12} className="text-white" strokeWidth={3} /></div><p className="text-sm text-[#1a1a1a] font-medium leading-relaxed">{con}</p></div></div>))}
      </motion.div>
    </div>
  </section>
)
export default Comparison

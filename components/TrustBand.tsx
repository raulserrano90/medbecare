'use client'
import { motion } from 'framer-motion'
const TrustBand = () => (
  <section className="bg-[#C0272D] py-10 md:py-14 px-4">
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }} className="max-w-4xl mx-auto text-center">
      <p className="text-white text-base md:text-lg lg:text-xl font-medium leading-relaxed">Más de{' '}<span className="font-bold text-white">1.4 millones de personas</span>{' '}viajaron a Turquía para operarse en 2023. La diferencia entre una experiencia increíble y un desastre está en{'h '}<span className="font-bold underline underline-offset-4">quién te acompaña</span>.</p>
    </motion.div>
  </section>
)
export default TrustBand

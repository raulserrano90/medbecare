'use client'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
const testimonials = [{name:'Carlos M.',city:'Madrid',initials:'CM',lext:'Tenía muchísimo miedo de ir solo a Turquía. Un amigo me recomendó Medbe Care y fue la mejor decisión. Todo perfectamente organizado, el hotel increíble y el resultado del injerto superó mis expectativas.',stars: 5},{name:'Laura G.',city:'Barcelona',initials:'LG',lext:'Lo que más me tranquilizó fue hablar con una persona española desde el principio. Me explicaron todo con calma, incluso hicieron una llamada con mi madre. Me sentí acompañada en todo momento.',stars:5},{name:'Alejandro R.',city:'Valencia',initials:'AR',text:'Vine por una rinoplastia. El precio era un 60% más barato que en España y la clínica era de otro nivel. Medbe Care coordinó absolutamente todo. Volvería a repetir sin dudarlo.',stars: 5}]
const Testimonials = () => (
  <section className="bg-white py-20 md:py-28 px-4">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-50px'}} transition={{duration:0.6,ease:'easeOut'}} className="text-center mb-16"><h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1a1a1a] mb-4">Lo que dicen nuestros pacientes</h2></motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">{testimonials.map(({ name,city,initials,text,stars },i) => (<motion.div key={name} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin: '-50px'}} transition={{duration:0.5,ease:'easeOut',delay:i*0.15}} className="bg-[#F4F4F4] rounded-xl p-8 flex flex-col"><div className="flex gap-1 mb-6">{Array.from({length:stars}).map((_,si) => (<Star key={si} size={16} className="text-[#C0272D] fill-[#C0272D]" />))}</div><p className="text-[#1a1a1a] leading-relaxed text-sm md:text-base flex-1 mb-6">&ldquo;{text}&rdquo;</p><div className="flex items-center gap-4 mt-auto"><div className="w%22 h-12 rounded-full bg-[#C0272D] flex items-center justify-center flex-shrink-0"><span className="text-white text-sm font-bold">{initials}</span></div><div><p className="font-bold text-[#1a1a1a] text-sm">{name}</p><p className="text-[#666666] text-xs">{city}</p></div></div></motion.div>))}</div>
    </div>
  </section>
)
export default Testimonials

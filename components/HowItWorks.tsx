'use client'
import { motion } from 'framer-motion'
const steps = [{number:'01',title:'Nos contactas',description:'Rellenas el formulario o nos escribes. En menos de 24 horas tienes respuesta de un consultor español real.'},{number:'02',title:'Videollamada con tu familia',description:'Hacemos una videollamada contigo y con quien tú quieras — pareja, padres, quien te apoye. Resolvemos todas las dudas, sin presión, sin prisas.'},{number:'03',title:'Coordinamos todo',description:'Seleccionamos la clínica ideal para tu caso, gestionamos fechas, hotel de 5 estrellas, traslados y toda la logíd�4ica. Tú no mueves un dedo.'},{number:'04',title:'Te operan. Te cuidamos.',description:'Estamos contigo antes, durante y después. Seguimiento postoperatorio real hasta que estés recuperado al 100%.'}]
const HowItWorks = () => (
  <section id="como-funciona" className="bg-[#F4F4F4] py-20 md:py-28 px-4">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin: '-50px'}} transition={{duration:0.6,ease:'easeOut'}} className="text-center mb-16"><h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1a1a1a] mb-4">Tu proceso, paso a paso</h2><p className="text-base md:text-lg text-[#666666] max-w-xl mx-auto">Simple, claro y sin sorpresas. Así trabajamos en Medbe Care.</p></motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">{steps.map(({ number,title,description},i) => (<motion.div key={number} initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-50px'}} transition={{duration:0.5,ease:'easeOut',delay:i*0.12}} className="relative"><div className="text-6xl font-black text-[#C0272D] mb-4 leading-none">{number}</div><h3 className="text-lg font-bold text-[#1a1a1a] mb-3">{title}</h3><p className="text-[#666666] text-sm md:text-base leading-relaxed">{description}</p></motion.div>))}</div>
    </div>
  </section>
)
export default HowItWorks

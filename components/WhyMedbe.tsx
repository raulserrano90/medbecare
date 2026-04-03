'use client'
import { motion } from 'framer-motion'
import { ShieldCheck, User, Heart } from 'lucide-react'
const cards = [{icon: ShieldCheck,title: 'Solo clínicas certificadas',description: 'Trabajamos exclusivamente con hospitales acreditados internacionalmente. Antes de enviarte a cualquier clínica, la hemos auditado nosotros. No trabajamos con cualquiera.'},{icon: User,title: 'Un español de tu lado',description: 'Cuando entras en contacto con Medbe Care, hablas con alguien de tu país. Nada de WhatsApps con turcos que chapurrean español. Un consultor real, de tu cultura, que entiende tus miedos.'},{icon: Heart,title: 'Acompañamiento total',description: 'Desde la primera llamada hasta que estés recuperado en casa. Coordinamos la clínica, el hotel, los traslados y el seguimiento postoperatorio. Tú no gestionas nada.'}]
const cardVariant = {hidden:{opacity:0,y:40},visible:(i:number)=>({opacity:1,y:0,transition:{duration:0.5,ease:'easeOut',delay:i*0.15}})}
const WhyMedbe = () => (
  <section id="por-que-nosotros" className="bg-white py-20 md:py-28 px-4">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-50px'}} transition={{duration:0.6,ease:'easeOut'}} className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1a1a1a] mb-4">No somos una agencia más</h2>
        <p className="text-base md:text-lg text-[#666666] max-w-2xl mx-auto leading-relaxed">Somos el puente entre tú y las mejores clínicas de Turquía. Con estándares europeos, contrato en español y un equipo que responde de verdad.</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">{cards.map(({ icon: Icon, title, description }, i) => (<motion.div key={title} custom={i} variants={cardVariant} initial="hidden" whileInView="visible" viewport={{once:true,margin:'-50px'}} className="bg-[#F4F4F4] rounded-xl p-8 flex flex-col"><div className="w-12 h-12 bg-[#C0272D] rounded-lg flex items-center justify-center mb-6 flex-shrink-0"><Icon size={24} className="text-white" /></div><h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{title}</h3><p className="text-[#666666] leading-relaxed text-sm md:text-base">{description}</p></motion.div>))}</div>
    </div>
  </section>
)
export default WhyMedbe

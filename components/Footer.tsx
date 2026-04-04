'use client'
import { Mail, MessageCircle, Instagram } from 'lucide-react'
const navLinks = [{label:'Procedimientos',href:'#procedimientos'},{label:'Cómo funciona',href:'#como-funciona'},{label:'Por qué nosotros',href:'#por-que-nosotros'},{label:'Contacto',href:'#contacto'}]
const contactInfo = [{icon:Mail,label:'hola@medbecare.com',href:'mailto:hola@medbecare.com'},{icon:MessageCircle,label:'+34 600 000 000',href:'https://wa.me/34600000000'},{icon:Instagram,label:'@medbecare',href:'https://instagram.com/medbecare'}]
const Footer = () => (
  <footer className="bg-[#1a1a1a] pt-16 pb-8 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div><div className="flex items-center gap-1 mb-4"><span className="text-xl font-black text-[#C0272D]">MEDBE</span><span className="text-xl font-black text-white">CARE</span></div><p className="text-sm text-[#666666] leading-relaxed">Empresa española especializada en turismo médico hacia Turquía. Clínicas certificadas, atención real, resultados garantizados.</p></div>
        <div><h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">Navegación</h4><ul className="space-y-3">{navLinks.map(({label,href}) => (<li key={label}><a href={href} className="text-sm text-[#666666] hover:text-white transition-colors duration-200">{label}</a></li>))}</ul></div>
        <div><h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">Contacto</h4><ul className="space-y-3">{contactInfo.map(({icon:Icon,label,href}) => (<li key={label}><a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-[#666666] hover:text-white transition-colors duration-200"><Icon size={16} className="text-[#C0272D] flex-shrink-0" />{label}</a></li>))}</ul></div>
      </div>
      <div className="border-t border-[#2a2a2a] pt-8"><div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#444444]"><p>© 2025 Medbe Care. Todos los derechos reservados.</p><div className="flex items-center gap-4"><a href="#" className="hover:text-gray-300 transition-colors duration-200">Política de privacidad</a><span>·</span><a href="#" className="hover:text-gray-300 transition-colors duration-200">Aviso legal</a></div></div></div>
    </div>
  </footer>
)
export default Footer

'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => { const h = () => setScrolled(window.scrollY > 20); window.addEventListener('scroll', h); return () => window.removeEventListener('scroll', h) }, [])
  const navLinks = [{ label: 'Procedimientos', href: '#procedimientos' },{ label: 'Cómo funciona', href: '#como-funciona' },{ label: 'Por qué nosotros', href: '#por-que-nosotros' },{ label: 'Contacto', href: '#contacto' }]
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-none'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-1 flex-shrink-0"><span className="text-xl md:text-2xl font-black tracking-tight text-[#C0272D]">MEDBE</span><span className="text-xl md:text-2xl font-black tracking-tight text-[#1a1a1a]">CARE</span></a>
          <div className="hidden md:flex items-center gap-8">{navLinks.map(l => <a key={l.label} href={l.href} className="text-sm font-medium text-[#1a1a1a] hover:text-[#C0272D] transition-colors duration-200">{l.label}</a>)}</div>
          <div className="hidden md:block"><a href="#contacto" className="inline-flex items-center px-5 py-2.5 bg-[#C0272D] text-white text-sm font-semibold rounded-md hover:bg-[#a61f24] transition-colors duration-200">Agenda tu consulta gratuita</a></div>
          <button className="md:hidden p-2 text-[#1a1a1a]" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>
        </div>
        {menuOpen && (<div className="md:hidden border-t border-gray-100 py-4 space-y-3">{navLinks.map(l => <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} className="block px-2 py-2 text-sm font-medium text-[#1a1a1a] hover:text-[#C0272D] transition-colors">{l.label}</a>)}<a href="#contacto" onClick={() => setMenuOpen(false)} className="block mt-4 px-5 py-3 bg-[#C0272D] text-white text-sm font-semibold rounded-md text-center hover:bg-[#a61f24] transition-colors">Agenda tu consulta gratuita</a></div>)}
      </nav>
    </header>
  )
}
export default Navbar

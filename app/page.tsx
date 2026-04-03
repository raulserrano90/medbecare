// Página principal de Medbe Care — Landing Page
// Cada sección está en su propio componente dentro de /components

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBand from '@/components/TrustBand'
import WhyMedbe from '@/components/WhyMedbe'
import HowItWorks from '@/components/HowItWorks'
import Procedures from '@/components/Procedures'
import Comparison from '@/components/Comparison'
import Testimonials from '@/components/Testimonials'
import CTAFinal from '@/components/CTAFinal'
import Footer from '@/components/Footer'

export default function Home() {
  return (<main className="min-h-screen"><Navbar /><Hero /><TrustBand /><WhyMedbe /><HowItWorks /><Procedures /><Comparison /><Testimonials /><CTAFinal /><Footer /></main>)
}

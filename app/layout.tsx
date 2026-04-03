import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Medbe Care | Turismo Médico en Turquía con garantías',
  description: 'Empresa española especializada en turismo médico hacia Turquía. Clínicas certificadas JCI, atención en español 24/7 y sin costes ocultos.',
  openGraph: { title: 'Medbe Care', description: 'Turismo Médico en Turquía', type: 'website', locale: 'es_ES' },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.ico' },
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="es"><body className={inter.className}>{children}</body></html>)
}

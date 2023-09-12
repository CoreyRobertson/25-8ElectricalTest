

import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '25/8 Electrical',
  description: 'Professional electrical services in Melbourne. Licensed electricians for residential and commercial needs. Electrical safety inspections, switchboard upgrades, and 24/7 emergency call-outs.',
}

export default function RootLayout({ children }) {



  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  )
}

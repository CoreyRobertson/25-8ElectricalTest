

import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Head from 'next/head'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '25/8 Electrical',
  description: 'Professional electrical services in Melbourne. Licensed electricians for residential and commercial needs. Electrical safety inspections, switchboard upgrades, and 24/7 emergency call-outs.',
}

export default function RootLayout({ children }) {

  const jsonLD = `
  {
    "@context": "http://schema.org",
    "@type": "Organization",
    "name": "25/8 Electrical",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "6/21-23 Levanswell Rd",
      "addressLocality": "Moorabbin",
      "addressRegion": "Victoria",
      "postalCode": "3189"
    },
    "telephone": "0466-382-487",
    "url": "https://www.yourwebsite.com"
    
  }
`;

  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLD }} />
      </Head>
      <body className={inter.className}>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  )
}

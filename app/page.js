import Awards from '@/components/Awards'
import CTA1 from '@/components/CTA1'
import Header from '@/components/Header'
import Intro from '@/components/Intro'
import Services1 from '@/components/Services1'

import Testimonials from '@/components/Testimonials'
import Head from 'next/head'

export const metadata = {
  title: "25/8 Electrical",
  description: "Experience comprehensive electrical services with 25/8 Electrical - Bayside's leading electricians. Innovative solutions for all your electrical needs in Melbourne.",

}

export default function Home() {

  const jsonLD = `
  {
    "@context": "http://schema.org",
    "@type": "Organization",
    "name": "25/8 Electrical",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "9/26-28 Christensen Street",
      "addressLocality": "Cheltenham",
      "addressRegion": "Victoria",
      "postalCode": "3192"
    },
    "telephone": "0466-382-487",
    "url": "https://www.yourwebsite.com"
    "sameAs": [
      "https://www.facebook.com/258electrical",
      "https://www.instagram.com/258electrical",
      "https://www.linkedin.com/company/258electrical",
      "https://www.tiktok.com/@258electrical"
  ]
  }
`;



  return (
    <main>
      <Head>
        <title>25/8 Electrical, comprehensive electrical services and high quality electricians, Bayside, Victoria</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLD }} />
        <link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16" />
      </Head>
      <Header />
      <Services1 />
      <Awards />
      <CTA1 />
      <Intro />
      <Testimonials />
    </main>
  )
}

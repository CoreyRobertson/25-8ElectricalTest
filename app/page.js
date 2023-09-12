import Awards from '@/components/Awards'
import CTA1 from '@/components/CTA1'
import Header from '@/components/Header'
import Intro from '@/components/Intro'
import Services1 from '@/components/Services1'

import Testimonials from '@/components/Testimonials'

import Head from 'next/head';

export default function Home() {

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
        <title>25/8 Electrical - Your Trusted Electrical Solutions Provider</title>
        <meta
          name="description"
          content="25/8 Electrical is your trusted provider of inspired electrical solutions. Get a free quote or book a service with us today."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLD }} />
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

import Bio from '@/components/Bio'
import Profiles from '@/components/profiles'
import Head from 'next/head';
import React from 'react'


const structuredData = {
    "@context": "http://schema.org",
    "@type": "AboutPage",
    "name": "About 25/8 Electrical",
    "description": "Learn about 25/8 Electrical, a trusted electrical services provider in Melbourne. Discover our commitment to safety and excellence."
};

const page = () => {
    return (
        <section>
            <Head>
                <title>About 25/8 Electrical</title>
                <meta
                    name="description"
                    content="Learn about 25/8 Electrical, a trusted electrical services provider in Melbourne. Discover our commitment to safety and excellence."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </Head>
            <Bio />

            <Profiles />
        </section>
    )
}

export default page
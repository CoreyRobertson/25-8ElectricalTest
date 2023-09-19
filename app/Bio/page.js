import Bio from '@/components/Bio'
import Profiles from '@/components/profiles'
import Head from 'next/head';
import React from 'react'

export const metadata = {
    title: "25/8 Electrical, About Us",
    description: "25/8 Electrical: Leading in safety & innovation. Meet Jamie George, our visionary MD, driving excellence in Melbourne's electrical domain.",

}


const page = () => {
    return (
        <section>
            <Bio />

            <Profiles />
        </section>
    )
}

export default page
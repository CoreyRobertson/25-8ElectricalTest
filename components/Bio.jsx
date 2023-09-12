'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import Head from 'next/head';

const fadeIn = (direction, type, delay, duration) => ({
    hidden: {
        x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
        y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
        opacity: 0,
    },
    show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            type,
            delay,
            duration,
            ease: 'easeOut',
        },
    },
});

const structuredData = {
    "@context": "http://schema.org",
    "@type": "AboutPage",
    "name": "About 25/8 Electrical",
    "description": "Learn about 25/8 Electrical, a trusted electrical services provider in Melbourne. Discover our commitment to safety and excellence."
};

const Bio = () => {

    return (
        <section className='bio_container'>
            <Head>
                <title>About 25/8 Electrical</title>
                <meta
                    name="description"
                    content="Learn about 25/8 Electrical, a trusted electrical services provider in Melbourne. Discover our commitment to safety and excellence."
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </Head>
            <div className='bio_content-container'>
                <div className='bio_text-container'>
                    <motion.h3 variants={fadeIn('', 'tween', 0.3, 0.3)} initial='hidden' whileInView='show' className='section_header'>ABOUT 25/8 ELECTRICAL</motion.h3>
                    <motion.p variants={fadeIn('', 'tween', 0.6, 0.3)} initial='hidden' whileInView='show'>
                        Originating in the vibrant southeastern suburbs of Melbourne, 25/8 Electrical stands as a
                        testament to industrious entrepreneurship and a deep sense of family values. Built upon
                        principles of hard work, business acumen, and a strong sense of unity, our company is
                        dedicated to leaving a positive impact and contributing to a brighter future through
                        innovative electrical solutions.
                        <br />
                        <br />
                        We hold a firm belief that every project, no matter its size, holds the potential to contribute
                        to a safer and more efficient world. Guided by an unwavering commitment to excellence,
                        25/8 Electrical is a beacon of proficiency, adept in various electrical environments ranging
                        from residential to commercial and industrial contexts.
                        <br />
                        <br />
                        Today, our company stands as an embodiment of a dual passion – Jamie’s enthusiasm for
                        business and finance seamlessly intertwined with an unyielding dedication to electrical
                        safety. With a confident stance, we assure our clients that no project is too large or small for
                        our capabilities.
                        <br />
                        <br />
                        As we continue to grow, 25/8 Electrical remains devoted to staying ahead of industry
                        standards and advancements. Our commitment extends beyond personal aspirations, as we
                        seek to enhance the safety and well-being of a diverse range of individuals. We envision a
                        future where electrical solutions transcend boundaries, enriching communities and
                        empowering them for years to come.
                    </motion.p>
                </div>
                <div className='bio_image-container'>
                    <Image className='bio_image' src='/images/Jamie.png' height={760} width={650} quality={100} layout='responsive' alt='Van' />
                </div>
            </div>
        </section>
    )
}

export default Bio
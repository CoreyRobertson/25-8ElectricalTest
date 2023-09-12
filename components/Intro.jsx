'use client'

import Image from 'next/image'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BsFacebook, BsGoogle } from 'react-icons/bs'
import { motion } from 'framer-motion'

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

const Intro = () => {
    return (
        <section className='intro_container'>
            <div className='intro_content-container'>
                <div className='intro_left'>
                    <motion.h2 variants={fadeIn('', 'tween', 0.3, 0.6)} initial='hidden' whileInView='show' className='section_header'>EMPOWERING HOMES AND BUSINESSES: OUR MISSION.</motion.h2>
                    <motion.p variants={fadeIn('', 'tween', 0.5, 0.6)} initial='hidden' whileInView='show'>At the heart of our success lies an unwavering dedication to delivering exceptional customer experiences. This commitment, paired with our impeccable reputation, positions us among the finest electrical companies in Melbourne.
                        <br />
                        <br />
                        From residential to commercial and property management domains, our versatile services cover it all. Your ultimate destination for comprehensive electrical solutions, we cater to everything; from maintenance and cutting-edge installations to swift and reliable repairs. Every member of our electrician team is not just licensed and insured but meticulously skilled, ensuring your peace of mind.
                        <br />
                        <br />
                        Don't risk your time and resources with an inexperienced electrician. At 25/8 Electrical, we exclusively bring on board licensed and adept professionals who never compromise on quality. Your satisfaction and safety are our priorities, day in and day out.</motion.p>
                </div>
                <div className='intro_right'>
                    <div className='intro_icon-container'>
                        <BsGoogle size={60} color='var(--color-yellow)' alt='GoogleIcon' />
                        <div className='intro_icon-text_container'>
                            <p>5.0 Average</p>
                            <div className='star_icon-container'>
                                <AiFillStar size={30} color='var(--color-yellow)' />
                                <AiFillStar size={30} color='var(--color-yellow)' />
                                <AiFillStar size={30} color='var(--color-yellow)' />
                                <AiFillStar size={30} color='var(--color-yellow)' />
                                <AiFillStar size={30} color='var(--color-yellow)' />
                            </div>
                        </div>

                    </div>
                    <div className='intro_icon-container'>
                        <BsFacebook size={60} color='var(--color-yellow)' alt='FacebookIcon' />
                        <div className='intro_icon-text_container'>
                            <p>5.0 Average</p>
                            <div className='star_icon-container'>
                                <AiFillStar size={30} color='var(--color-yellow)' />
                                <AiFillStar size={30} color='var(--color-yellow)' />
                                <AiFillStar size={30} color='var(--color-yellow)' />
                                <AiFillStar size={30} color='var(--color-yellow)' />
                                <AiFillStar size={30} color='var(--color-yellow)' />
                            </div>
                        </div>

                    </div>
                    <Image src='/images/tools.png' layout='responsive' height={400} width={400} alt='Tools' />
                </div>
            </div>
        </section>
    )
}

export default Intro
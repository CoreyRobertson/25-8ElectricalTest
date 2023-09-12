'use client'

import React, { useEffect, useState } from 'react'
import servicesCardData from '@/utils/servicesCardData'
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Map from './Map';

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


const Services2 = () => {

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1 },
        animate: {
            duration: 0.3,
        },
    };

    const staggerDuration = 0.1; // Adjust this value to control the stagger duration

    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        setHasAnimated(true);
    }, []);



    return (
        <section className='services2_container'>
            <div className='services2_content-container'>
                <motion.h3 variants={fadeIn('', 'tween', 0.3, 0.6)} initial='hidden' whileInView='show' className='section_header'>DIVERSE SOLUTIONS, ONE TRUSTED SOURCE.</motion.h3>
                <motion.p variants={fadeIn('', 'tween', 0.5, 0.6)} initial='hidden' whileInView='show'>We are dedicated to providing  exceptional services to our clients, ensuring their needs are met with excellence. Here's an overview of the electrical services and sub-industries we cater to:</motion.p>
                <div className='services2_card-container'>
                    {servicesCardData.map((card) => (
                        <motion.div
                            initial={hasAnimated ? 'visible' : 'hidden'}
                            whileInView='visible'
                            variants={itemVariants}
                            exit='hidden'
                            transition={{
                                delay: card.id * staggerDuration,
                            }}
                            key={card.id}
                            className='services2_card'
                        >
                            <Image className='card_image' src={card.image} height={330} width={330} alt={`${card.title} service`} />
                            <h3>{card.title}</h3>
                            <motion.button
                                className='card_button'
                                initial={{ opacity: 0, transform: 'translate(50px, 50px)' }}
                                animate={{ opacity: 1, transform: 'translate(0, 0)' }}
                                exit={{ opacity: 0, transform: 'translate(50px, 50px)' }}
                                transition={{ duration: 0.3 }}
                            >
                                Learn More
                            </motion.button>
                        </motion.div>

                    ))}

                </div>

            </div>

        </section >
    )
}

export default Services2
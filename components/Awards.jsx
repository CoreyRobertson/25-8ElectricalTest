'use client'

import React, { useEffect, useState } from 'react';
import { FaAward } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineStar } from 'react-icons/ai';


const Awards = () => {

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1 },
        animate: {
            duration: 0.3,
        },
    };

    const staggerDuration = 0.1; // Adjust this value to control the stagger duration

    const technologies = [
        { icon: FaAward, title: 'Registered Electrical Contractor REC - 34071' },
        { icon: FaAward, title: 'ACRS Accredited' },
        { icon: FaAward, title: 'Registered Electrician' },
        { icon: FaAward, title: 'Airtasker Verified' },
        { icon: AiOutlineStar, title: '5 Star Reviewed ' }
    ];

    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        setHasAnimated(true);
    }, []);

    return (
        <section className='awards_container'>
            <AnimatePresence>
                {technologies.map(({ icon: Icon, title }, index) => (
                    <motion.div
                        key={index}
                        className='award_card'
                        initial={hasAnimated ? 'visible' : 'hidden'}
                        whileInView='visible'
                        variants={itemVariants}
                        exit='hidden'
                        transition={{
                            delay: index * staggerDuration,
                        }}
                    >
                        <Icon size={80} color='var(--color-yellow)' />
                        <p>{title}</p>
                    </motion.div>
                ))}
            </AnimatePresence>
        </section>
    )
}

export default Awards
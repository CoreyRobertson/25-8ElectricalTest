'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BsGoogle } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';

const testimonials = [
    {
        id: 1,
        name: 'Andy',
        review: 'I highly recommend Jamie for anyone seeking a certified Electrician and will definitely be using him for all of my future endeavours with my electrical faults.'
    },
    {
        id: 2,
        name: 'Harry',
        review: 'Massive thank you to Jamie for getting my pendants installed over the weekend! Great pricing & will recommend!'
    },
    {
        id: 3,
        name: 'Gigi',
        review: 'Couldn’t recommend Jamie highly enough. Professional service, five stars all the way!'
    }
];

const generateJsonLd = () => {
    const itemListElements = testimonials.map((testimonial, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
            "@type": "Review",
            "reviewBody": testimonial.review,
            "name": testimonial.name,
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": 5
            }
        }
    }));

    return JSON.stringify({
        "@context": "http://schema.org",
        "@type": "ItemList",
        "itemListElement": itemListElements
    });
};

const Testimonials = () => {
    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1 },
        animate: {
            duration: 0.3,
        },
    };

    const staggerDuration = 0.1;

    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        setHasAnimated(true);
    }, []);

    return (
        <section className='testimonials_container'>

            {testimonials.map((testimonial) => (
                <motion.div
                    initial={hasAnimated ? 'visible' : 'hidden'}
                    whileInView='visible'
                    variants={itemVariants}
                    exit='hidden'
                    transition={{
                        delay: testimonial.id * staggerDuration,
                    }}
                    key={testimonial.id}
                    className='testimonial_card'
                >
                    <div className='testimonial_card-heading'>
                        <h2>{testimonial.name}</h2>
                    </div>
                    <p>{testimonial.review}</p>
                    <div className='stars'>
                        <BsGoogle size={50} color='var(--color-yellow)' />
                        <AiFillStar color='var(--color-yellow)' size={30} />
                        <AiFillStar color='var(--color-yellow)' size={30} />
                        <AiFillStar color='var(--color-yellow)' size={30} />
                        <AiFillStar color='var(--color-yellow)' size={30} />
                        <AiFillStar color='var(--color-yellow)' size={30} />
                    </div>
                </motion.div>
            ))}
            {/* JSON-LD Structured Data */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateJsonLd() }} />
        </section>
    );
}

export default Testimonials;

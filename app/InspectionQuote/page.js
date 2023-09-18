'use client'

import PricingCard from '@/components/PricingCard';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';

export const metadata = {
    title: "25/8 Electrical",
    description: "Melbourne's trusted partner in innovative electrical solutions.",

}

const ElectricalService = () => {



    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1 },
        animate: {
            duration: .3,
        },
    };

    const staggerDuration = 0.1; // Adjust this value to control the stagger duration

    const [prices, setPrices] = useState([]);

    useEffect(() => {
        fetchPrices();
    }, []);

    const fetchPrices = async () => {
        const { data } = await axios.get('/api/getproducts');
        setPrices(data);
    };

    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        setHasAnimated(true);
    }, []);

    // JSON-LD structured data
    const jsonLD = {
        "@context": "http://schema.org",
        "@type": "Product",
        "name": "Electrical Safety Service",
        "description": "Protection and peace of mind, guaranteed. Learn about our Electrical Safety Service and pricing. Book now!",
        "offers": {
            "@type": "Offer",
            "price": "341.00", // Replace with the actual price
            "priceCurrency": "AUD", // Replace with the appropriate currency code
            "availability": "http://schema.org/InStock" // Change to 'OutOfStock' if applicable
        }
    };

    const pricingCardRef = React.useRef(null);

    const scrollToPricing = () => {
        pricingCardRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (



        <section className='service_pricing-page' >
            <Head>

            </Head>
            <div className='pricing_top-container'>
                <h2 className='pricing_section-header'>IN-PERSON INSPECTION AND QUOTE</h2>
                <h3>Understanding your project.</h3>
                <p>At 25/8 Electrical, we understand that every electrical project is unique, which is why we offer personalised, in-person quotes, reports, and electrical inspections tailored to your specific needs. Our team of highly skilled and certified electricians is committed to ensuring the safety and efficiency of your electrical systems.
                    <br />
                    <br />
                    When you choose our services, you can expect a thorough assessment of your electrical setup, clear and transparent pricing, and expert recommendations to address any issues or improvements needed.
                    <br />
                    <br />
                    We take pride in our attention to detail, reliability, and dedication to delivering top-notch customer satisfaction. With 25/8 Electrical, you can trust that your electrical projects are in capable hands, ensuring peace of mind and the highest quality service.</p>
            </div>
            <div className='pricing_card-container' ref={pricingCardRef}>
                {prices && prices.length > 0 && ( // Check if prices array is not empty
                    <motion.div
                        key={prices[2].id} // Use the first price's ID as the key
                        initial='hidden'
                        whileInView='visible'
                        variants={itemVariants}
                        exit='hidden'
                        transition={{
                            delay: 0.5, // No delay for the first instance
                        }}
                    >
                        <PricingCard price={prices[2]} /> {/* Render the first instance */}
                    </motion.div>
                )}
            </div>
        </section>

    );
};

export default ElectricalService;

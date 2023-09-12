'use client'

import PricingCard from '@/components/PricingCard';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';

const Page = () => {
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

    const structuredData = {
        "@context": "http://schema.org",
        "@type": "Product",
        "name": "Smoke Alarm Safety Service",
        "description": "Protection and peace of mind, guaranteed.",
        "offers": {
            "@type": "Offer",
            "price": "108.90", // Replace with the actual price
            "priceCurrency": "AUD", // Replace with the appropriate currency code
            "availability": "http://schema.org/InStock" // Change to 'OutOfStock' if applicable
        }
    };

    return (
        <section className='service_pricing-page'>
            <Head>
                <title>Smoke Alarm Safety Service - 25/8 Electrical</title>
                <meta name="description" content="Protection and peace of mind, guaranteed. Learn about our Smoke Alarm Safety Service and pricing. Book now!" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
            </Head>
            <div className='pricing_top-container'>
                <h2 className='pricing_section-header'>SMOKE ALARM SAFETY SERVICE</h2>
                <h3>Protection and peace of mind, guaranteed.</h3>
                <button href='#Card' className='service_button-yellow'>BOOK NOW</button>
                <p>
                    Smoke alarms play a vital role in preserving lives when they are installed, strategically positioned, and function as intended. Many Australian households lack a functioning detector, risking the safety of its occupants.
                    <br />
                    <br />
                    In order to mitigate this risk, it is crucial for households and owners to comply with the national recommendation of annual servicing for smoke alarms, which is mandatory in several states. This measure ensures not only compliance with legal requirements but also underscores our unwavering commitment to safeguarding lives and properties.
                </p>
            </div>
            <div className='pricing_middle-container'>
                <h2 className='pricing_section-header'>What's included in our smoke alarm safety service?</h2>
                <div className='pricing_middle-grid'>
                    <div className='pricing_middle-card'>
                        <h3>SAFETY ASSESSMENT</h3>
                        <p>A thorough inspection of each alarm within your home, including a power supply analysis, button and sound checks.
                        </p>
                    </div>

                    <div className='pricing_middle-card'>
                        <h3>BATTERY REPLACEMENT</h3>
                        <p>
                            Replacement of non-functional batteries.
                        </p>
                    </div>
                    <div className='pricing_middle-card'>
                        <h3>FAULTY DETECTOR REPLACEMENT</h3>
                        <p>Replacement of expired or faulty smoke detectors.
                        </p>
                    </div>
                    <div className='pricing_middle-card'>
                        <h3>DETECTOR EFFICACY CHECK</h3>
                        <p>Assessment of detector positioning, compliance appropriate positioning.
                        </p>
                    </div>

                </div>

            </div>
            <div className='pricing_bottom-container'>
                <h2 className='pricing_section-header'>Legislation, regulations and compliance.</h2>
                <h3>AUSTRALIAN REGULATIONS</h3>
                <p>
                    In accordance with The Building Code of Australia (2016) as well as Australian Standards AS 3786-2014, smoke detectors and alarms must be installed correctly and in an efficient position, and must be compliant in accordance to Australian regulatory standards.
                    <br />
                    <br />
                    While the importance of smoke detectors is commonplace Australia-wide, each state enforces parts of the Building Code and Australian Standards, it is crucial for owners and occupants to understand and comply with this legislation.

                </p>
                <Link href='https://engage.vic.gov.au/rentingregulations' target='_blank'>
                    <button className='service_button-yellow'>READ MORE</button>
                </Link>
            </div>
            <div id='Card' className='pricing_card-container'>
                {prices && prices.length > 0 && ( // Check if prices array is not empty
                    <motion.div
                        key={prices[1].id} // Use the first price's ID as the key
                        initial='hidden'
                        whileInView='visible'
                        variants={itemVariants}
                        exit='hidden'
                        transition={{
                            delay: 0.5, // No delay for the first instance
                        }}
                    >
                        <PricingCard price={prices[1]} /> {/* Render the first instance */}
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Page;

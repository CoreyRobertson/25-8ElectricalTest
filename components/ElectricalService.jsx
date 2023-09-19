'use client'

import PricingCard from '@/components/PricingCard';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';


const ElectricalService = () => {



    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1 },
        animate: {
            duration: .3,
        },
    };


    const [prices, setPrices] = useState([]);

    useEffect(() => {
        fetchPrices();
    }, []);

    const fetchPrices = async () => {
        const { data } = await axios.get('/api/getproducts');
        setPrices(data);
    };

    // JSON-LD structured data
    const structuredData = {
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

    return (



        <section className='service_pricing-page' >
            <Head>
                <title>Electrical Safety Service - 25/8 Electrical</title>
                <meta name="description" content="Protection and peace of mind, guaranteed. Learn about our Smoke Alarm Safety Service and pricing. Book now!" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
            </Head>
            <div className='pricing_top-container'>
                <h2 className='pricing_section-header'>ELECTRICAL SAFETY SERVICE</h2>
                <h3>Protection and peace of mind, guaranteed.</h3>
                <a className='book_a' href='#PriceCard'>BOOK NOW</a>
                <p>Regular safety inspections of electrical appliances, fixtures, and installations are crucial for safeguarding renters from potential hazards caused by electrical issues, additionally ensuring property owners and managers can fulfil their responsibilities effectively.
                    <br />
                    <br />
                    Since March 2021, modifications to the Residential Tenancies Act in Victoria have mandated these inspections.
                    <br />
                    <br />
                    Our licensed electricians conduct thorough servicing, facilitated by our advanced workflow technology. This guarantees that all services are executed in full compliance with relevant standards, codes, and regulations.</p>
            </div>
            <div className='pricing_middle-container'>
                <h2 className='pricing_section-header'>What's included in our electrical safety service?</h2>
                <div className='pricing_middle-grid'>
                    <div className='pricing_middle-card'>
                        <h3>SWITCHBOARD TESTS</h3>
                        <p>Our comprehensive switchboard inspection encompasses a meticulous assessment involving condition and safety evaluation, insulation resistance testing (if necessary), and an RCD/safety switch test.
                            To ensure accuracy and compliance, we employ specialized tools equipped with integrated digital reporting, effectively documenting the test results for future reference.
                        </p>
                    </div>

                    <div className='pricing_middle-card'>
                        <h3>INSPECTION OF ELECTRICAL APPLIANCES</h3>
                        <p>Conducting a comprehensive examination of all electrical appliances provided by the owner, meticulously assessing each item for any signs of damage, wear, or deterioration in plugs, leads, and casings. Our experienced team ensures that every aspect of these appliances is carefully inspected.
                        </p>
                    </div>
                    <div className='pricing_middle-card'>
                        <h3>POWER POINT TESTS</h3>
                        <p>Conducting earth loop and polarity assessments on all accessible power outlets.
                        </p>
                    </div>
                    <div className='pricing_middle-card'>
                        <h3>FAULTY ITEM REPLACEMENT</h3>
                        <p>When we detect faulty or damaged safety switches, circuit breakers, or switches and power points, we proceed with prompt replacements using high-quality components that meet industry standards. This proactive approach ensures the reliability and functionality of your electrical infrastructure, reducing the risk of potential hazards and maintaining optimal performance.
                        </p>
                    </div>
                    <div className='pricing_middle-card'>
                        <h3>COMPREHENSIVE SAFETY CHECK</h3>
                        <p>When we detect faulty or damaged safety switches, circuit breakers, or switches and power points, we proceed with prompt replacements using high-quality components that meet industry standards. This proactive approach ensures the reliability and functionality of your electrical infrastructure, reducing the risk of potential hazards and maintaining optimal performance.
                        </p>
                    </div>
                </div>

            </div>
            <div className='pricing_bottom-container'>
                <h2 className='pricing_section-header'>Legislation, regulations and compliance.</h2>
                <h3>EFFECTIVE 29 MARCH, 2021.</h3>
                <p>
                    Property owner are obligated to arrange an electrical safety assessment for all electrical appliances, installations, and fixtures by a licensed or registered electrician every two years.
                    <br />
                    <br />
                    When requested, owners are required to provide tenants with the date of the latest safety inspection.
                    <br />
                    <br />
                    Should an electrical safety examination not have been conducted in the past 2 years, the property owner is obligated to promptly schedule one prior to occupation of the property.
                </p>
                <Link href='https://www.legislation.vic.gov.au/as-made/statutory-rules/residential-tenancies-regulations-2021-0' target='_blank' >
                    <button className='service_button-yellow'>RESIDENTIAL TENANCIES RULES</button>
                </Link>
            </div>
            <div id='PriceCard' className='pricing_card-container'>
                {prices && prices.length > 0 && ( // Check if prices array is not empty
                    <motion.div
                        key={prices[0].id} // Use the first price's ID as the key
                        initial='hidden'
                        whileInView='visible'
                        variants={itemVariants}
                        exit='hidden'
                        transition={{
                            delay: 0.5, // No delay for the first instance
                        }}
                    >
                        <PricingCard price={prices[0]} /> {/* Render the first instance */}
                    </motion.div>
                )}
            </div>
        </section>

    );
};

export default ElectricalService;

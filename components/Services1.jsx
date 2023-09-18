import React from 'react'
import Link from 'next/link'
import { AiOutlineCheckCircle } from 'react-icons/ai'

const jsonLD = `
{
    "@context": "http://schema.org",
    "@type": "ItemList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "item": {
                "@type": "Service",
                "name": "Electrical Safety Service",
                "description": "Our Electrical Safety Service ensures compliance with Victoria's regulations...",
                "url": "https://yourwebsite.com/ElectricalService"
            }
        },
        {
            "@type": "ListItem",
            "position": 2,
            "item": {
                "@type": "Service",
                "name": "Smoke Alarm Safety Service",
                "description": "Our Smoke Alarm Safety Service ensures your home is equipped for safety and compliance...",
                "url": "https://yourwebsite.com/DetectorService"
            }
        },
        // Add similar entries for other services
    ]
}
`;

const Services1 = () => {
    return (
        <section className='services1_container'>

            <div className='services1_content-container'>

                <h2 className='section_header'>OUR COMPREHENSIVE ELECTRICAL SERVICES.</h2>
                <div className='services1_type-container'>
                    <div className='services1_card'>
                        <div className='services1_card-heading'>
                            <h3>ELECTRICAL SAFETY SERVICE</h3>
                            <AiOutlineCheckCircle className='service_check' />
                        </div>
                        <p>Our Electrical Safety Service ensures compliance with Victoria's regulations, providing peace of mind for renters, owners, and managers. We offer comprehensive inspections, specialized tests, and proactive component replacements. Stay safe and compliant with our service, conducted by licensed electricians every two years. </p>
                        <Link href='/ElectricalService'>
                            <button type='button' className='service_button-yellow' aria-label='Book Electrical Safety Service'>BOOK NOW</button>
                        </Link>
                    </div>
                    <div className='services1_card'>
                        <div className='services1_card-heading'>
                            <h3>SMOKE ALARM SAFETY SERVICE</h3>
                            <AiOutlineCheckCircle className='service_check' />
                        </div>
                        <p>Our Smoke Alarm Safety Service ensures your home is equipped for safety and compliance. We conduct thorough inspections, replace batteries and faulty detectors, and check their efficacy. Protect lives and properties with our comprehensive service, aligned with Australian regulations and standards.</p>
                        <Link href='/DetectorService'>
                            <button type='button' className='service_button-yellow' aria-label='Book Smoke Alarm Safety Service'>BOOK NOW</button>
                        </Link>
                    </div>
                    <div className='services1_card'>
                        <div className='services1_card-heading'>
                            <h3>IN-PERSON INSPECTION AND QUOTE</h3>
                            <AiOutlineCheckCircle className='service_check' />
                        </div>
                        <p>At 25/8 Electrical, we understand that every electrical project is unique, which is why we offer personalised, in-person quotes, reports, and electrical inspections tailored to your specific needs. Our team is committed to ensuring the safety and efficiency of your electrical systems.</p>
                        <Link href='/InspectionQuote'>
                            <button type='button' className='service_button-yellow' aria-label='Book Now'>BOOK NOW</button>
                        </Link>
                    </div>

                </div>
                <Link href='/OurServices' className='explore_button-link'>
                    <button type='button' className='service_explore-button'>EXPLORE OUR FULL RANGE OF SERVICES
                    </button>
                </Link>
            </div>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLD }} />
        </section>
    )
}

export default Services1
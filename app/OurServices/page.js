import Link from 'next/link'
import React from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import Head from 'next/head'


export const metadata = {
    title: "25/8 Electrical | Services",
    description: "Explore our comprehensive electrical services, including Electrical Safety Service, Smoke Alarm Safety Service, 24/7 Emergency Callouts, Switchboard Upgrades, and more. Book now for expert electrical solutions.",

}

const page = () => {

    // JSON-LD structured data for all services
    const allServicesStructuredData = {
        "@context": "http://schema.org",
        "@type": "ItemList",
        "name": "Our Comprehensive Electrical Services",
        "description": "Explore our comprehensive electrical services, including Electrical Safety Service, Smoke Alarm Safety Service, 24/7 Emergency Callouts, Switchboard Upgrades, and more. Book now for expert electrical solutions.",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "item": {
                    "@type": "Service",
                    "serviceType": "Electrical Safety Service",
                    "provider": {
                        "@type": "Organization",
                        "name": "25/8 Electrical"
                    },
                    "description": "Ensure electrical safety and compliance with our Electrical Safety Service. Comprehensive inspections, specialized tests, and proactive component replacements by licensed electricians every two years.",
                    "areaServed": "Victoria, Australia"
                }
            },
            {
                "@type": "ListItem",
                "position": 2,
                "item": {
                    "@type": "Service",
                    "serviceType": "Smoke Alarm Safety Service",
                    "provider": {
                        "@type": "Organization",
                        "name": "25/8 Electrical"
                    },
                    "description": "Keep your home safe with our Smoke Alarm Safety Service. Thorough inspections, battery replacements, and detector checks in compliance with Australian regulations.",
                    "areaServed": "Victoria, Australia"
                }
            },
            {
                "@type": "ListItem",
                "position": 3,
                "item": {
                    "@type": "Service",
                    "serviceType": "In-person Inspection and Quote",
                    "provider": {
                        "@type": "Organization",
                        "name": "25/8 Electrical"
                    },
                    "description": "Experience a comprehensive in-person inspection of your property's electrical needs. Our qualified professionals will provide you with a detailed quote, ensuring you understand the work required and the associated costs. All services are performed in compliance with Australian regulations.",
                    "areaServed": "Victoria, Australia"
                }
            },
            {
                "@type": "ListItem",
                "position": 4,
                "item": {
                    "@type": "Service",
                    "serviceType": "24/7 Emergency Callouts",
                    "provider": {
                        "@type": "Organization",
                        "name": "25/8 Electrical"
                    },
                    "description": "We offer 24/7 emergency call-out services by expert licensed electricians. Promptly address power outages, faulty wiring, and more to keep homes and businesses safe.",
                    "areaServed": "Victoria, Australia"
                }
            },
            {
                "@type": "ListItem",
                "position": 5,
                "item": {
                    "@type": "Service",
                    "serviceType": "Switchboard Upgrades",
                    "provider": {
                        "@type": "Organization",
                        "name": "25/8 Electrical"
                    },
                    "description": "Upgrade to a safer, more efficient electrical system with our Switchboard Upgrades. Modernize switchboards for optimal performance and reduced risk.",
                    "areaServed": "Victoria, Australia"
                }
            },
            {
                "@type": "ListItem",
                "position": 6,
                "item": {
                    "@type": "Service",
                    "serviceType": "CCTV Surveillance Systems",
                    "provider": {
                        "@type": "Organization",
                        "name": "25/8 Electrical"
                    },
                    "description": "Enhance security with our CCTV Surveillance Systems. Deploy advanced cameras with integrated alarms and AI technology for vigilant surveillance and threat detection.",
                    "areaServed": "Victoria, Australia"
                }
            },
            {
                "@type": "ListItem",
                "position": 7,
                "item": {
                    "@type": "Service",
                    "serviceType": "Power and Lighting Upgrades",
                    "provider": {
                        "@type": "Organization",
                        "name": "25/8 Electrical"
                    },
                    "description": "Transform spaces with our Power and Lighting Upgrades. Expert solutions for installations, replacements, and tailored services.",
                    "areaServed": "Victoria, Australia"
                }
            },
            {
                "@type": "ListItem",
                "position": 8,
                "item": {
                    "@type": "Service",
                    "serviceType": "Fan Installations",
                    "provider": {
                        "@type": "Organization",
                        "name": "25/8 Electrical"
                    },
                    "description": "Enhance comfort with our Fan Installations. Expertly integrated designs for residential and commercial spaces.",
                    "areaServed": "Victoria, Australia"
                }
            },
            {
                "@type": "ListItem",
                "position": 9,
                "item": {
                    "@type": "Service",
                    "serviceType": "EV Charger Installations",
                    "provider": {
                        "@type": "Organization",
                        "name": "25/8 Electrical"
                    },
                    "description": "Experience the future of driving with our EV Charger Installations. Expert integration of chargers for electric vehicles.",
                    "areaServed": "Victoria, Australia"
                }
            }
        ]
    };

    return (
        <section className='ourservices_container'>
            <Head>
                <title>Our Comprehensive Electrical Services - 25/8 Electrical</title>
                <meta name="description" content="Explore our comprehensive electrical services, including Electrical Safety Service, Smoke Alarm Safety Service, 24/7 Emergency Callouts, Switchboard Upgrades, and more. Book now for expert electrical solutions." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(allServicesStructuredData) }} />
            </Head>
            <div className='ourservices_content-container'>

                <h2 className='section_header'>OUR COMPREHENSIVE ELECTRICAL SERVICES.</h2>
                <div className='ourservices_type-container'>
                    <div className='services1_card'>
                        <div className='services1_card-heading'>
                            <h3>ELECTRICAL SAFETY SERVICE</h3>
                            <AiOutlineCheckCircle className='service_check' />
                        </div>
                        <p>Our Electrical Safety Service ensures compliance with Victoria's regulations, providing peace of mind for renters, owners, and managers. We offer comprehensive inspections, specialized tests, and proactive component replacements. Stay safe and compliant with our service, conducted by licensed electricians every two years. </p>
                        <Link href='/ElectricalService'>
                            <button type='button' className='service_button-yellow'>BOOK NOW</button>
                        </Link>
                    </div>
                    <div className='services1_card'>
                        <div className='services1_card-heading'>
                            <h3>SMOKE ALARM SAFETY SERVICE</h3>
                            <AiOutlineCheckCircle className='service_check' />
                        </div>
                        <p>Our Smoke Alarm Safety Service ensures your home is equipped for safety and compliance. We conduct thorough inspections, replace batteries and faulty detectors, and check their efficacy. Protect lives and properties with our comprehensive service, aligned with Australian regulations and standards.</p>
                        <Link href='/DetectorService'>
                            <button type='button' className='service_button-yellow'>BOOK NOW</button>
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
                    <div className='services1_card'>
                        <div className='services1_card-heading'>
                            <h3>24/7 EMERGENCY CALLOUTS</h3>
                            <AiOutlineCheckCircle className='service_check' />
                        </div>
                        <p>Your reliable electrical partner, providing 24/7 emergency call-out services. Our
                            expert team of licensed electricians is ready to tackle any electrical crisis swiftly and
                            efficiently. From power outages to faulty wiring, trust us to keep your home or
                            business powered and safe, anytime, day or night.</p>
                        <Link href='Booking'>
                            <button type='button' className='service_button-black' aria-label='Book Now'>BOOK NOW</button>
                        </Link>
                    </div>
                    <div className='services1_card'>
                        <div className='services1_card-heading'>
                            <h3>SWITCHBOARD UPGRADES</h3>
                            <AiOutlineCheckCircle className='service_check' />
                        </div>
                        <p>Is your switchboard up to the challenge? Upgrade to a safer, more efficient electrical system
                            with 25/8 Electrical. Our expert team specializes in modernizing switchboards, ensuring
                            optimal performance and reducing the risk of electrical issues. Don't let outdated
                            equipment hold you back. Upgrade today for a brighter, safer future.</p>
                        <Link href='Booking'>
                            <button type='button' className='service_button-black' aria-label='Book Now'>BOOK NOW</button>
                        </Link>
                    </div>
                    <div className='services1_card'>
                        <div className='services1_card-heading'>
                            <h3>CCTV SURVEILLANCE SYSTEMS</h3>
                            <AiOutlineCheckCircle className='service_check' />
                        </div>
                        <p>Amid rising crime in Melbourne, deploying security cameras is a highly effective way to deter burglaries and protect your property.
                            <br />
                            <br />
                            We recommend the 8mp TIOC Dahua camera system, known for its advanced features, including integrated alarms and AI technology, offering vigilant surveillance and intelligent threat detection.
                        </p>
                        <Link href='Booking'>
                            <button type='button' className='service_button-black' aria-label='Book Now'>BOOK NOW</button>
                        </Link>
                    </div>
                    <div className='services1_card'>
                        <div className='services1_card-heading'>
                            <h3>POWER AND LIGHTING UPGRADES</h3>
                            <AiOutlineCheckCircle className='service_check' />
                        </div>
                        <p>
                            Transform spaces with 25/8 Electrical's expert power and lighting solutions. We excel in upgrades, installations, replacements, and tailored services. Contact us at 0466 382 487 to experience our top-tier craftsmanship and expertise for efficient and aesthetic environments.
                        </p>
                        <Link href='Booking'>
                            <button type='button' className='service_button-black' aria-label='Book Now'>BOOK NOW</button>
                        </Link>
                    </div>
                    <div className='services1_card'>
                        <div className='services1_card-heading'>
                            <h3>FAN INSTALLATIONS</h3>
                            <AiOutlineCheckCircle className='service_check' />
                        </div>
                        <p>
                            Beat the heat and enhance your space with 25/8 Electricals premium fan installation
                            services. Our skilled team brings you not just cool breezes, but also expertly integrated
                            designs that seamlessly complement your decor. Whether it's a residential haven or a
                            commercial setting, we're here to create a refreshing atmosphere tailored to your needs.
                            Elevate your comfort today.
                        </p>
                        <Link href='Booking'>
                            <button type='button' className='service_button-black' aria-label='Book Now'>BOOK NOW</button>
                        </Link>
                    </div>
                    <div className='services1_card'>
                        <div className='services1_card-heading'>
                            <h3>EV CHARGER INSTALLATIONS</h3>
                            <AiOutlineCheckCircle className='service_check' />
                        </div>
                        <p>
                            Experience the future of driving with our advanced EV charger installation services. As a premier electrical company, we provide expert installation of EV chargers, seamlessly integrating them into your space. Charge your electric vehicle efficiently and contribute to a sustainable tomorrow. Choose us for a smarter, greener drive.
                        </p>
                        <Link href='Booking'>
                            <button type='button' className='service_button-black' aria-label='Book Now'>BOOK NOW</button>
                        </Link>
                    </div>
                </div>

            </div>
        </section >
    )
}

export default page
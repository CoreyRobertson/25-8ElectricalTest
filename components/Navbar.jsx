'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BiMenuAltRight } from 'react-icons/bi'
import Overlay from './Overlay'
import { CiPhone } from 'react-icons/ci'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOverlay = () => {
        setIsOpen(!isOpen);
    };


    return (
        <nav>
            <div className='nav_brand-container'>
                <Link href='/'>
                    <Image src='/images/brand.png' alt='25/8 Electrical' layout='responsive' height={105} width={340} className='brand_image' />
                </Link>
            </div>
            <div>
                <ul className='nav_links-large'>
                    <Link className='explore_button-link' href='OurServices' passHref>
                        <li >OUR SERVICES</li>
                    </Link>
                    <Link className='explore_button-link' href='/ElectricalService' >
                        <li >ELECTRICAL SAFETY SERVICE</li>
                    </Link>
                    <Link className='explore_button-link' href='DetectorService' >
                        <li >SMOKE ALARM SAFETY SERVICE</li>
                    </Link>
                    <Link className='explore_button-link' href='Booking' >
                        <li >BOOK A SERVICE</li>
                    </Link>
                    <Link className='explore_button-link' href='Bio'>
                        <li >ABOUT US</li>
                    </Link>
                </ul>

                <div className="navbar">

                    <BiMenuAltRight className="hamburger" onClick={toggleOverlay} aria-label="Toggle Menu" alt='HamburgerIcon' />

                    <Overlay isOpen={isOpen} onClose={toggleOverlay} />
                </div>
            </div>
            <a className='nav_phone-number' href='tel:0466382487'><CiPhone className='overlay_phone' />0466 382 487</a>
        </nav >
    )
}

export default Navbar
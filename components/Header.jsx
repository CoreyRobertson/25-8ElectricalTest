import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { BsFillLightningChargeFill } from 'react-icons/bs'

const Header = () => {

    return (
        <header className='header_container'>

            <div>
                <h1><span>25<BsFillLightningChargeFill className='bolt' alt='Bolt' />8</span> ELECTRICAL</h1>
                <div className='header_content-container'>
                    <p>Your trusted provider of inspired electrical solutions.</p>
                    <div className='header_button-container'>

                        <button type='button' aria-label='Get a free quote'>GET A FREE QUOTE</button>

                        <Link href='Booking' style={{ textDecoration: 'none' }}>
                            <button type='button' aria-label='Book a service'>BOOK A SERVICE</button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
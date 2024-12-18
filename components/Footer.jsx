import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { CiFacebook, CiInstagram, CiLocationOn, CiMail, CiPhone, CiLinkedin } from 'react-icons/ci'
import { PiTiktokLogoLight } from 'react-icons/pi'
import Map from './Map'

const Footer = () => {

    const address = '9/26-28 Christensen Street, Cheltenham, Victoria'
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <div className='footer_container'>
                <div className='footer_left'>
                    <Link href='/'>
                        <div className='footer_brand'>
                            <Image src='/images/brand.png' alt='25/8 Electrical' layout='responsive' height={210} width={680} className='brand_image' />
                        </div>
                    </Link>


                </div>
                <div className='footer_right'>
                    <div className='footer_contact-container'>
                        <Link href='/PrivacyPolicy'>
                            Privacy Policy
                        </Link>
                        <Link href='ElectricalAgreementPlan'>
                            Electrical Agreement Plan
                        </Link>
                        <p><CiLocationOn className='contact_icon' /> 9/26-28 Christensen Street, Cheltenham VIC 3192  </p>
                        <a className='footer_phone-number' href='tel:0466382487'><CiPhone className='contact_icon' /> 0466 382 487</a>
                        <p><CiMail className='contact_icon' /> Info@258electrical.com.au  </p>
                        <div className='footer_icon-container'>

                            <Link href='https://www.facebook.com/258electrical ' aria-label="Visit our Facebook page">
                                <CiFacebook className='footer_contact-icon' color='var(--color-black)' cursor='pointer' alt='FacebookIcon' />
                            </Link>
                            <Link href='https://www.instagram.com/258electrical' aria-label="Visit our Instagram page">
                                <CiInstagram className='footer_contact-icon' color='var(--color-yellow)' cursor='pointer' alt='InstagramIcon' />
                            </Link>
                            <Link href='https://www.linkedin.com/company/258electrical/' target='_' aria-label="Visit our LinkedIn page">
                                <CiLinkedin className='footer_contact-icon' color='var(--color-black)' cursor='pointer' alt='LineinIcon' />
                            </Link>
                            <Link href='https://www.tiktok.com/@258electrical' aria-label="Visit our TikTok page">
                                <PiTiktokLogoLight className='footer_contact-icon' color='var(--color-yellow)' cursor='pointer' alt='TiktokIcon' />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
            <p>&copy; {currentYear} 25/8 Electrical. All Rights Reserved.</p>
        </footer >
    )
}

export default Footer
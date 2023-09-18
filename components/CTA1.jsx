import React from 'react'
import Form from './Form'
import { CiClock1, CiLocationOn, CiPhone } from 'react-icons/ci'

const CTA1 = () => {
    return (
        <section className='cta1_container-main' id='Cta'>
            <div className='cta1_container'>
                <div className='cta1_left'>
                    <h3>TELL US ABOUT YOUR PROJECT,</h3>
                    <p>we will get back to you with a competitive quote,<br /> or give us a call on  <span>0466 382 487.</span></p>
                </div>
                <div className='footer_right'>
                    <Form />
                </div>
            </div>


            <div className='cta2_bottom-container'>
                <div className='cta2_icon-container'>
                    <CiLocationOn size={80} color='var(--color-yellow)' alt='LocationIcon' />
                    <div className='icon_text'>
                        <p>We’ll make it there.</p>
                        <p>Servicing the wider Melbourne metropolitan area.</p>
                    </div>
                </div>
                <div className='cta2_icon-container'>
                    <CiClock1 size={60} color='var(--color-yellow)' alt='ClockIcon' />
                    <div className='icon_text'>
                        <p>Swift emergency response.</p>
                        <p>Round-the-clock emergency assistance.</p>
                    </div>
                </div>
                <div className='cta2_icon-container'>
                    <CiPhone size={60} color='var(--color-yellow)' alt='PhoneIcon' />
                    <p className='phone'>0466 382 487</p>

                </div>
            </div>
        </section>
    )
}

export default CTA1
import React from 'react'
import axios from 'axios'
import { AiOutlineCheckCircle } from 'react-icons/ai'

const PricingCard = ({ price, featureLists }) => {

    const dynamicDescription = (price) => {
        if (price.nickname === 'Electrical Safety Service') {
            return (
                <div>
                    <div className='feature_container'>
                        <h2>Switchboard & powerpoint tests</h2>
                        <AiOutlineCheckCircle className='check_icon' alt='CheckIcon' />
                    </div>
                    <div className='feature_container'>
                        <h2>Electrical appliance inspection</h2>
                        <AiOutlineCheckCircle className='check_icon' alt='CheckIcon' />
                    </div>

                    <div className='feature_container'>
                        <h2>Service Report & Guarantee</h2>
                        <AiOutlineCheckCircle className='check_icon' alt='CheckIcon' />
                    </div>
                </div>
            )
        } else if (price.nickname === 'Smoke Alarm Safety Service') {
            return (
                <div>
                    <div className='feature_container'>
                        <h2>Detailed Safety Assessment</h2>
                        <AiOutlineCheckCircle className='check_icon' alt='CheckIcon' />
                    </div>
                    <div className='feature_container'>
                        <h2>Detector Efficacy Assurance Testing</h2>
                        <AiOutlineCheckCircle className='check_icon' alt='CheckIcon' />
                    </div>
                    <div className='feature_container'>
                        <h2>Battery Replacements</h2>
                        <AiOutlineCheckCircle className='check_icon' alt='CheckIcon' />
                    </div>
                    <div className='feature_container'>
                        <h2>Service Report & Guarantee</h2>
                        <AiOutlineCheckCircle className='check_icon' alt='CheckIcon' />
                    </div>
                </div>
            )
        }
    }

    const handleSubscription = async (e) => {
        e.preventDefault();
        const { data } = await axios.post('/api/payment',
            {
                priceId: price.id
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        window.location.assign(data)
    }

    return (
        <div className='pricing_card-block'>
            <div className='pricing_card-image' />
            <div className='pricing_card'>
                <div className='pricing_card-content'>
                    <h4>{price.nickname}</h4>
                    <p>Pre-paid.</p>
                    <p>Reserve your spot today, and we'll reach out to chat about the best timing for you.</p>
                    <h1>
                        {(price.unit_amount / 100).toLocaleString('en-AU', {
                            style: 'currency',
                            currency: 'AUD'
                        })}
                    </h1>
                    <ul>
                        <li>{dynamicDescription(price)}</li>
                    </ul>
                </div>
                <button onClick={handleSubscription}>Checkout safely with<span>Stripe</span></button>
            </div>
        </div>
    )
}

export default PricingCard
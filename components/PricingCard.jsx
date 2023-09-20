import React from 'react'
import axios from 'axios'
import { AiOutlineCheckCircle } from 'react-icons/ai'

const calculateGST = (basePrice) => {
    return basePrice * 0.10;  // 10% GST
};

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

        const baseAmount = price.unit_amount;
        const gstAmount = baseAmount * 0.10;

        const { data } = await axios.post('/api/payment',
            {
                productData: {
                    name: price.nickname,
                    description: "Your product description here", // adjust as needed
                    unit_amount: baseAmount
                },
                gstData: {
                    name: "GST",
                    unit_amount: gstAmount
                }
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        window.location.assign(data);
    };

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
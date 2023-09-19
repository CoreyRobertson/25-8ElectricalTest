'use client'

import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const BookingPage = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <main className='booking_container'>
            <div className='booking_text-container'>
                <h3>Fill out this form to book a service</h3>
                <p>We will get back to you to confirm a date and time for your service.</p>

            </div>
            <form action="https://formsubmit.co/258electrical@gmail.com" method="POST">
                <label className="visually-hidden" htmlFor='name'>Your Name</label>
                <input name='name' type='text' placeholder='YOUR NAME' aria-label="Your Name" required />

                <label className="visually-hidden" htmlFor='phone'>Your Phone Number</label>
                <input name='phone' type='text' placeholder='YOUR PHONE NUMBER' aria-label="Your Phone Number" required />

                <label className="visually-hidden" htmlFor='email'>Your Email</label>
                <input name='email' type='email' placeholder='YOUR EMAIL' aria-label="Your Email" required />

                <label className="visually-hidden" htmlFor='selected service'>Select a Service</label>
                <select name='selected service' aria-label="Select a Service" required>
                    <option value="" disabled>SELECT A SERVICE</option>
                    <option>Emergency Callout</option>
                    <option>Switchboard Upgrade</option>
                    <option>CCTV/Surveillance</option>
                    <option>Power/Lighting</option>
                    <option>Fan Installation</option>
                    <option>EV Charger Installation</option>
                </select>

                <label class="visually-hidden" htmlFor='requirements'>Brief Description</label>
                <input name='requirements' type='text' placeholder='BRIEF DESCRIPTION' aria-label="Brief Description" />

                <div className='right_column'>
                    <label className="visually-hidden" htmlFor='requested date'>Requested Date</label>
                    <DatePicker
                        className='datepicker'
                        name='requested date'
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        dateFormat="dd/MM/yyyy"
                        aria-label="Requested Date"
                    />
                    <button type='submit' className='booking_button'>SUBMIT</button>
                </div>
            </form>
        </main>
    )
}

export default BookingPage;

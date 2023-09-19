import BookingPage from '@/components/Booking'
import React from 'react'

export const metadata = {
    title: "25/8 Electrical, Make a Booking",
    description: "Book now with 25/8 Electrical - Fast, secure form to schedule your Melbourne electrical services. Trusted experts at your convenience.",

}

const page = () => {
    return (
        <section>
            <BookingPage />
        </section>
    )
}

export default page
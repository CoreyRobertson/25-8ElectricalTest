import Image from 'next/image'
import React from 'react'



const Profiles = () => {
    return (
        <section className='profiles_container'>
            <div className='profile_card'>
                <div className='profile_image-container'>
                    <Image className='profile_image' src='/images/Jamie3.png' height={700} width={520} quality={100} layout='responsive' alt='Jamie' />
                </div>
                <div className='profile_text'>
                    <h3 className='section_header'>JAMIE GEORGE</h3>
                    <h4 className='section_header2'>MANAGING DIRECTOR 25/8 ELECTRICAL</h4>
                    <p>
                        I grew up in the south-eastern suburbs of Melbourne in a family that valued hard work,
                        entrepreneurship, and the importance of striving for greatness. These early experiences
                        inspired me to create 25/8 Electrical, a company focused on making a positive impact in
                        people’s lives and ensuring a better future.
                        <br />
                        <br />
                        My journey in the electrical field began in 2016 when I started working with Paul Sartori at
                        Sartori Electrical. Paul taught me the essential skills and safety principles that every good
                        electrician needs to know. I worked in various places, from homes to businesses, and even
                        large industrial sites with powerful machines.
                        <br />
                        <br />
                        During my apprenticeship, I made sure to learn as much as I could about all aspects of
                        electrical work. I gained experience in different environments, which makes me confident in
                        taking on any job, no matter how big or small.
                        <br />
                        <br />
                        After finishing my apprenticeship, I continued my education at Technical Training Australia.
                        There, I studied hard and earned a license that allows me to work as a registered electrical
                        contractor. Staying connected with Technical Training Australia helps me stay up-to-date
                        with the latest industry standards, ensuring a safe workplace for all our current and future
                        employees.
                        <br />
                        <br />
                        Now, I’m proud to showcase the result of my hard work and passion. By combining my
                        interest in business and finance with my dedication to electrical safety, I aim to create a
                        safer electrical future for everyone. It’s an honour for me to share this journey, as it
                        represents not only my personal dreams but also my commitment to the well-being and
                        security of all individuals.
                    </p>
                </div>

            </div>

        </section>
    )
}

export default Profiles
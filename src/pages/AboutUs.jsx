import React from 'react'

const AboutUs = () => {
    return (
        <div className='px-[100px] py-[100px] text-[20px] flex flex-col gap-[40px]'>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='text-primary text-[32px]'>About Us</h2>
                <p className='text-[24px]'>Where faith and adventure meet</p>
            </div>

            <div>
                TravelPak is more than just a travel company; we are your trusted partner in embarking on journeys that transcend the ordinary. We offer two distinct yet complementary experiences:
            </div>

            <h4 className='text-[24px] font-bold'>
                Unveiling Pakistan's Wonders:
            </h4>
            <div>
                For those seeking adventure and cultural immersion, we curate unforgettable tours across Pakistan's diverse landscape. From the majestic mountains of the north to the vibrant cities of the south, our guided tours and personalized itineraries cater to every interest. Experience the warmth of local hospitality, explore ancient ruins and bustling bazaars, and discover the hidden gems that make Pakistan a land of unparalleled beauty and history.

            </div>
            <h4 className='text-[24px] font-bold'>
                Facilitating Sacred Journeys:
            </h4>
            <div>
                For those yearning for a spiritual pilgrimage, we specialize in organizing seamless Umrah and Hajj packages. With years of experience and deep understanding of the religious significance of these journeys, we offer a range of personalized options to suit your needs and budget. Our dedicated team provides guidance and support every step of the way, ensuring a smooth and fulfilling experience focused on your spiritual growth.

            </div>
            <h4 className='text-[24px] font-bold'>
                Our Guiding Principles:
            </h4>
            <ul >
                <li>
                    Integrity: We operate with honesty and transparency, ensuring your trust and peace of mind.
                </li>
                <li>
                    Expertise: Our team boasts extensive knowledge of Pakistan and the intricacies of Umrah and Hajj, providing reliable guidance and support.
                </li>
                <li>
                    Compassion: We recognize the significance of your journey, treating every traveler with respect and understanding.
                </li>
                <li>
                    Customization: We believe in creating experiences tailored to your individual preferences and spiritual needs.
                </li>
                <li>
                    Commitment: We are dedicated to exceeding your expectations and ensuring you return home with memories that will last a lifetime.</li>
            </ul>
            <h4 className='text-[24px] font-bold'>
                Join us on your journey:
            </h4>
            Whether you seek adventure in the heart of Pakistan or a sacred pilgrimage to the holiest cities, [Company Name] is your trusted companion. Contact us today to discuss your travel aspirations and let us craft an experience that resonates with your soul.


        </div>
    )
}

export default AboutUs
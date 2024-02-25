import React from 'react'

const Maps = () => {
    return (
        <div className='flex flex-col gap-[40px] justify-center items-center' >
            <h4 className='text-primary text-[3px] font-bold'>Maps</h4>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13610.482009735315!2d74.3000763!3d31.479624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904105ec589ff%3A0x67af359ad6cad4b3!2sModel%20Town%20Park!5e0!3m2!1sen!2s!4v1708837276547!5m2!1sen!2s" width="800" height="650" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default Maps
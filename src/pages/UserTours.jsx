import React from 'react'
import CTA from '../components/authPages/CTA'

const UserTours = () => {

    return (
        <div className='flex justify-center items-center flex-col gap-[50px] h-screen'>
            <h2 className='font-bold text-[36px] text-center'>You've not booked any Tours yet!!! </h2>
            <CTA text={"Explore Trips"} type={"primary"} />
        </div>
    )
}

export default UserTours
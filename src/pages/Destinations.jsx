import React from 'react'
import LocationsTile from "../components/destinationsPage/LocationsTile"
import FilterSelect from '../components/destinationsPage/FilterSelect'

const Destinations = () => {
    return (
        <div className='px-[100px] py-[100px] text-black flex flex-col gap-[40px]'>
            <div className='flex justify-between items-center'>
                <h3 className='text-primary text-[36px]'>Destinations</h3>
                <FilterSelect />
            </div>
            <div className='flex flex-wrap justify-start gap-[40px]'>
                <LocationsTile
                    name={"Islamabad"}
                    image={"https://plus.unsplash.com/premium_photo-1674635191022-84de68397aa2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                />
                <LocationsTile
                    name={"Islamabad"}
                    image={"https://plus.unsplash.com/premium_photo-1674635191022-84de68397aa2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                />
            </div>
        </div>
    )
}

export default Destinations
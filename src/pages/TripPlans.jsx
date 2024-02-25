import React, { useEffect, useState } from 'react'
import { AutoComplete, DatePicker, SelectPicker } from 'rsuite'
import TourSection from '../components/homepage/TourSection';
import CTA from '../components/authPages/CTA';

const TripPlans = () => {

    const [tours, setTours] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        fetch(`${API_URL}/travel/tours`).then(res => res.json().then(data => {
            setTours(data)
            setLoading(false)
        }))
    }, [])



    const locations = ["Australia", "America"]
    const data = ['1', '2', '3', '4', '5', '6', '7', '30'].map(
        item => ({ label: item, value: item })
    );
    return (
        <div className=' flex flex-col gap-[40px]'>
            <div className='relative  text-[20px] h-[500px] '>
                <div className='absolute w-full h-[50%] bg-primary rounded-b-[30px] z-[-1]'></div>
                <div className='mx-[100px] mt-[150px] relative z-0 bg-white shadow-xl h-[200px] w-[90%] rounded-[20px] flex flex-col items-center justify-center gap-[50px] px-[120px]'>
                    <div className='flex justify-between items-center w-full'>
                        <AutoComplete data={locations} style={{ width: 300 }} placeholder='Search Locations' />
                        <DatePicker onChange={() => { }} style={{ width: 300 }} placeholder="Pick Start Date" />
                        <AutoComplete data={locations} style={{ width: 300 }} placeholder='Start Location' />
                        <SelectPicker
                            data={data}
                            searchable={false}
                            style={{
                                width: 300,
                                position: 'relative',
                                zIndex: 40
                            }}
                            placeholder="Number of days.."
                        />
                    </div>
                    <CTA text={"Filter Now"} variant="sm" type={"primary"} />
                </div>
                {
                    loading ?
                        <></> : <div>

                            <TourSection title={"Recommended For You"} more={false} tours={tours} />

                        </div>
                }
            </div>
        </div>
    )
}

export default TripPlans
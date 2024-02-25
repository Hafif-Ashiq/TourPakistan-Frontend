import React from 'react'
import TourTile from './TourTile'
import { useNavigate } from 'react-router-dom'
import { API_URL } from '../../constants/links'

const TourSection = ({ title, more = true, tours = [] }) => {

    const navigate = useNavigate()

    return (
        <div className="py-[40px] flex flex-col gap-[20px] px-[100px] ">
            <div className='flex pt-[20px] justify-between items-center'>
                <div className="text-[28px] font-bold">
                    {title}
                </div>
                {more ? <button onClick={() => navigate("trip-plans")} className="text-[20px] text-primary">
                    See more
                </button> : <></>}
            </div>

            <div className="flex flex-wrap justify-between items-center gap-[30px] ">
                {tours.map((element, index) => (
                    <TourTile onClick={() => navigate("/tours/" + element["id"])} title={element["title"]} city={element["start_city"]} startCity={element["start_city"]} price={element["price"]} image={element["locations"][0]["image"]} />
                ))}



            </div>
        </div >
    )
}

export default TourSection
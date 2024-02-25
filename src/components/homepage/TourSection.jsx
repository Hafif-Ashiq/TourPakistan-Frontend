import React from 'react'
import TourTile from './TourTile'
import { useNavigate } from 'react-router-dom'

const TourSection = ({ title, more = true }) => {

    const navigate = useNavigate()

    return (
        <div className="py-[40px] flex flex-col gap-[20px] px-[100px] ">
            <div className='flex pt-[20px] justify-between items-center'>
                <div className="text-[28px] font-bold">
                    {title}
                </div>
                {more ? <button className="text-[20px] text-primary">
                    See more
                </button> : <></>}
            </div>

            <div className="flex flex-wrap justify-between items-center gap-[30px] ">
                <TourTile onClick={() => navigate("/tours/1")} title={"4 days Trip to Hunza"} city={"Islamabad"} startCity={"Lahore"} price={"2000000"} image={"https://images.unsplash.com/photo-1560707303-4e980ce876ad?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
                <TourTile title={"4 days Trip to Hunza"} city={"Islamabad"} startCity={"Lahore"} price={"2000000"} image={"https://images.unsplash.com/photo-1560707303-4e980ce876ad?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
                <TourTile title={"4 days Trip to Hunza"} city={"Islamabad"} startCity={"Lahore"} price={"2000000"} image={"https://images.unsplash.com/photo-1560707303-4e980ce876ad?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
                <TourTile title={"4 days Trip to Hunza"} city={"Islamabad"} startCity={"Lahore"} price={"2000000"} image={"https://images.unsplash.com/photo-1560707303-4e980ce876ad?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
                <TourTile title={"4 days Trip to Hunza"} city={"Islamabad"} startCity={"Lahore"} price={"2000000"} image={"https://images.unsplash.com/photo-1560707303-4e980ce876ad?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />

            </div>
        </div >
    )
}

export default TourSection
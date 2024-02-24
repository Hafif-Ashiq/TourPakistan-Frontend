import React from 'react'
import TourTile from './TourTile'

const AdventureSection = () => {
    return (
        <div className="py-[40px] px-[100px] flex flex-col gap-[20px]">
            <div className='flex pt-[20px] justify-between items-center'>
                <div className="text-[28px] font-bold">
                    Popular Tours
                </div>
                <button className="text-[20px] text-primary">
                    See more
                </button>
            </div>

            <div className="flex justify-between">
                <TourTile />
                <TourTile />
                <TourTile />
                <TourTile />
            </div>
        </div >
    )
}

export default AdventureSection
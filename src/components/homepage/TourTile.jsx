import React from 'react'

const TourTile = ({ city, image, title, startCity, price, onClick }) => {
    return (
        <button onClick={onClick} className='w-[400px] h-[400px] rounded-[10px] shadow-xl'>
            <img src={image} alt="" className='h-[200px] w-full rounded-t-[10px]' />

            <div className="p-[20px] flex flex-col justify-between items-start">
                <p className="text-[20px]">{city}</p>
                <p className="text-[24px] text-semibold">{title}</p>
                <p className="text-[20px]">Start City: {startCity}</p>
                <p className="text-[22px]">PKR: {price}</p>

            </div>
        </button>
    )
}

export default TourTile
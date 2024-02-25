import React from 'react'

const LocationsTile = ({ image, name, onClick }) => {
    return (
        <button onClick={onClick} className='relative w-[300px] h-[300px]'>
            <img
                src={image}
                className='h-full w-full rounded-[20px]'
            />
            <div className='absolute w-full h-full bottom-0 left-0 bg-gradient-to-t from-black rounded-b-[20px]'></div>
            <p className='absolute bottom-[20px] text-[32px] text-white left-[20px]'>{name}</p>
        </button>
    )
}

export default LocationsTile 
import React from 'react'

const Hero = () => {
    return (
        <div className="h-[100vh] px-[100px] py-[20px] pt-[100px] bg-hero-image bg-contain bg-no-repeat w-full flex flex-col items-center justify-center text-white gap-[20px]">
            <div className='text-[80px]'>
                Making life full of Adventures
            </div>
            <div className='text-[32px]'>
                Where dream locations are no longer a dream
            </div>
            <div className="relative">
                <input
                    type='text'
                    className="w-[600px] h-[60px] rounded-full text-black px-[40px] focus:outline-none text-[20px]"
                    placeholder='Search Anything...'
                />
                <button className="absolute right-[10px] top-[50%] translate-y-[-50%] trans bg-primary px-[25px] py-[10px] rounded-full outline-none">Search</button>
            </div>
        </div>
    )
}

export default Hero
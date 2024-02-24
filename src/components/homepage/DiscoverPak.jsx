import React from 'react'

const DiscoverPak = () => {
    return (
        <div className='flex justify-between items-center px-[100px] py-[20px]'>
            <div className='flex flex-col gap-[20px]'>
                <h3 className='text-[36px] font-bold'>Discover Pakistan</h3>
                <p className='text-[24px] '>We provide a complete service for tourism.</p>
            </div>
            <div>
                <iframe width="860" height="515" src="https://www.youtube.com/embed/-hB6-nxJfyY?si=vYnLTR4mTO2RdEdC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default DiscoverPak
import React, { useEffect, useState } from 'react'
import { API_URL } from '../constants/links'
import { useParams } from 'react-router-dom'

const LocationPage = () => {

    const { id } = useParams()

    const [name, setName] = useState("")
    const [history, setHistory] = useState("")
    const [city, setCity] = useState("")
    const [image, setImage] = useState("")

    const [loading, setLoading] = useState(true)

    useEffect(() => {

        fetch(`${API_URL}/travel/get-location/` + id).then(res => res.json().then(data => {
            console.log(data);
            setName(data["name"])
            setHistory(data["history"])
            setCity(data["city"])
            setImage(data["image"])
            setLoading(false)
        }))
    }, [])
    return (
        <div className='py-[100px] px-[100px]'>
            {loading ? <></> : <>
                <div className='flex flex-col gap-[20px]'>
                    <h4 className='text-[36px] font-bold '>{name}</h4>
                    <div>
                        <img src={API_URL + image} alt="abc" className='h-[500px] ' />
                    </div>
                    <p className='text-[20px]'><span className='font-bold'>City:</span> {city}</p>
                </div>
                <div className='flex flex-col gap-[20px]'>
                    <h4 className='text-[28px] font-bold'>Historical Background</h4>
                    <p className='text-[20px]'>{history}</p>
                </div></>}

        </div>
    )
}

export default LocationPage
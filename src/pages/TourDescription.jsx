import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_URL } from '../constants/links'

const TourDescription = () => {

    const { id } = useParams()

    const [title, setTitle] = useState("4 Days Private Honeymoon Tour to Hunza by air (winter trip)")
    const [description, setDescription] = useState("4 Days Private Honeymoon Tour to Hunza by air (winter trip)")
    const [locations, setLocation] = useState([])
    const [services, setServices] = useState("")
    const [itinerary, setItinerary] = useState("")
    const [travel_mode, setTravelMode] = useState("")
    const [contact_num, setContact] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        useEffect(() => {

            fetch(`${API_URL}/travel/get-tour/` + id).then(res => res.json().then(data => {
                console.log(data);
                setTitle(data["title"])
                setDescription(data["description"])
                setLocation(data["locations"])
                setServices(data["included_services"])
                setTravelMode(data["travel_mode"])
                setContact(data["contact_num"])
                setItinerary(data["itinerary"])
                setLoading(false)
            }))
        }, [])
    }, [])


    return (
        <div className='px-[100px] py-[100px] text-black flex flex-col gap-[40px]'>
            <div className='text-[36px] text-bold'>
                {title}
            </div>
            <div>
                <img src={API_URL + locations[0]["image"]} alt="" />
            </div>
            <div>
                <div>
                    <div>
                        <h4>Included Services</h4>
                        <p>{services}</p>
                    </div>
                    <div>
                        <h4>Locations</h4>
                        <p>{locations}</p>
                    </div>
                    <div>
                        <h4>Description</h4>
                        <p>{description}</p>
                    </div>
                    <div>
                        {itinerary}
                    </div>
                </div>
                <div>

                </div>

            </div>
        </div>
    )
}

export default TourDescription
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_URL } from '../constants/links'
import CTA from '../components/authPages/CTA'

const TourDescription = () => {

    const { id } = useParams()

    const [title, setTitle] = useState("4 Days Private Honeymoon Tour to Hunza by air (winter trip)")
    const [description, setDescription] = useState("4 Days Private Honeymoon Tour to Hunza by air (winter trip)")
    const [locations, setLocation] = useState([])
    const [services, setServices] = useState([])
    const [startCity, setStartCity] = useState("")
    const [itinerary, setItinerary] = useState("")
    const [travelMode, setTravelMode] = useState("")
    const [contactNum, setContact] = useState("")
    const [loading, setLoading] = useState(true)


    useEffect(() => {

        fetch(`${API_URL}/travel/get-tour/` + id).then(res => res.json().then(data => {
            console.log(data);
            setTitle(data["title"])
            setDescription(data["description"])
            setLocation(data["locations"])
            // setServices(JSON.parse(data["included_services"]))
            setTravelMode(data["travel_mode"])
            setContact(data["contact_num"])
            setStartCity(data["start_city"])
            setItinerary(data["itinerary"])
            setLoading(false)
        }))
    }, [])


    const itineriary = [
        {
            "title": "Day 1",
            "description": `Fly to Gilgit.\n
            Drive to Hunza Valley.\n
            Stopover at Rakaposhi viewpoint. Arrival in Hunza Valley.\n
            Visit Altit fort, Altit village and Royal Garden.\n
            Drive to Eagle nest and witness majestic sunset on the mountain and bird-eye view of Hunza Valley.\n
            Visit Karimabad local market for shopping.\n
            Overnight stay in Hunza`
        },
        {
            "title": "Day 2",
            "description": `Fly to Gilgit.\n
            Drive to Hunza Valley.\n
            Stopover at Rakaposhi viewpoint. Arrival in Hunza Valley.\n
            Visit Altit fort, Altit village and Royal Garden.\n
            Drive to Eagle nest and witness majestic sunset on the mountain and bird-eye view of Hunza Valley.\n
            Visit Karimabad local market for shopping.\n
            Overnight stay in Hunza`
        },
        {
            "title": "Day 3",
            "description": `Fly to Gilgit.\n
            Drive to Hunza Valley.\n
            Stopover at Rakaposhi viewpoint. Arrival in Hunza Valley.\n
            Visit Altit fort, Altit village and Royal Garden.\n
            Drive to Eagle nest and witness majestic sunset on the mountain and bird-eye view of Hunza Valley.\n
            Visit Karimabad local market for shopping.\n
            Overnight stay in Hunza`
        },
        {
            "title": "Day 4",
            "description": `Fly to Gilgit.\n
            Drive to Hunza Valley.\n
            Stopover at Rakaposhi viewpoint. Arrival in Hunza Valley.\n
            Visit Altit fort, Altit village and Royal Garden.\n
            Drive to Eagle nest and witness majestic sunset on the mountain and bird-eye view of Hunza Valley.\n
            Visit Karimabad local market for shopping.\n
            Overnight stay in Hunza`
        },
        {
            "title": "Day 5",
            "description": `Fly to Gilgit.\n
            Drive to Hunza Valley.\n
            Stopover at Rakaposhi viewpoint. Arrival in Hunza Valley.\n
            Visit Altit fort, Altit village and Royal Garden.\n
            Drive to Eagle nest and witness majestic sunset on the mountain and bird-eye view of Hunza Valley.\n
            Visit Karimabad local market for shopping.\n
            Overnight stay in Hunza`
        },

    ]


    return (
        <div className='px-[100px] py-[100px] text-black flex flex-col gap-[40px] justify-center items-center'>
            <div className='text-[36px] text-bold'>
                {title}
            </div>
            <div >
                {loading ? <></> : <img src={API_URL + locations[0]["image"]} alt="" className='h-[400px]' />}
            </div>
            <div className='flex justify-center items-center gap-[50px]'>
                <div className='flex flex-col gap-[20px] rounded-[20px] shadow-lg p-[40px]'>
                    <div>
                        <h4 className='font-bold text-[24px]'>Included Services</h4>
                        <p>{services}</p>
                    </div>
                    <div>
                        <h4>Locations</h4>
                        {/* <p>{locations}</p> */}
                    </div>
                    <div>
                        <h4>Description</h4>
                        <p>{description}</p>
                    </div>

                </div>
                <div className='flex flex-col gap-[20px] rounded-[20px] shadow-lg p-[40px] h-full'>
                    <p><span>Start City: </span> {startCity}</p>
                    <p><span>Travel Mode: </span> {travelMode}</p>
                    <p><span>Contact: </span> {contactNum}</p>
                    <CTA variant='sm' text={"Call Now!!"} />
                </div>

            </div>
            <div>
                <h4 className='text-[36px] text-bold text-center py-[20px] pb-[60px]'>Itineriary</h4>

                <div className='flex flex-col gap-[40px] text-[18px]'>
                    {itineriary.map((el, index) => (
                        <div className='flex flex-col justify-center items-center w-[700px]'>
                            <div className='p-[6px] rounded-full text-white bg-primary w-[40px] h-[40px] flex justify-center items-center'>{index}</div>
                            <div>{el["title"]}</div>
                            <div>{el["description"]}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TourDescription
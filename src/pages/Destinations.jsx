import React, { useEffect, useState } from 'react'
import LocationsTile from "../components/destinationsPage/LocationsTile"
import FilterSelect from '../components/destinationsPage/FilterSelect'
import { API_URL } from '../constants/links'
import { useNavigate } from 'react-router-dom'

const Destinations = () => {

    const [selection, setSelection] = useState("Locations")
    const [location, setLocation] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        if (selection == "Locations") {
            fetch(`${API_URL}/travel/location`).then(res => {
                res.json().then(data => {
                    console.log(data);
                    setLocation(data)
                })
            })
        }
    }, [])

    return (
        <div className='px-[100px] py-[100px] text-black flex flex-col gap-[40px]'>
            <div className='flex justify-between items-center'>
                <h3 className='text-primary text-[36px]'>Destinations</h3>
                {/* <FilterSelect onChange={setSelection} /> */}
            </div>
            <div className='flex flex-wrap justify-start gap-[40px]'>
                {location.map(loc => (
                    <LocationsTile
                        name={loc["name"]}
                        image={loc["image"]}
                        onClick={() => navigate("/destinations/locations/" + loc["id"])}
                    />
                    // <LocationsTile
                    //     name={"Islamabad"}
                    //     image={"https://plus.unsplash.com/premium_photo-1674635191022-84de68397aa2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                    // />
                ))}
            </div>
        </div>
    )
}

export default Destinations
import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import TourSection from '../components/homepage/TourSection'
import AdventureSection from '../components/homepage/AdventureSection'
import PlanTourSection from '../components/homepage/PlanTourSection'
import DiscoverPak from '../components/homepage/DiscoverPak'
import { API_URL } from '../constants/links'

const Discover = () => {

    const [tours, setTours] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        fetch(`${API_URL}/travel/tours`).then(res => res.json().then(data => {
            setTours(data)
            setLoading(false)
        }))
    }, [])

    return (
        <div>
            {loading ? <></> : <>
                <Hero />
                <TourSection title={"Tours"} tours={tours} />
                <PlanTourSection />
                <TourSection title={"Adventures with Us"} tours={tours} />
                <DiscoverPak /></>}
        </div>
    )
}

export default Discover
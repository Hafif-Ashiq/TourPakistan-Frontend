import React from 'react'
import Hero from '../components/Hero'
import TourSection from '../components/homepage/TourSection'
import AdventureSection from '../components/homepage/AdventureSection'
import PlanTourSection from '../components/homepage/PlanTourSection'
import DiscoverPak from '../components/homepage/DiscoverPak'

const Discover = () => {
    return (
        <div>
            <Hero />
            <TourSection title={"Tours"} />
            <PlanTourSection />
            <TourSection title={"Adventures with Us"} />
            <DiscoverPak />
        </div>
    )
}

export default Discover
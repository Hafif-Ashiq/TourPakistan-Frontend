import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [navTop, setNavTop] = useState(true);



    useEffect(() => {
        const handleScroll = () => {
            window.scrollY <= window.innerHeight / 6
                ? setNavTop(true)
                : setNavTop(false);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`fixed overflow-hidden top-0 left-0  w-full px-[100px] py-[20px]   text-[20px] z-50`}>
            <nav className={`flex justify-between items-center py-[10px] px-[20px] rounded-full shadow-lg  ${navTop && window.location.pathname == "" ? "bg-transparent text-white" : "bg-white text-primary"}`}>
                <div>
                    TravelPak
                </div>
                <ul className="flex justify-center items-center gap-[40px]">
                    <li>
                        <Link to="/">Discover</Link>
                    </li>
                    <li>
                        <Link to="/destinations">Destinations</Link>
                    </li>
                    <li>
                        <Link to="/trip-plans">Trip Plans</Link>
                    </li>
                    <li>
                        <Link to="/about-us">About Us</Link>
                    </li>
                </ul>
                <div className="flex items-center gap-[40px] underline">
                    <div>
                        <Link to="/login">Sign In</Link>
                    </div>
                    <div>
                        <Link to={"/work-with-us"}>Work With Us</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
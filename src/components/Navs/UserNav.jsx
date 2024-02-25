import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'
import CTA from '../authPages/CTA'

const UserNav = () => {

    const [selected, setSelected] = useState(0)

    const navigate = useNavigate()


    const links = [
        {
            to: "/user/dashboard",
            text: "Dashboard"
        },
        {
            to: "/user/tours",
            text: "Tours"
        },
        {
            to: "/user/settings",
            text: "Settings"
        },

    ]


    return (
        <div className='fixed w-[350px] h-screen shadow-lg flex flex-col px-[40px] py-[100px] justify-between rounded-r-[40px] z-50'>
            <div className='text-[24px] font-bold text-center py-[20px]'>
                TravelPak
            </div>
            <div className='flex flex-col justify-between  '>
                <ul className='h-full flex flex-col gap-[50px] text-[20px]'>
                    {links.map((element, index) =>
                        <li
                            className={`${index == selected ? "bg-primary text-white" : ""} rounded-[10px] px-[15px] py-[10px]`}
                        >
                            <button onClick={() => {
                                setSelected(index)
                                navigate(element.to)
                            }} className='flex w-full'>{element.text}</button>
                        </li>
                    )}


                </ul>
            </div>
            <CTA text={"Logout"} variant='sm' type="primary" />
        </div>
    )
}

export default UserNav
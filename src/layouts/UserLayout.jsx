import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import UserNav from '../components/Navs/UserNav'

const MainLayout = () => {
    return (
        <div className='relative min-h-[100vh] '>
            <UserNav />
            <div className='pl-[370px] py-[40px]'>
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout
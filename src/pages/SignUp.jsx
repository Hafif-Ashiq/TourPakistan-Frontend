import React, { useState } from 'react'
import InputField from '../components/authPages/InputField'
import CTA from '../components/authPages/CTA'
import axios from 'axios'

import { API_URL } from "../constants/links"
import { Link } from 'react-router-dom'

const SignUp = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [mobile, setMobile] = useState("")

    const handleSignUp = async () => {
        fetch(`${API_URL}/user/register`, {
            method: "POST",
            body: {
                name: name,
                email: email,
                password: password,
                mobile: mobile
            },
            headers: {
                'Content-Type': "application/json"
            },
            redirect: "follow"
        }).then(res => {
            console.log(res);
        })
    }

    return (
        <div className="w-full h-screen flex justify-center items-center bg-[#e9e9e9]">
            <div className="w-[50%] h-[70%] shadow-xl  bg-white flex justify-between items-center flex-col p-20 rounded-[10px]">
                <h4 className='text-[28px] font-bold text-primary'>Sign Up</h4>
                <div className='flex flex-col gap-[20px] items-center justify-center'>
                    <InputField type={"text"} onChange={setName} placeholder={"Name Here...."} label={"Name"} />
                    <InputField type={"email"} onChange={setEmail} placeholder={"Email Here...."} label={"Email"} />
                    <InputField type={"password"} onChange={setPassword} placeholder={"* * * * * * "} label={"Password"} />
                    <InputField type={"number"} onChange={setMobile} placeholder={"92XXXXXXXXXXX"} label={"Phone Number"} />
                    <CTA type={"primary"} text={"Sign Up"} onClick={handleSignUp} />
                </div>
                <div className='text-[14px] flex'>
                    Already a Member? {"\t"}
                    <div className='text-primary'>
                        <Link to="/login">Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
import React, { useState } from 'react'
import InputField from '../components/authPages/InputField'
import CTA from '../components/authPages/CTA'
import axios from 'axios'
import { API_URL } from "../constants/links"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const SignIn = ({ route }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()


    const handleSignIn = async () => {
        await fetch(`${API_URL}/user/login`,

            {
                headers: {

                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',

                },
                method: "POST",
                body: {
                    email: email,
                    password: password
                }
            }).then(response => {
                console.log(response);
                navigate("/dashboard")
            })
    }

    return (
        <div className="w-full h-screen flex justify-center items-center bg-[#e9e9e9]">
            <div className="w-[50%] h-[70%] shadow-xl  bg-white flex justify-between items-center flex-col p-20 rounded-[10px]">
                <h4 className='text-[28px] font-bold text-primary'>Sign In</h4>
                <div className='flex flex-col gap-[50px] items-center justify-center'>
                    <InputField type={"email"} onChange={setEmail} placeholder={"Email Here...."} label={"Email"} />
                    <InputField type={"password"} onChange={setPassword} placeholder={"* * * * * * "} label={"Password"} />
                    <CTA type={"primary"} text={"Sign In"} onClick={handleSignIn} />
                </div>
                <div className='text-[14px] flex'>
                    New Member? {"\t"}
                    <div className='text-primary'>
                        <Link to="/signup">Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn
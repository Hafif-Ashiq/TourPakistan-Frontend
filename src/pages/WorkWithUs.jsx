import React, { useState } from 'react'
import InputField from '../components/authPages/InputField'
import CTA from '../components/authPages/CTA'
import { API_URL } from '../constants/links'

const WorkWithUs = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [mobile, setMobile] = useState("")

    const [role, setRole] = useState("agency")


    const handleClick = async () => {

        fetch(`${API_URL}/user/register-${role}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                email: email,
                password: password,
                name: name,
                mobile: mobile
            }
        }).then(res => {
            console.log(res);
        })
    }


    return (
        <div className='bg-primary  min-h-screen flex flex-col justify-center items-center gap-[100px]'>
            <div className=' text-[48px] underline text-white font-bold'>
                Ready to Work with Us?
            </div>
            <div className='flex justify-center items-center h-full gap-[80px]'>
                <div className='bg-white px-[40px] py-[70px] rounded-[20px] flex flex-col gap-[20px]'>
                    <InputField label={"Email"} placeholder={"Enter your Email here"} onChange={setEmail} />
                    <InputField label={"Password"} placeholder={"Enter your Password here"} onChange={setPassword} />
                    <InputField label={"Name"} placeholder={"Enter your Name here"} onChange={setName} />
                    <InputField label={"Mobile #"} placeholder={"Enter your mobile here"} onChange={setMobile} />
                    <CTA text="Let's Go" onClick={handleClick} />
                </div>
                <div className='bg-white px-[40px] py-[70px] rounded-[20px] flex flex-col justify-between items-center gap-[50px] text-[18px]'>
                    <h3 className='text-[28px] text-center'>What are you?</h3>
                    <div className='flex flex-col justify-start items-start gap-[20px]'>
                        <button onClick={() => setRole("agency")} className={`${role == "agency" ? "border-primary" : "border-gray"} border-[2px] border-solid px-[40px] py-[20px] w-full rounded-[20px]`}>
                            <h4 className='text-left font-bold'>Tour Agency</h4>
                            <p className="text-left"> Planning Tours and Trips as a paid PartnerShip</p>
                        </button>
                        <button onClick={() => setRole("local")} className={`${role == "local" ? "border-primary" : "border-gray"} border-[2px] border-solid px-[50px] py-[30px] w-full rounded-[20px]`}>
                            <h4 className='text-left font-bold ' >Local Business</h4>
                            <p className='text-left '>Promote your Restraunt or Hotel Business with us in the beautiful places of Country</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkWithUs
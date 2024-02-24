import React from 'react'
import InputField from '../components/authPages/InputField'

const WorkWithUs = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [mobile, setMobile] = useState("")

    return (
        <div>
            <div className='text-primary text-[32px] underline'>
                Ready to Work with Us?
            </div>
            <div>
                <div>
                    <InputField label={"Email"} placeholder={"Enter your Email here"} onChange={() => { }} />
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default WorkWithUs
import React from 'react'

const CTA = ({ text, onClick, type, variant = "lg" }) => {
    return (
        <button onClick={onClick} className={`${type == "primary" ? "bg-primary border-primary text-white " : "bg-transparent border-primary text-primary hover:bg-primary hover:text-white"} border-[1px] border-solid font-semibold px-[30px] py-[10px] shadow-md rounded-[10px] transition-all duration-75 ease-in ${variant == "sm" ? "text-[14px]" : "text-[20px]"}`}>
            {text}
        </button>
    )
}

export default CTA
import React from 'react'

const CTA = ({ text, onClick, type, variant = "lg" }) => {
    return (
        <button onClick={onClick} className={`${type == "primary" ? "bg-primary border-primary text-white" : "bg-transparent border-primary text-primary"} border-[1px] border-solid font-semibold px-[30px] py-[10px] shadow-md rounded-[10px] ${variant == "sm" ? "text-[14px]" : "text-[20px]"}`}>
            {text}
        </button>
    )
}

export default CTA
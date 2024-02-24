import React from 'react'

const InputField = ({ type, onChange, placeholder, label }) => {

    const onInputChange = (e) => {
        onChange(
            e.target.value
        );
        e.preventDefault();
    }

    return (
        <label className='flex flex-col justify-start items-start gap-[10px] text-[16px] text-primary'>
            {label}
            <input
                type={type}
                onChange={onInputChange}
                placeholder={placeholder}

                className="w-[600px] h-[50px] shadow-md border-gray border-[1px] border-solide rounded-[6px] px-[20px] focus:outline-none focus:border-primary text[20px] text-black"
            />
        </label>
    )
}

export default InputField
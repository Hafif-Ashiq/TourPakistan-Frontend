import React from 'react'

const FilterSelect = () => {

    const selections = ["City", "Locations"]

    return (
        <div class="radio-inputs">
            {selections.map(element => (
                <label class="radio text-[20px]">
                    <input type="radio" name="radio" checked />
                    <span class="name">{element}</span>
                </label>
            ))}
        </div>
    )
}

export default FilterSelect
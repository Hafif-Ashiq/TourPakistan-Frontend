import React from 'react'
import { Radio, RadioGroup } from 'rsuite'

const FilterSelect = ({ onChange }) => {

    const selections = ["City", "Locations"]

    return (
        <RadioGroup name="radioList" inline appearance="picker" defaultValue={selections[0]} onChange={onChange} style={{
            height: 40,
            fontSize: 20
        }}>
            {selections.map(el => (
                <Radio value={el}>{el}</Radio>
            ))}

        </RadioGroup>

    )
}

export default FilterSelect
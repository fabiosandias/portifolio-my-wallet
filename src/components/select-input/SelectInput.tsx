import React, { FunctionComponent } from 'react';

import { Container } from './Styles';

interface SelectInputProps {
    options: {
        value: string | number;
        label: string | number;
    }[]
}

const SelectInput: FunctionComponent<SelectInputProps> = ({ options }) => {
    return (
        <Container>
            <select>
                {options.map(option =>
                    <option key={option.value} value={option.value} >{option.label}</option>
                )}

            </select>
        </Container>
    );
}

export default SelectInput;
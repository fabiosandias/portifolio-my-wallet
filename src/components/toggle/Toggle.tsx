import React from 'react';


import { Container, ToggleLabel, ToggleSelector } from './styles';

const Toggle = () => {
    return (
        <Container>
            <ToggleLabel>Light</ToggleLabel>
            <ToggleSelector
                checked onChange={() => {}}
                uncheckedIcon={false}
                checkedIcon={false}
             />
            <ToggleLabel>Dark</ToggleLabel>
        </Container>
    );
}

export default Toggle;
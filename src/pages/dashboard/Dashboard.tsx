import React from 'react';
import { Container } from './Styles';
import ContentHeader from '../../components/content-header/ContentHeader'
import SelectInput from '../../components/select-input/SelectInput';

const options = [
    {value: 'Rodrigo', label: "Rodrigo"},
    {value: 'Maria', label: "Maria"},
    {value: 'Ana', label: "Ana"},
];

const Dashboard = ()  => {
    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#990000">
                <SelectInput options={options} />
            </ContentHeader>
        </Container>
    )
}

export default Dashboard;


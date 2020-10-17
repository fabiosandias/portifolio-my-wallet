import React, { FunctionComponent } from 'react';
import { Container } from './Style';

import ContentHeader from '../../components/content-header/ContentHeader';
import SelectInput from '../../components/select-input/SelectInput';

const List: FunctionComponent = () => {

  const options = [
    {value: 'Rodrigo', label: "Rodrigo"},
    {value: 'Maria', label: "Maria"},
    {value: 'Ana', label: "Ana"},
];

  return (
    <Container>
      <ContentHeader title="Lista" lineColor="#454545">
        <SelectInput options={options} />
      </ContentHeader>
      
    </Container>
  );
}

export default List;
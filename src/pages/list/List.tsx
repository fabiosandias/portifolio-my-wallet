import React, { FunctionComponent } from 'react';
import { Container, Content } from './Style';

import ContentHeader from '../../components/content-header/ContentHeader';
import SelectInput from '../../components/select-input/SelectInput';
import HistoryFinanceCard from '../../components/history-finance-card/HistoryFinanceCard';

const List: FunctionComponent = () => {

  const options = [
    { value: 'Rodrigo', label: "Rodrigo" },
    { value: 'Maria', label: "Maria" },
    { value: 'Ana', label: "Ana" },
  ];

  return (
    <Container>
      <ContentHeader title="Lista" lineColor="#454545">
        <SelectInput options={options} />
      </ContentHeader>

      <Content>
        <HistoryFinanceCard
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"

        />
      </Content>

    </Container>
  );
}

export default List;
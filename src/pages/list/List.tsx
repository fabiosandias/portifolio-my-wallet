import React, { FunctionComponent } from 'react';
import { Container, Content, Filters } from './Style';

import ContentHeader from '../../components/content-header/ContentHeader';
import SelectInput from '../../components/select-input/SelectInput';
import HistoryFinanceCard from '../../components/history-finance-card/HistoryFinanceCard';

const List: FunctionComponent = () => {

  const months = [
    { value: 7, label: "Julho" },
    { value: 8, label: "Agosto" },
    { value: 9, label: "Setembro" },
  ];
  const years = [
    { value: 2020, label: 2020 },
    { value: 2019, label: 2019 },
    { value: 2018, label: 2018 },
  ];

  return (
    <Container>
      <ContentHeader title="Lista" lineColor="#454545">
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>

      <Filters>
        <button 
          type="button"
          className="tag-filter tag-filter__recurrent"
        >
          Recorrentes
        </button>

        <button 
          type="button"
          className="tag-filter tag-filter__eventual"
        >
          Eventual
        </button>
      </Filters>

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
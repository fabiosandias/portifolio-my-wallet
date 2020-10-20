import React, { FunctionComponent, useMemo, useState, useEffect } from 'react';
import { Container, Content, Filters } from './Style';

import ContentHeader from '../../components/content-header/ContentHeader';
import SelectInput from '../../components/select-input/SelectInput';
import HistoryFinanceCard from '../../components/history-finance-card/HistoryFinanceCard';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';

import formatCurrancy from '../../utils/formatCurrancy';
import formatDate from '../../utils/formatDate';


interface RouteParams {
  match: {
    params: {
      type: string
    }
  }
}

interface IData {
  id: string;
  description: string;
  amountFormatted: string;
  frequency: string;
  date: string;
  tagColor: string;
};

const List: FunctionComponent<RouteParams> = ({ match }) => {

  const [data, setData] = useState<IData[]>([]);

  const { type } = match.params;
  const title = useMemo(() => {
    return type === 'entry-balance' ? 'Entradas' : 'Saídas'
  }, [type]);

  const lineColor = useMemo(() => {
    return type === 'entry-balance' ? '#F7931B' : '#E44C4E'
  }, [type]);

  const listData = useMemo(() => {
    return type === 'entry-balance' ? gains : expenses;
  }, [type]);

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

  useEffect(() => {
    const response = listData.map(item => {
      return {
        id: String(Math.random() * listData.length),
        description: item.description,
        amountFormatted: formatCurrancy(Number(item.amount)),
        frequency: item.frequency,
        date: formatDate(item.date),
        tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E'
      }
    })
    console.log(response);
    setData(response);
  }, []);

  return (
    <Container>
      <ContentHeader title={title} lineColor={lineColor}>
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
        {
          data.map(item =>

            <HistoryFinanceCard
              key={item.id}
              tagColor={item.tagColor}
              title={item.description}
              subtitle={item.date}
              amount={item.amountFormatted}
            />

          )
        }
      </Content>

    </Container>
  );
}

export default List;
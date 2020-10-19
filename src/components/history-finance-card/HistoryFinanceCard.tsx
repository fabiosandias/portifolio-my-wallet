import React, { FunctionComponent } from 'react';
import { Container, Tag } from './Styles';

interface HistoryFinanceCardProps {
    tagColor: string;
    title: string;
    subtitle: string;
    amount: string;
}

const HistoryFinanceCard: FunctionComponent<HistoryFinanceCardProps> = ({
    tagColor,
    title,
    subtitle,
    amount
}) => {
    return (
        <Container>
            <Tag color={tagColor} />
            <div>
                <span>{title}</span>
                <small>{subtitle}</small>
            </div>
            <h3>{amount}</h3>
        </Container>
    );
}

export default HistoryFinanceCard;
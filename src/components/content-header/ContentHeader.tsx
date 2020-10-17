import React, { FunctionComponent } from 'react';

import { Container, TitleContainer, Controllers } from './Styles';

interface ContentHeaderProps {
    title: string;
    lineColor: string;
    children: React.ReactNode;
}

const ContentHeader: FunctionComponent<ContentHeaderProps> = ({
    children, title, lineColor
}) => {

    return (
        <Container >
            <TitleContainer lineColor={lineColor}>
                <h1>{title}</h1>
            </TitleContainer>
            <Controllers>
                {children}
            </Controllers>
        </Container>
    );
}

export default ContentHeader;
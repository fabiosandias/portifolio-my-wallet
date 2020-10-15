import React from 'react';
import logoImg from '../../assets/logo.svg'
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp, MdArrowDropUp
} from 'react-icons/md';
import {
  Container,
  Header,
  MenuContainer,
  MenuItemLink,
  LogImg,
  Title
} from './Styles';

const Aside = () => {
  return (
    <Container>

      <Header>
        <LogImg src={logoImg} alt="Logo Minha Carteira" />
        <Title>Minha Carteira</Title>
      </Header>

      <MenuContainer>

        <MenuItemLink href="#">
          <MdDashboard />
              Dachboard
            </MenuItemLink>

        <MenuItemLink href="#">
          <MdArrowUpward />
              Entradas
            </MenuItemLink>

        <MenuItemLink href="#">
          <MdArrowDownward />
            Saídas
            </MenuItemLink>

        <MenuItemLink href="#">
          <MdExitToApp />
              Sair
            </MenuItemLink>

      </MenuContainer>

    </Container>
  );
}

export default Aside;
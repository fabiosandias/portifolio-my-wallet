import React, { useMemo } from 'react';
import emojis from './utils/emojis';
import Toggle from '../toggle/Toggle';
import {
  Container,
  Profile,
  Welcome,
  UserName
} from './Styles';

const MainHeader = () => {

  const emoji = useMemo(() => {
    const indece = Math.floor(Math.random() * emojis.length);

    return emojis[indece];
  }, []);

  return (
    <Container>
      <Toggle />
      <Profile>
        <Welcome>Olá, {emoji}</Welcome>
        <UserName>Fabio Dias</UserName>
      </Profile>
    </Container>
  );
}

export default MainHeader;
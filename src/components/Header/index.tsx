import React from 'react';
import * as Styled from './styles';
import P from 'prop-types';

export default function Header({ theme = 'light' }) {
  return (
    <Styled.Container>
      <h1>{theme ? 'Olá mundo' : ''}</h1>
    </Styled.Container>
  );
}

Header.propTypes = { theme: P.node.isRequired };

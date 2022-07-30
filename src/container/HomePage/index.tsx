import React from 'react';
import * as Styled from './styles';
import P from 'prop-types';

export default function HomePage({ theme = 'light' }) {
  return (
    <Styled.Container>
      <h1>{theme ? 'Olá mundo' : ''}</h1>
    </Styled.Container>
  );
}

HomePage.propTypes = { theme: P.node.isRequired };

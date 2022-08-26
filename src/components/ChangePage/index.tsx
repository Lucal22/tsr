import { CaretLeft, CaretRight, Minus } from 'phosphor-react';
import React from 'react';
import * as Styled from './styles';

//export type ChangePageProps = {};

export default function ChangePage() {
  return (
    <Styled.Container>
      <Styled.Previous aria-label="Página anterior">
        <CaretLeft size={32} />
      </Styled.Previous>
      <Styled.Next aria-label="Página seguinte">
        <CaretRight size={32} />
      </Styled.Next>
    </Styled.Container>
  );
}

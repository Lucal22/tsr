import React from 'react';
import * as Styled from './styles';

export type SelectProps = {
  anything?: string;
};

export default function Select() {
  return (
    <Styled.Container>
      <Styled.Select>
        <Styled.Option>Todos</Styled.Option>
        <Styled.Option>Opção 2</Styled.Option>
        <Styled.Option>Opção 3</Styled.Option>
        <Styled.Option>Opção 4</Styled.Option>
      </Styled.Select>
      <Styled.Select>
        <Styled.Option>Todos</Styled.Option>
        <Styled.Option>Opção 2</Styled.Option>
        <Styled.Option>Opção 3</Styled.Option>
        <Styled.Option>Opção 4</Styled.Option>
      </Styled.Select>
    </Styled.Container>
  );
}

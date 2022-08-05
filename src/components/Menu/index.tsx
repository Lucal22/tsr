import { List } from 'phosphor-react';
import React from 'react';
import * as Styled from './styles';

export type MenuProps = {
  children: React.ReactNode;
};

export default function Menu() {
  return (
    <Styled.Button>
      <List />
    </Styled.Button>
  );
}

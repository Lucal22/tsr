import React from 'react';
import * as Styled from './styles';

export type GridProps = {
  children: React.ReactNode;
};

export default function Grid({ children }: GridProps) {
  return <Styled.Grid>{children}</Styled.Grid>;
}

import React from 'react';
import * as Styled from './styles';

export type HeadingProps = {
  children: React.ReactNode;
  combo: boolean;
};

export default function Heading({ children, combo = false }: HeadingProps) {
  return <Styled.Heading combo={combo}>{children}</Styled.Heading>;
}

import { CaretLeft, CaretRight } from 'phosphor-react';
import React from 'react';
import * as Styled from './styles';

export type ChangePageProps = {
  author: string;
  nextPage: number;
  previousPage: number;
};

export default function ChangePage({
  nextPage,
  previousPage,
  author,
}: ChangePageProps) {
  const next = `/about/authors/${author}/${nextPage}`;
  const previous = `/about/authors/${author}/${previousPage}`;

  return (
    <Styled.Container>
      <Styled.Previous aria-label="Página anterior">
        <CaretLeft size={32} />
      </Styled.Previous>
      <Styled.Next aria-label="Página seguinte">
        <CaretRight size={32} />
      </Styled.Next>{' '}
    </Styled.Container>
  );
}

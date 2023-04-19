import { CaretLeft, CaretRight } from 'phosphor-react';
import React from 'react';
import * as Styled from './styles';

export type ChangePageProps = {
  limit: number;
  start: number;
  len: number;
  nextPage: () => void;
  previousPage: () => void;
};

export default function ChangePage({
  start,
  len,
  limit,
  nextPage,
  previousPage,
}: ChangePageProps) {
  const next = () => {
    nextPage();
  };
  const previous = () => {
    previousPage();
  };

  const lastPage = limit >= len;
  const firstPage = start <= 0;

  return (
    <Styled.Container>
      {firstPage ? (
        <CaretLeft size={32} color={'grey'} />
      ) : (
        <CaretLeft onClick={() => previous()} size={32} />
      )}

      {lastPage ? (
        <CaretRight size={32} color={'grey'} />
      ) : (
        <CaretRight size={32} onClick={() => next()} />
      )}
    </Styled.Container>
  );
}

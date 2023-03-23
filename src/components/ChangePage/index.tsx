import { CaretLeft, CaretRight } from 'phosphor-react';
import React from 'react';
import Links from '../Links';
import * as Styled from './styles';

export type ChangePageProps = {
  author: string;
  nextPage: number;
  previousPage: number;
  postsPerPage: number;
  numberOfPosts: number;
};

export default function ChangePage({
  nextPage,
  previousPage,
  author,
  postsPerPage,
  numberOfPosts,
}: ChangePageProps) {
  const next = `/authors/${author}/${nextPage}`;
  const previous = `/authors/${author}/${previousPage}`;
  const hasNextPage = nextPage * postsPerPage < postsPerPage + numberOfPosts;
  const hasPreviousPage = previousPage >= 1;
  return (
    <Styled.Container>
      {hasPreviousPage ? (
        <Links link={previous}>
          <CaretLeft size={32} />
        </Links>
      ) : (
        <CaretLeft size={32} color={'grey'} />
      )}

      {hasNextPage ? (
        <Links link={next}>
          <CaretRight size={32} />
        </Links>
      ) : (
        <CaretRight size={32} color={'grey'} />
      )}
    </Styled.Container>
  );
}

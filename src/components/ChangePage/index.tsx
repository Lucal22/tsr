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

  return (
    <Styled.Container>
      <Links link={previous}>
        <CaretLeft size={32} />
      </Links>
      <Links link={next}>
        <CaretRight size={32} />
      </Links>
    </Styled.Container>
  );
}

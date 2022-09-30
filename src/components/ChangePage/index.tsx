import { CaretLeft, CaretRight } from 'phosphor-react';
import React from 'react';
import * as Styled from './styles';

export type ChangePageProps = {
  handlePosts: () => void;
  disabled: boolean;
};

export default function ChangePage({ disabled, handlePosts }: ChangePageProps) {
  return (
    <Styled.Container>
      <Styled.Previous aria-label="Página anterior">
        <CaretLeft size={32} />
      </Styled.Previous>
      <Styled.Next
        aria-label="Página seguinte"
        onClick={handlePosts}
        disabled={disabled}
      >
        <CaretRight size={32} />
      </Styled.Next>{' '}
    </Styled.Container>
  );
}

import React from 'react';
import * as Styled from './styles';

export type PostCardProps = {
  children: React.ReactNode;
};

export default function PostCard() {
  return (
    <Styled.Container>
      <Styled.Thumbnail>Hello world</Styled.Thumbnail>
      <Styled.CardContent>Olá mundo</Styled.CardContent>
    </Styled.Container>
  );
}

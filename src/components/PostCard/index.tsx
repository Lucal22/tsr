import React from 'react';
import * as Styled from './styles';

export type PostCardProps = {
  children: React.ReactNode;
};

export default function PostCard({ children }: PostCardProps) {
  return (
    <Styled.Container>
      <h1>{children}</h1>
    </Styled.Container>
  );
}

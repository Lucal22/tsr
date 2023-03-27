import React from 'react';
import * as Styled from './styles';

export type CardSkeletonProps = {
  children: React.ReactNode;
};

export default function CardSkeleton() {
  return (
    <Styled.Container categorySlug={'geral'}>
      <Styled.Thumbnail skeleton={true}></Styled.Thumbnail>
      <Styled.CardContent></Styled.CardContent>
    </Styled.Container>
  );
}

import React from 'react';
import * as Styled from '../styles';
import Container from '../../../components/Container';
import Grid from '../../../components/Grid';
import SideContentSkeleton from '../../../components/SideContent/skeleton';

export default function PostSkeleton() {
  return (
    <Container width={'large'}>
      <Grid>
        <Styled.Post></Styled.Post>
        <SideContentSkeleton />
      </Grid>
    </Container>
  );
}

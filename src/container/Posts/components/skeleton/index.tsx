import React from 'react';
import Container from '../../../../components/Container';
import Grid from '../../../../components/Grid';
import CardSkeleton from '../PostCard/skeleton';
import SideContentSkeleton from '../../../../components/SideContent/skeleton';
import * as Styled from '../../styles';

const number = [1, 2, 3, 4, 5];

export default function FilteredSkeleton() {
  return (
    <Container width={'large'}>
      <Grid>
        <Styled.Skeleton>
          {number.map((i) => (
            <CardSkeleton key={i} />
          ))}
        </Styled.Skeleton>
        <SideContentSkeleton />
      </Grid>
    </Container>
  );
}

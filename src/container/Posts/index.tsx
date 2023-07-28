import React from 'react';
import Container from '../../components/Container';
import Grid from '../../components/Grid';
import * as Styled from './styles';
import SideContent from '../../components/SideContent';
import { PageProps } from '../../Types/post';
import Pagination from '../../components/Pagination';

export default function Posts({
  posts,
  letter,
  mount,

}: PageProps) {
  return (
    <Styled.Container>
      <Container width={'large'}>
        <Styled.Content>
          <Grid>
            <Styled.Posts>
              <Pagination
                posts={posts}
              />
            </Styled.Posts>
            <SideContent mount={mount} letter={letter} />
          </Grid>
        </Styled.Content>
      </Container>
    </Styled.Container>
  );
}

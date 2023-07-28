import React from 'react';
import Container from '../../components/Container';
import Grid from '../../components/Grid';
import * as Styled from './styles';
import SideContent from '../../components/SideContent';
import { PageProps } from '../../Types/post';
import Pagination from '../../components/Pagination';

export default function Posts({
  posts,
  param,
  route,
  letter,
  mount,
  nextPage,
  previousPage,
  postsPerPage,
  numberOfPosts,
}: PageProps) {
  return (
    <Styled.Container>
      <Container width={'large'}>
        <Styled.Content>
          <Grid>
            <Styled.Posts>
              <Pagination
                param={param}
                route={route}
                posts={posts}
                nextPage={nextPage}
                previousPage={previousPage}
                postsPerPage={postsPerPage}
                numberOfPosts={numberOfPosts}
              />
            </Styled.Posts>
            <SideContent mount={mount} letter={letter} />
          </Grid>
        </Styled.Content>
      </Container>
    </Styled.Container>
  );
}

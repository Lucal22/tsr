import React from 'react';

import Container from '../../components/Container';
import Grid from '../../components/Grid';
import MainPost from './components/MainPost';
import * as Styled from './styles';
import { HomeProps } from '../../pages';
import SideContent from '../../components/SideContent';
import PostCardDisplay from '../Posts/components/PostCardDisplay';

export default function HomePage({
  posts,
  mainPosts,
  mount,
  letter,
}: HomeProps) {
  const lastPost = mainPosts.data[0].attributes;
  const lastPost2 = mainPosts.data[1].attributes;

  return (
    <Styled.Container>
      <Container width={'large'}>
        <Styled.Content>
          <Styled.Flex>
            <MainPost
              image={lastPost.image.data.attributes.formats.medium.url}
              alt={lastPost.image.data.attributes.alternativeText}
              titleSlug={lastPost.slug}
              categorySlug={lastPost.category.data.attributes.slug}
              title={lastPost.title}
              category={lastPost.category.data.attributes.name}
            />
            <MainPost
              image={lastPost2.image.data.attributes.formats.medium.url}
              alt={lastPost2.image.data.attributes.alternativeText}
              titleSlug={lastPost2.slug}
              categorySlug={lastPost2.category.data.attributes.slug}
              title={lastPost2.title}
              category={lastPost2.category.data.attributes.name}
            />
          </Styled.Flex>
          <Grid>
            <Styled.Posts>
              <PostCardDisplay posts={posts} filter={false} />
            </Styled.Posts>
            <SideContent mount={mount} letter={letter} />
          </Grid>
        </Styled.Content>
      </Container>
    </Styled.Container>
  );
}

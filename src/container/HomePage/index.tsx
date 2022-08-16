import React from 'react';
import AdBanner from '../../components/AdBanner';
import Container from '../../components/Container';
import Grid from '../../components/Grid';
import MainPost from '../../components/MainPost';
import * as Styled from './styles';

import PostCard from '../../components/PostCard';
import { HomeProps } from '../../pages';

export default function HomePage({ posts }: HomeProps) {
  console.log(posts);
  const lastPost = posts.data[0].attributes;
  //const lastPost2 = posts.data[1].attributes;

  return (
    <Styled.Container>
      <AdBanner />
      <Container width={'large'}>
        <Styled.Content>
          <Styled.Flex>
            <MainPost
              image={lastPost.image.data.attributes.formats.medium.url}
              titleSlug={lastPost.slug}
              categorySlug={lastPost.category.data.attributes.slug}
              title={lastPost.title}
              category={lastPost.category.data.attributes.name}
            />
            <MainPost
              image={lastPost.image.data.attributes.formats.medium.url}
              titleSlug={lastPost.slug}
              categorySlug={lastPost.category.data.attributes.slug}
              title={lastPost.title}
              category={lastPost.category.data.attributes.name}
            />
          </Styled.Flex>
          <Grid>
            <Styled.Posts>
              <PostCard />
              <PostCard />
              <PostCard />
            </Styled.Posts>
            <div>
              {' '}
              <h1>Hello</h1>
            </div>
          </Grid>
        </Styled.Content>
      </Container>
    </Styled.Container>
  );
}

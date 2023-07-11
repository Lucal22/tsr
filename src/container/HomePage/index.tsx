import React, { useState } from 'react';

import Container from '../../components/Container';
import Grid from '../../components/Grid';
import MainPost from './components/MainPost';
import * as Styled from './styles';
import PostCard from '../../components/PostCard';
import { HomeProps } from '../../pages';
import MorePosts from '../../components/MorePosts';
import SideContent from '../../components/SideContent';

export default function HomePage({
  posts,
  mainPosts,
  mount,
  letter,
}: HomeProps) {
  const [morePosts, setMorePosts] = useState<number>(5);

  const postArray = posts.data.slice(0, morePosts);
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
              {postArray.map((post) => {
                return (
                  <PostCard
                    key={post.id}
                    thumbnail={
                      post.attributes.image.data.attributes.formats.small.url
                    }
                    alt={post.attributes.image.data.attributes.alternativeText}
                    title={post.attributes.title}
                    categorySlug={post.attributes.category.data.attributes.slug}
                    slug={post.attributes.slug}
                    category={post.attributes.category.data.attributes.name}
                    author={post.attributes.author.data.attributes.name}
                    authorSlug={post.attributes.author.data.attributes.slug}
                    date={post.attributes.publishedAt}
                    description={post.attributes.description}
                  />
                );
              })}
              <MorePosts
                morePosts={morePosts}
                limit={20}
                setMorePosts={setMorePosts}
              />
            </Styled.Posts>
            <SideContent mount={mount} letter={letter} />
          </Grid>
        </Styled.Content>
      </Container>
    </Styled.Container>
  );
}

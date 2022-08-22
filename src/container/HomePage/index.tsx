import React, { useState } from 'react';

import AdBanner from '../../components/AdBanner';
import Container from '../../components/Container';
import Grid from '../../components/Grid';
import MainPost from '../../components/MainPost';
import * as Styled from './styles';
import PostCard from '../../components/PostCard';
import { HomeProps } from '../../pages';
import Banners from '../../components/Banners';
import MorePosts from '../../components/MorePosts';

export default function HomePage({ posts, mount, letter }: HomeProps) {
  const [morePosts, setMorePosts] = useState<number>(6);

  const postArray = posts.data.slice(0, morePosts);
  const lastPost = posts.data[0].attributes;
  const lastPost2 = posts.data[1].attributes;

  return (
    <Styled.Container>
      <AdBanner />
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
            </Styled.Posts>
            <Styled.MorePostsTop>
              <MorePosts morePosts={morePosts} setMorePosts={setMorePosts} />
            </Styled.MorePostsTop>
            <Styled.Banners>
              <Banners
                bannerThumb={lastPost.image.data.attributes.formats.small.url}
                alt={lastPost.image.data.attributes.alternativeText}
                category={'Endwalker'}
                categorySlug={'endwalker'}
                slug={'endwalker'}
                title={lastPost.title}
              />

              <Banners
                bannerThumb={
                  letter.attributes.image.data.attributes.formats.small.url
                }
                alt={letter.attributes.image.data.attributes.alternativeText}
                category={letter.attributes.category.data.attributes.name}
                categorySlug={letter.attributes.category.data.attributes.slug}
                slug={letter.attributes.slug}
                title={letter.attributes.title}
              />
              <Banners
                bannerThumb={
                  mount.attributes.image.data.attributes.formats.small.url
                }
                alt={mount.attributes.image.data.attributes.alternativeText}
                category={mount.attributes.category.data.attributes.name}
                categorySlug={mount.attributes.category.data.attributes.slug}
                slug={mount.attributes.slug}
                title={mount.attributes.title}
              />
              <Banners
                bannerThumb={lastPost.image.data.attributes.formats.small.url}
                alt={lastPost.image.data.attributes.alternativeText}
                category={'Endwalker'}
                categorySlug={'stormblood'}
                slug={'endwalker'}
                title={lastPost.title}
              />
            </Styled.Banners>
          </Grid>
          <Styled.MorePostsBot>
            <MorePosts morePosts={morePosts} setMorePosts={setMorePosts} />
          </Styled.MorePostsBot>
        </Styled.Content>
      </Container>
    </Styled.Container>
  );
}

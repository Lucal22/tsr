import React, { useState } from 'react';

import Container from '../../components/Container';
import Grid from '../../components/Grid';
import * as Styled from './styles';
import PostCard from '../../components/PostCard';
import { HomeProps } from '../../pages';
import Banners from '../../components/Banners';
import SideContent from '../../components/SideContent';
import AuthorCard from '../../components/AuthorCard';
import { img } from '../../assets';
import { PageProps } from '../../Types/post';

export default function Authors({ posts, letter, mount }: PageProps) {
  const postArray = posts.data;
  const lastPost = posts.data[0].attributes;

  return (
    <Styled.Container>
      <Container width={'large'}>
        <Styled.Content>
          <Grid>
            <Styled.Posts>
              <AuthorCard
                categorySlug={'endwalker'}
                thumbnail={img.banner}
                alt={''}
                slug={''}
                category={''}
                authorSlug={''}
                author={'Lucal'}
                date={''}
                description={''}
                ttLink={'http://twitter.com/lucal_22'}
              />
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
            <SideContent>
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
            </SideContent>
          </Grid>
        </Styled.Content>
      </Container>
    </Styled.Container>
  );
}

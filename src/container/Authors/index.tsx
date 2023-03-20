import React from 'react';

import Container from '../../components/Container';
import Grid from '../../components/Grid';
import * as Styled from './styles';
import Banners from '../../components/Banners';
import SideContent from '../../components/SideContent';
import AuthorCard from '../../components/AuthorCard';
import { PageProps } from '../../Types/post';
import PageContainer from '../../components/PageContainer';
//import ChangePage from '../../components/ChangePage';
//import { loadPosts } from '../../data/load-posts';

export default function Authors({
  posts,
  author,
  letter,
  mount,
  nextPage,
  previousPage,
}: PageProps) {
  const postAuthor = posts.data[0].attributes.author.data.attributes;

  return (
    <Styled.Container>
      <Container width={'large'}>
        <Styled.Content>
          <Grid>
            <Styled.Posts>
              <AuthorCard
                thumbnail={postAuthor.image.data.attributes.url}
                width={postAuthor.image.data.attributes.width}
                height={postAuthor.image.data.attributes.height}
                alt={postAuthor.image.data.attributes.alternativeText}
                author={postAuthor.name}
                description={postAuthor.description}
                twitter={postAuthor.ttname}
                ttLink={postAuthor.ttlink}
                job={postAuthor.job}
                server={postAuthor.server}
                char={postAuthor.ffnickname}
              />
              <PageContainer
                author={author}
                nextPage={nextPage}
                previousPage={previousPage}
                posts={posts}
              />
            </Styled.Posts>
            <SideContent>
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
                bannerThumb={
                  letter.attributes.image.data.attributes.formats.small.url
                }
                alt={letter.attributes.image.data.attributes.alternativeText}
                category={letter.attributes.category.data.attributes.name}
                categorySlug={letter.attributes.category.data.attributes.slug}
                slug={letter.attributes.slug}
                title={letter.attributes.title}
              />
            </SideContent>
          </Grid>
        </Styled.Content>
      </Container>
    </Styled.Container>
  );
}

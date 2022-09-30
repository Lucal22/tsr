import React, { useState } from 'react';

import Container from '../../components/Container';
import Grid from '../../components/Grid';
import * as Styled from './styles';
import PostCard from '../../components/PostCard';
import Banners from '../../components/Banners';
import SideContent from '../../components/SideContent';
import AuthorCard from '../../components/AuthorCard';
import { PageProps } from '../../Types/post';
import ChangePage from '../../components/ChangePage';
import { loadPosts } from '../../data/load-posts';

export default function Authors({
  posts,
  letter,
  mount,
  variables,
}: PageProps) {
  const [statePosts, setStatePosts] = useState(posts.data);
  const [stateVariables, setStateVariables] = useState(variables);
  const [disabled, setDisabled] = useState(false);
  const [noMorePosts, setNoMorePosts] = useState(false);

  const postArray = statePosts;
  const postAuthor = statePosts[0].attributes.author.data.attributes;

  const handleNextPage = async () => {
    setDisabled(true);
    console.log('Cheguei aqui na função');
    if (stateVariables.start && stateVariables.limit) {
      console.log('Cheguei aqui no if');

      const newVariables = {
        ...stateVariables,
        start: stateVariables.start + stateVariables.limit,
        limit: stateVariables.limit,
      };
      const morePosts = await loadPosts(newVariables);

      if (!morePosts || !morePosts.posts || !morePosts.posts.data.length) {
        setNoMorePosts(true);
        return;
      }
      setDisabled(false);
      setStateVariables(newVariables);
      setStatePosts((p) => [...p, ...morePosts.posts.data]);
    }
    console.log('Não fui no IF');
  };
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
              <ChangePage handlePosts={handleNextPage} disabled={disabled} />
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

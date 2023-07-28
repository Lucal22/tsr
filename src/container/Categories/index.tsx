import React from 'react';
import * as Styled from './styles';
import { PageProps } from '../../Types/post';
import Container from '../../components/Container';
import Grid from '../../components/Grid';
import PostCard from '../../components/PostCard';
import SideContent from '../../components/SideContent';


export default function CategoryPosts({ posts, letter, mount }: PageProps) {

  return (
    <Container width={'large'}>
      <Styled.Content>
        <Grid>
          <Styled.Posts>
            {posts.data.map((post) => {
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
          <SideContent
          mount={mount}
          letter={letter}
          />
        </Grid>
      </Styled.Content>
    </Container>
  );
}

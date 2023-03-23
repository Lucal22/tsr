import React from 'react';

import Container from '../../components/Container';
import Grid from '../../components/Grid';
import * as Styled from './styles';
import Banners from '../../components/Banners';
import SideContent from '../../components/SideContent';
import AuthorCard from '../../components/AuthorCard';
import { PageProps } from '../../Types/post';
import Pagination from '../../components/Pagination';
//import ChangePage from '../../components/ChangePage';
//import { loadPosts } from '../../data/load-posts';

export default function Authors({
  posts,
  author,
  letter,
  mount,
  nextPage,
  previousPage,
  postsPerPage,
  numberOfPosts,
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
              <Pagination
                author={author}
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

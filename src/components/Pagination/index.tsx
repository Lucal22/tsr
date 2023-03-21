import React from 'react';
import { PaginationType } from '../../Types/post';
import ChangePage from '../ChangePage';
import PostCard from '../PostCard';
import * as Styled from './styles';

export default function Pagination({
  author,
  posts,
  nextPage,
  postsPerPage,
  previousPage,
}: PaginationType) {
  const postArray = posts.data;

  return (
    <Styled.Post>
      {postArray.map((post) => {
        return (
          <PostCard
            key={post.id}
            thumbnail={post.attributes.image.data.attributes.formats.small.url}
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
      <ChangePage
        author={author}
        nextPage={nextPage}
        previousPage={previousPage}
        postsPerPage={postsPerPage}
        numberOfPosts={0}
      />
    </Styled.Post>
  );
}

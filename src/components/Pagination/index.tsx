import React from 'react';
import { FullPost } from '../../Types/post';
import ChangePage from '../ChangePage';
import PostCard from '../PostCard';
import * as Styled from './styles';

export type PaginationProps = {
  posts: FullPost;
  author: string;
  nextPage: number;
  previousPage: number;
  postsPerPage: number;
};

export default function Pagination({
  author,
  posts,
  nextPage,
  previousPage,
}: PaginationProps) {
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
      />
    </Styled.Post>
  );
}

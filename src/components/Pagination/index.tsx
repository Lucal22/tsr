import React, { useState } from 'react';
import { PaginationType } from '../../Types/post';
import ChangePage from '../ChangePage';
import PostCard from '../PostCard';
import * as Styled from './styles';

export default function Pagination({
  param,
  posts,
  route,
  nextPage,
  postsPerPage,
  previousPage,
  numberOfPosts,
}: PaginationType) {
  const [tags, setTags] = useState('guides');
  const [expansion, setExpansion] = useState('endwalker');

  const postArray = posts.data.filter(
    (filter) => filter.attributes.category.data.attributes.slug == expansion,
  );

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
        route={route}
        param={param}
        nextPage={nextPage}
        previousPage={previousPage}
        postsPerPage={postsPerPage}
        numberOfPosts={numberOfPosts}
      />
    </Styled.Post>
  );
}

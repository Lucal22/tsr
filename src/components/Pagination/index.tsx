import React, { useState } from 'react';
import { PaginationType } from '../../Types/post';
import ChangePage from '../ChangePage';
import PostCard from '../PostCard';
import * as Styled from './styles';
import Select from '../Select';
import postValue from './function';

export default function Pagination({
  param,
  posts,
  route,
  nextPage,
  postsPerPage,
  previousPage,
  numberOfPosts,
}: PaginationType) {
  const [tag, setTag] = useState('all');
  const [expansion, setExpansion] = useState('all');

  function handleExpansion(value: string) {
    setExpansion(value);
  }
  function handleCategory(value: string) {
    setTag(value);
  }

  const postArray = postValue(tag, expansion, posts.data);

  return (
    <Styled.Post>
      <Select
        handleExpansion={handleExpansion}
        handleCategory={handleCategory}
      />
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

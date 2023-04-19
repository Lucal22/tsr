import React, { useState } from 'react';
import { PaginationType } from '../../Types/post';
import ChangePage from '../ChangePage';
import PostCard from '../PostCard';
import * as Styled from './styles';
import Select from '../Select';

export default function Pagination({ posts }: PaginationType) {
  const [tag, setTag] = useState('all');
  const [expansion, setExpansion] = useState('all');
  const [start, setStart] = useState(0);
  const [limit, setLimit] = useState(5);

  function handleExpansion(value: string) {
    setExpansion(value);
  }
  function handleCategory(value: string) {
    setTag(value);
  }

  function nextPage() {
    setStart(start + 5);
    setLimit(limit + 5);
  }
  function previousPage() {
    setStart(start - 5);
    setLimit(limit - 5);
  }

  const postArray = posts.data.filter(
    (filter) =>
      (expansion !== 'all'
        ? filter.attributes.category.data.attributes.slug == expansion
        : filter.attributes.category.data.attributes.slug) &&
      (tag !== 'all'
        ? filter.attributes.tag.data.attributes.slug == tag
        : filter.attributes.tag.data.attributes.slug),
  );
  const len = postArray.length;

  const showPosts = len > 5 ? postArray.slice(start, limit) : postArray;

  return (
    <Styled.Post>
      <Select
        handleExpansion={handleExpansion}
        handleCategory={handleCategory}
      />
      {showPosts.map((post) => {
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
        start={start}
        len={len}
        limit={limit}
        nextPage={nextPage}
        previousPage={previousPage}
      />
    </Styled.Post>
  );
}

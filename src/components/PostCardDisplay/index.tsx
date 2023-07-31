import React, { useState } from 'react';
import { PaginationType } from '../../Types/post';
import PostCard from '../PostCard';
import * as Styled from './styles';
import Select from '../Select';
import MorePosts from '../MorePosts';

export default function PostCardDisplay({ posts, filter }: PaginationType) {
  const [tag, setTag] = useState('all');
  const [expansion, setExpansion] = useState('all');
  const [morePosts, setMorePosts] = useState<number>(5);

  function handleExpansion(value: string) {
    setExpansion(value);
  }
  function handleCategory(value: string) {
    setTag(value);
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

  const showPosts = postArray.slice(0, morePosts);

  return (
    <Styled.Post>
      {filter ? (
        <Select
          handleExpansion={handleExpansion}
          handleCategory={handleCategory}
        />
      ) : null}

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
      {len > 5 ? (
        <MorePosts
          morePosts={morePosts}
          setMorePosts={setMorePosts}
          limit={len}
        />
      ) : null}
    </Styled.Post>
  );
}

import React from 'react';
import * as Styled from './styles';
import Links from '../Links';

export type MorePostsProps = {
  morePosts: number;
  limit: number;
  setMorePosts: React.Dispatch<React.SetStateAction<number>>;
};

export default function MorePosts({
  morePosts,
  limit,
  setMorePosts,
}: MorePostsProps) {
  return (
    <Styled.Container>
      <Styled.Line />
      <Styled.Button
        aria-label="Mostra mais posts"
        morePosts={morePosts}
        onClick={() => {
          setMorePosts(morePosts < limit ? morePosts + 4 : morePosts);
        }}
      >
        <p>
          {morePosts < limit ? (
            'Clique para mais posts'
          ) : (
            <>
              Veja mais na página <Links link="/posts">Posts</Links>
            </>
          )}
        </p>
      </Styled.Button>
      <Styled.Line />
    </Styled.Container>
  );
}

import React from 'react';
import * as Styled from './styles';

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
      {morePosts >= limit ? null : (
        <>
          <Styled.Line />
          <Styled.Button
            aria-label="Mostra mais posts"
            morePosts={morePosts}
            disabled={morePosts >= limit}
            onClick={() => {
              setMorePosts(morePosts < limit ? morePosts + 4 : morePosts);
            }}
          >
            <p>Clique para mais posts</p>
          </Styled.Button>
          <Styled.Line />
        </>
      )}
    </Styled.Container>
  );
}

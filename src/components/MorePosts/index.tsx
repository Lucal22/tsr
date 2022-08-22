import React from 'react';
import * as Styled from './styles';

export type MorePostsProps = {
  morePosts: number;
  setMorePosts: React.Dispatch<React.SetStateAction<number>>;
};

export default function MorePosts({ morePosts, setMorePosts }: MorePostsProps) {
  return (
    <Styled.Container>
      <Styled.Line />
      <Styled.Button
        aria-label="Mostra mais posts"
        morePosts={morePosts}
        onClick={() => {
          setMorePosts(morePosts < 20 ? morePosts + 4 : morePosts);
        }}
      >
        <p>
          {morePosts < 20 ? 'Clique para mais posts' : 'Veja mais em Posts'}
        </p>
      </Styled.Button>
      <Styled.Line />
    </Styled.Container>
  );
}

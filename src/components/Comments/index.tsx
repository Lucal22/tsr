import React from 'react';
import * as Styled from './styles';
import { DiscussionEmbed } from 'disqus-react';

export type CommentsProps = {
  slug: string;
  title: string;
};

export default function Comments({ slug, title }: CommentsProps) {
  return (
    <Styled.Container>
      <DiscussionEmbed
        shortname={'the-scions-report'}
        config={{
          url: `/posts/${slug}`,
          identifier: slug,
          title: title,
          language: 'pt_BR',
        }}
      />
    </Styled.Container>
  );
}

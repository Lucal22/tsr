import Image from 'next/image';
import React from 'react';
import { PostStyleProps } from '../../Types/style';
import Links from '../Links';
import * as Styled from './styles';

export type PostCardProps = PostStyleProps & {
  thumbnail: string;
  title: string;
  slug: string;
  category: string;
};

export default function PostCard({
  thumbnail,
  title,
  category,
  categorySlug = 'endwalker',
  slug,
}: PostCardProps) {
  return (
    <Styled.Container>
      <Styled.Thumbnail>
        <Image src={thumbnail} width={300} height={169} />
      </Styled.Thumbnail>
      <Styled.CardContent>
        <Styled.Heading categorySlug={categorySlug}>
          <Links link={`/${categorySlug}/${slug}`}>{title}</Links>
        </Styled.Heading>
        <p>Olá mundo</p>
      </Styled.CardContent>
    </Styled.Container>
  );
}

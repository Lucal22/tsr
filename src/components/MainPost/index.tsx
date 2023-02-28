import React from 'react';
import * as Styled from './styles';
import Links from '../Links';
import { PostStyleProps } from '../../Types/style';
import Images from '../Images';

export type MainPostProps = PostStyleProps & {
  image: string;
  title: string;
  titleSlug: string;
  category: string;
  alt: string;
};

export default function MainPost({
  image,
  alt,
  titleSlug,
  categorySlug,
  title,
  category,
}: MainPostProps) {
  return (
    <Styled.Container>
      <Images
        link={`/${categorySlug}/${titleSlug}`}
        src={image}
        width={570}
        height={320}
        alt={alt}
      />
      <Styled.Category categorySlug={categorySlug}>
        <Links link={`/${categorySlug}`}>{category}</Links>
      </Styled.Category>
      <Styled.Title categorySlug={categorySlug}>
        <Links link={`/${categorySlug}/${titleSlug}`}>{title}</Links>
      </Styled.Title>
    </Styled.Container>
  );
}
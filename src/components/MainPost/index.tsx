import React from 'react';
import * as Styled from './styles';
import Image from 'next/image';
import Links from '../Links';
import { PostStyleProps } from '../../Types/style';

export type MainPostProps = PostStyleProps & {
  image: string;
  title: string;
  titleSlug: string;
  category: string;
};

export default function MainPost({
  image,
  titleSlug,
  categorySlug,
  title,
  category,
}: MainPostProps) {
  return (
    <Styled.Container>
      <Links link={`/${categorySlug}/${titleSlug}`}>
        <Image src={image} width={570} height={320} />
      </Links>
      <Styled.Category categorySlug={categorySlug}>
        <Links link={`/${categorySlug}`}>{category}</Links>
      </Styled.Category>
      <Styled.Title categorySlug={categorySlug}>
        <Links link={`/${categorySlug}/${titleSlug}`}>{title}</Links>
      </Styled.Title>
    </Styled.Container>
  );
}

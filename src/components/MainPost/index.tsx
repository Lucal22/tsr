import React from 'react';
import * as Styled from './styles';
import Image, { StaticImageData } from 'next/image';
import Links from '../Links';

export type MainPostProps = {
  image: StaticImageData;
  title: string;
  titleSlug: string;
  categorySlug: string;
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
        <Image src={image} width={860} height={486} />
      </Links>
      <Styled.Category>
        <Links link={`/${categorySlug}`}>{category}</Links>
      </Styled.Category>
      <Styled.Title>
        <Links link={`/${categorySlug}/${titleSlug}`}>{title}</Links>
      </Styled.Title>
    </Styled.Container>
  );
}

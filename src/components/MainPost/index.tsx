import React from 'react';
import * as Styled from './styles';
import Image, { StaticImageData } from 'next/image';
import Links from '../Links';

export type MainPostProps = {
  image: StaticImageData;
  title: string;
  titleSlug: string;
  categorySlug: string;
};

export default function MainPost({
  image,
  titleSlug,
  categorySlug,
  title,
}: MainPostProps) {
  return (
    <Styled.Container>
      <Links link={`/${categorySlug}/${titleSlug}`}>
        <Image src={image} width={860} height={486} />
      </Links>
      <Styled.Title>
        <h2>
          <Links link={`/${categorySlug}/${titleSlug}`}>{title}</Links>
        </h2>
      </Styled.Title>
    </Styled.Container>
  );
}

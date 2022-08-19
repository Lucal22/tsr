import React from 'react';
import * as Styled from './styles';
import Image from 'next/image';
import Links from '../Links';
import { PostStyleProps } from '../../Types/style';

export type BannersProps = PostStyleProps & {
  bannerThumb: string;
  category: string;
  slug: string;
  title: string;
};

export default function Banners({
  bannerThumb,
  category,
  categorySlug,
  slug,
  title,
}: BannersProps) {
  return (
    <Styled.Container>
      <Styled.Thumbnail>
        <Links link={`/${categorySlug}/${slug}`}>
          <Image src={bannerThumb} width={300} height={169} />
        </Links>
      </Styled.Thumbnail>
      <Styled.Category categorySlug={categorySlug}>
        <Links link={`/${categorySlug}`}>{category}</Links>
      </Styled.Category>
      <Styled.Title categorySlug={categorySlug}>
        <Links link={`/${categorySlug}/${slug}`}>{title}</Links>
      </Styled.Title>
    </Styled.Container>
  );
}

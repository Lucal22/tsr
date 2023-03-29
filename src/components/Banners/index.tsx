import React from 'react';
import * as Styled from './styles';
import Links from '../Links';
import { PostStyleProps } from '../../Types/style';
import Images from '../Images';

export type BannersProps = PostStyleProps & {
  bannerThumb: string;
  alt: string;
  category: string;
  slug: string;
  title: string;
};

export default function Banners({
  bannerThumb,
  alt,
  category,
  categorySlug,
  slug,
  title,
}: BannersProps) {
  return (
    <Styled.Container>
      <Styled.Thumbnail>
        <Images
          link={`/${categorySlug}/${slug}`}
          src={bannerThumb}
          width={300}
          height={169}
          alt={alt}
        />
      </Styled.Thumbnail>
      <Styled.Category categorySlug={categorySlug}>
        <Links link={`/${categorySlug}`}>{category}</Links>
      </Styled.Category>
      <Styled.Title categorySlug={categorySlug}>
        <Links link={`/${slug}`}>{title}</Links>
      </Styled.Title>
    </Styled.Container>
  );
}

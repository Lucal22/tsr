import React from 'react';
import { PostStyleProps } from '../../../../Types/style';
import Images from '../../../../components/Images';
import Links from '../../../../components/Links';
import * as Styled from './styles';

export type AttributeProps = PostStyleProps & {
  thumbnail: string;
  alt: string;
  title: string;
  slug: string;
  description: string;
  isExpansion: boolean;
};

export default function AttributeCard({
  thumbnail,
  title,
  isExpansion = false,
  categorySlug = 'endwalker',
  slug,
  alt,
  description,
}: AttributeProps) {
  return (
    <Styled.Container categorySlug={isExpansion ? categorySlug : 'geral'}>
      <Styled.Thumbnail skeleton={false}>
        <Images
          link={`/${isExpansion ? 'expansions' : 'categories'}/${slug}`}
          src={thumbnail}
          width={350}
          height={197}
          alt={alt}
        />
      </Styled.Thumbnail>
      <Styled.CardContent>
        <Styled.Heading categorySlug={isExpansion ? categorySlug : 'geral'}>
          <Links link={`/${isExpansion ? 'expansions' : 'categories'}/${slug}`}>
            {title}
          </Links>
        </Styled.Heading>
        <Styled.Description>{description}</Styled.Description>
      </Styled.CardContent>
    </Styled.Container>
  );
}

import { StaticImageData } from 'next/image';
import React from 'react';
import { PostStyleProps } from '../../Types/style';
import Images from '../Images';
import Links from '../Links';
import * as Styled from './styles';

export type PostCardProps = PostStyleProps & {
  thumbnail: string | StaticImageData;
  twitter?: string;
  ttLink: string;
  alt: string;
  slug: string;
  category: string;
  authorSlug: string;
  author: string;
  date: string;
  description: string;
};

export default function PostCard({
  thumbnail,
  twitter,
  ttLink,
  category,
  categorySlug = 'endwalker',
  slug,
  authorSlug,
  author,
  alt,
  description,
}: PostCardProps) {
  return (
    <Styled.Container categorySlug={categorySlug}>
      <Styled.Thumbnail>
        <Images link={``} src={thumbnail} width={350} height={197} alt={alt} />
      </Styled.Thumbnail>
      <Styled.CardContent>
        <Styled.Heading>{`Luís Carlos (${author}) / Faz tudo`}</Styled.Heading>
        <Styled.Description>{description}</Styled.Description>
        <Styled.Preferences>{`Profissão favorita: (${author})`}</Styled.Preferences>
        <Styled.Preferences>{`Personagem favorito: (${author})`}</Styled.Preferences>
        <Styled.Preferences>{`Música favorita: (${author})`}</Styled.Preferences>
        {twitter ? (
          <Styled.Preferences>
            {`Twitter: `}
            <Links link={ttLink} newTab={true}>
              {twitter}
            </Links>
          </Styled.Preferences>
        ) : null}
        <Styled.SocialMedias></Styled.SocialMedias>
      </Styled.CardContent>
    </Styled.Container>
  );
}

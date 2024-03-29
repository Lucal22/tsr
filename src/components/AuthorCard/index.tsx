import { StaticImageData } from 'next/image';
import React from 'react';
import Images from '../Images';
import Links from '../Links';
import * as Styled from './styles';

export type PostCardProps = {
  thumbnail: string | StaticImageData;
  twitter?: string;
  ttLink?: string;
  alt: string;
  author: string;
  description: string;
  width: number;
  height: number;
  job: string;
  server: string;
  char: string;
};

export default function PostCard({
  thumbnail,
  twitter,
  ttLink,
  author,
  alt,
  description,
  height,
  job,
  server,
  width,
  char,
}: PostCardProps) {
  return (
    <Styled.Container>
      <Styled.Thumbnail>
        <Images src={thumbnail} width={width} height={height} alt={alt} />
      </Styled.Thumbnail>
      <Styled.CardContent>
        <Styled.Heading>{`Luís Carlos (${author})`}</Styled.Heading>
        <Styled.Description>{description}</Styled.Description>
        <Styled.Preferences>{`Server: ${server}`}</Styled.Preferences>
        <Styled.Preferences>{`Nome do personagem: ${char}`}</Styled.Preferences>
        <Styled.Preferences>{`Profissão favorita: ${job.replace(
          '_',
          ' ',
        )}`}</Styled.Preferences>
        {twitter ? (
          <Styled.SocialMedias>
            {`Twitter: `}
            <Links link={ttLink} newTab={true}>
              {twitter}
            </Links>
          </Styled.SocialMedias>
        ) : null}
      </Styled.CardContent>
    </Styled.Container>
  );
}
/*
const postAuthor = posts.data[0].attributes.author.data.attributes;

<AuthorCard
thumbnail={postAuthor.image.data.attributes.url}
width={postAuthor.image.data.attributes.width}
height={postAuthor.image.data.attributes.height}
alt={postAuthor.image.data.attributes.alternativeText}
author={postAuthor.name}
description={postAuthor.description}
twitter={postAuthor.ttname}
ttLink={postAuthor.ttlink}
job={postAuthor.job}
server={postAuthor.server}
char={postAuthor.ffnickname}
/>
*/

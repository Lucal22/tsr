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
  height: number;
  job: string;
  server: string;
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
}: PostCardProps) {
  return (
    <Styled.Container>
      <Styled.Thumbnail>
        <Images
          link={``}
          src={thumbnail}
          width={350}
          height={height}
          alt={alt}
        />
      </Styled.Thumbnail>
      <Styled.CardContent>
        <Styled.Heading>{`Luís Carlos (${author})`}</Styled.Heading>
        <Styled.Description>
          {description} Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Illum eius optio commodi exercitationem, repudiandae explicabo
          excepturi incidunt quas, magni quasi unde fugiat deserunt amet totam
          saepe ducimus dolorum veritatis animi.{' '}
        </Styled.Description>
        <Styled.Preferences>{`Server: (${server})`}</Styled.Preferences>
        <Styled.Preferences>{`Nome do personagem: (${author})`}</Styled.Preferences>
        <Styled.Preferences>{`Profissão favorita: (${job})`}</Styled.Preferences>
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

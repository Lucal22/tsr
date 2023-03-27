import React from 'react';
import { PostStyleProps } from '../../Types/style';
import Details from '../Details';
import Images from '../Images';
import Links from '../Links';
import * as Styled from './styles';

export type PostCardProps = PostStyleProps & {
  thumbnail: string;
  alt: string;
  title: string;
  slug: string;
  category: string;
  authorSlug: string;
  author: string;
  date: string;
  description: string;
};

export default function PostCard({
  thumbnail,
  title,
  category,
  categorySlug = 'endwalker',
  slug,
  authorSlug,
  author,
  date,
  alt,
  description,
}: PostCardProps) {
  return (
    <Styled.Container categorySlug={categorySlug}>
      <Styled.Thumbnail skeleton={false}>
        <Images
          link={`/${categorySlug}/${slug}`}
          src={thumbnail}
          width={350}
          height={197}
          alt={alt}
        />
      </Styled.Thumbnail>
      <Styled.CardContent>
        <Styled.Category categorySlug={categorySlug}>
          <Links link={`/${categorySlug}`}>{category}</Links>
        </Styled.Category>
        <Styled.Heading>
          <Links link={`/${categorySlug}/${slug}`}>{title}</Links>
        </Styled.Heading>
        <Styled.Description>{description}</Styled.Description>
        <Styled.Details>
          <Details
            categorySlug={categorySlug}
            date={date}
            author={author}
            category={category}
            authorSlug={authorSlug}
            addCategory={false}
          />
        </Styled.Details>
      </Styled.CardContent>
    </Styled.Container>
  );
}

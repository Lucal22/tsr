import React from 'react';
import { PostStyleProps } from '../../Types/style';
import Links from '../Links';
import Date from './Date';
import * as Styled from './styles';

export type DetailsProps = PostStyleProps & {
  date: string;
  author: string;
  category: string;
  authorSlug: string;
  addCategory: boolean;
};

export default function Details({
  authorSlug,
  date,
  author,
  category,
  categorySlug,
  font,
  addCategory = false,
}: DetailsProps) {
  return (
    <Styled.Details categorySlug={categorySlug} font={font}>
      Publicado por <Links link={`/${authorSlug}`}>{author} </Links>
      em <Date date={date} />
      {addCategory ? (
        <>
          {' '}
          <Links link={`/category/${categorySlug}`}>{category}</Links>
        </>
      ) : null}
    </Styled.Details>
  );
}

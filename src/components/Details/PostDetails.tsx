import React from 'react';
import Date from '../Date';
import { DetailsProps } from './Details';

export default function PostDetails({
  authorSlug,
  date,
  author,
  category,
  categorySlug,
}: DetailsProps) {
  return (
    <span className=" text-[12px] text-slate-400 mobile:text-[16px]">
      <span> Publicado por</span>
      <a className=" text-blue-500" href={`/about/authors/${authorSlug}`}>
        {' '}
        {author}{' '}
      </a>
      <span>
        em <Date date={date} /> |{' '}
      </span>
      <a className=" text-blue-500" href={`/category/${categorySlug}`}>
        {category}
      </a>
    </span>
  );
}

import React from 'react';
import Date from '../Date/Date';

export type DetailsProps = {
  date: string;
  author: string;
  category: string;
  authorSlug: string;
  categorySlug: string;
};

export default function Details({
  authorSlug,
  date,
  author,
  category,
  categorySlug,
}: DetailsProps) {
  return (
    <span className=" text-[12px] text-slate-400 tablets:text-sm">
      <span className="hidden tablets:inline"> Publicado por</span>
      <a className="hidden text-blue-500 tablets:inline" href={`/about/authors/${authorSlug}`}>
        {' '}
        {author}{' '}
      </a>
      <span className="hidden tablets:inline">
        em <Date date={date} /> |{' '}
      </span>
      <a className=" text-blue-500" href={`/category/${categorySlug}`}>
        {category}
      </a>
    </span>
  );
}

import React from 'react';
import Link from 'next/link'


export type LinksProps = {
  children: React.ReactNode;
  link?: string;
  newTab?: boolean;
};

export default function Links({ children, link = '/', newTab = false }: LinksProps) {
  const target = newTab ? '_blank' : '_self';
  return (
    <Link href={link} target={target}>
      {children}
    </Link>
  );
}

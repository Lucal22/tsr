import React from 'react';
import * as Styled from './styles';

export type LinksProps = {
  children: React.ReactNode;
  link?: string;
  newTab?: boolean;
};

export default function Links({ children, link, newTab = false }: LinksProps) {
  const target = newTab ? '_blank' : '_self';
  return (
    <Styled.Links href={link} target={target}>
      {children}
    </Styled.Links>
  );
}

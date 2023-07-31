import Image, { StaticImageData } from 'next/image';
import styled from 'styled-components';
import React from 'react';
import Links from '../Links';

export type ImageProps = {
  link?: string;
  src: string | StaticImageData;
  alt: string;
  width?: string | number;
  height?: string | number;
};

export const Cursor = styled.div`
  cursor: pointer;
`;

export default function Images({ link, src, alt, width, height }: ImageProps) {
  return (
    <Cursor>
      <Links link={link}>
        <Image src={src} alt={alt} width={width} height={height} />
      </Links>
    </Cursor>
  );
}

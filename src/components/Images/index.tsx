import Image, { StaticImageData } from 'next/image';
import React from 'react';
import Links from '../Links';

export type ImageProps = {
  link?: string;
  src: string | StaticImageData;
  alt: string;
  width?: string | number;
  height?: string | number;
};

export default function Images({ link, src, alt, width, height }: ImageProps) {
  return (
    <Links link={link}>
      <Image src={src} alt={alt} width={width} height={height} />
    </Links>
  );
}

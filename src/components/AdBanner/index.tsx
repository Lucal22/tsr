import Image from 'next/image';
import React from 'react';
import { img } from '../../assets';
import Container from '../Container';
import Links from '../Links';
import * as Styled from './styles';

export type AdBannerProps = {
  children: React.ReactNode;
};

export default function AdBanner() {
  return (
    <Container width={'large'}>
      <Styled.Banner>
        <Links link={'/'}>
          <Image src={img.banner} width="800px" height="300" />
        </Links>
      </Styled.Banner>
    </Container>
  );
}

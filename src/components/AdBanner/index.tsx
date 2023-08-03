import React from 'react';
import { img } from '../../assets';
import Container from '../Container';
import * as Styled from './styles';
import Images from '../Images';

export type AdBannerProps = {
  children: React.ReactNode;
};

export default function AdBanner() {
  return (
    <Container width={'large'}>
      <Styled.Banner>
        <Images
          link={'/'}
          src={img.banner}
          width="800px"
          height="300px"
          alt={'banner'}
        />
      </Styled.Banner>
    </Container>
  );
}

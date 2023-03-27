import React from 'react';
import BannerSkeleton from '../Banners/skeleton';
import * as Styled from './styles';

export default function SideContentSkeleton() {
  return (
    <Styled.Banners>
      <BannerSkeleton />
      <BannerSkeleton />
      <BannerSkeleton />
      <BannerSkeleton />
    </Styled.Banners>
  );
}

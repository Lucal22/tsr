import React from 'react';
import * as Styled from './styles';

export type SideContentProps = {
  children: React.ReactNode;
};

export default function SideContent({ children }: SideContentProps) {
  return <Styled.Banners>{children}</Styled.Banners>;
}

import React from 'react';
import * as Styled from './styles';

export type ContainerProps = {
  children: React.ReactNode;
  width: 'xSmall' | 'small' | 'medium' | 'large';
  height?: string;
  position?: string;
};

export default function Container({
  children,
  width = 'large',
  height = '100%',
}: ContainerProps) {
  return (
    <Styled.Container width={width} height={height}>
      {children}
    </Styled.Container>
  );
}

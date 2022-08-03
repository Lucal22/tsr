import React from 'react';
import Container from '../Container';
import Heading from '../Heading';
import * as Styled from './styles';
//import Switch from 'react-switch';

export type HeaderProps = {
  children: React.ReactNode;
};

export default function Header() {
  return (
    <Styled.Header>
      <Container width={'large'} height={'10rem'}>
        <Heading combo={true}>Building tsr</Heading>
      </Container>
    </Styled.Header>
  );
}

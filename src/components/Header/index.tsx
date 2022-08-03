import React from 'react';
import Container from '../Container';
//import Heading from '../Heading';
import * as Styled from './styles';
//import Switch from 'react-switch';
import { img } from '../../assets/index';
import Image from 'next/image';
import Nav from '../Nav';

export type HeaderProps = {
  children: React.ReactNode;
};

export default function Header() {
  return (
    <Styled.Header>
      <Container width={'large'}>
        <Styled.Flex>
          <Styled.Logo href="/">
            <Image src={img.logo} width="332px" height="78px" />
          </Styled.Logo>
          <Nav />
        </Styled.Flex>
      </Container>
    </Styled.Header>
  );
}

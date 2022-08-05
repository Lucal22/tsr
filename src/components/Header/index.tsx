import React from 'react';
import Container from '../Container';
//import Heading from '../Heading';
import * as Styled from './styles';
import { img } from '../../assets/index';
import Image from 'next/image';
import Nav from '../Nav';

export type HeaderProps = {
  handleTheme: () => void;
};

export default function Header({ handleTheme }: HeaderProps) {
  return (
    <Styled.Header>
      <Container width={'large'} position="relative">
        <Styled.Flex>
          <Styled.Logo href="/">
            <Image src={img.logo} width="332px" height="78px" />
          </Styled.Logo>
          <Nav handleTheme={handleTheme} />
        </Styled.Flex>
      </Container>
    </Styled.Header>
  );
}

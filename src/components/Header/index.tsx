import React from 'react';
import Container from '../Container';
//import Heading from '../Heading';
import * as Styled from './styles';
import { img } from '../../assets/index';
import Nav from '../Nav';
import Images from '../Images';

export type HeaderProps = {
  handleTheme: () => void;
};

export default function Header({ handleTheme }: HeaderProps) {
  return (
    <Styled.Header>
      <Container width={'large'}>
        <Styled.Flex>
          <Styled.Logo>
            <Images
              link={'/'}
              src={img.logo}
              alt={'Website logo'}
              width="332px"
              height="78px"
            />
          </Styled.Logo>
          <Nav handleTheme={handleTheme} />
        </Styled.Flex>
      </Container>
    </Styled.Header>
  );
}

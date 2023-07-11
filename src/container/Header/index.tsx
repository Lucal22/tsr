import React from 'react';
import Container from '../../components/Container';
import * as Styled from './styles';
import { img } from '../../assets/index';
import Nav from './components/Nav';
import Images from '../../components/Images';

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

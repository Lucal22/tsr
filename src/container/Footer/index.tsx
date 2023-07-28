import React from 'react';
import Container from '../../components/Container';
import Links from '../../components/Links';
import * as Styled from './styles';
import { img } from '../../assets';
import list from './links';
import Images from '../../components/Images';

//export type FooterProps = {};

export default function Footer() {
  return (
    <Styled.Container>
      <Container width={'large'}>
        <Styled.Grid>
          <Styled.Thumbnail>
            <Images link={'/'} src={img.footer} alt="Website Logo" />
          </Styled.Thumbnail>
          <Styled.About>
            <p>SOBRE</p>
            <Styled.Topics>
              {list[0].map((item) => {
                return (
                  <li key={item.children}>
                    <Links link={item.link} newTab={item.newTab}>
                      {item.children}
                    </Links>
                  </li>
                );
              })}
            </Styled.Topics>
          </Styled.About>
          <Styled.Media>
            <p>MEDIA SOCIAIS</p>
            <Styled.Topics>
              {list[1].map((item) => {
                return (
                  <li key={item.children}>
                    <Links link={item.link} newTab={item.newTab}>
                      {item.children}
                    </Links>
                  </li>
                );
              })}
            </Styled.Topics>
          </Styled.Media>
          <Styled.Contact>
            <p>CONTATO</p>
            <Styled.Topics>
              {list[2].map((item) => {
                return (
                  <li key={item.children}>
                    <Links link={item.link} newTab={item.newTab}>
                      {item.children}
                    </Links>
                  </li>
                );
              })}
            </Styled.Topics>
          </Styled.Contact>
        </Styled.Grid>
        <Styled.Copyright>
          <p>Copyright</p>
          <p>{'Feito por Lucal :)'}</p>
        </Styled.Copyright>
      </Container>
    </Styled.Container>
  );
}
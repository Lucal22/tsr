import React from 'react';
import Container from '../../components/Container';
import Links from '../../components/Links';
import * as Styled from './styles';
import { img } from '../../assets';
import list from './links';
import Images from '../../components/Images';

export default function Footer() {
  const today = new Date();
  const year = today.getFullYear();

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
              <li>
                <Links link="/about">O site</Links>
              </li>
            </Styled.Topics>
          </Styled.About>
          <Styled.Media>
            <p>MEDIA SOCIAIS</p>
            <Styled.Topics>
              {list[0].map((item) => {
                return (
                  <li key={item.children}>
                    <a href={item.link} target={'_blank'} rel={'noreferrer'}>
                      {item.children}
                    </a>
                  </li>
                );
              })}
            </Styled.Topics>
          </Styled.Media>
          <Styled.Contact>
            <p>CONTATO</p>
            <Styled.Topics>
              <li>
                <Links link={'/about'}>Parceria</Links>
              </li>
              <li>
                <a
                  href={'https://discord.gg/Wtfn47aBWW'}
                  target={'_blank'}
                  rel={'noreferrer'}
                >
                  Discord
                </a>
              </li>
            </Styled.Topics>
          </Styled.Contact>
        </Styled.Grid>
        <Styled.Copyright>
          <p>Copyright © {year}</p>
          <p>
            Feito por{' '}
            <a
              href={'https://github.com/Lucal22'}
              target={'_blank'}
              rel="noreferrer"
            >
              Lucal
            </a>
          </p>
        </Styled.Copyright>
      </Container>
    </Styled.Container>
  );
}

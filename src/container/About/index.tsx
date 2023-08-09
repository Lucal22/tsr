import { SideContentTypes } from '../../Types/post';
import Container from '../../components/Container';
import Grid from '../../components/Grid';
import SideContent from '../../components/SideContent';
import { img } from '../../assets';
import Image from 'next/image';

import * as Styled from './styles';

export default function About({ mount, letter }: SideContentTypes) {
  return (
    <Styled.Container>
      <Container width={'large'}>
        <Styled.Content>
          <Grid>
            <Styled.Post>
              <h1>SOBRE O SITE</h1>

              <Styled.Description>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Suscipit cum, sed accusantium aspernatur beatae tenetur
                  similique iste. Dicta laudantium in aliquam dolore nihil,
                  facilis minus ex pariatur repellat, ipsum iure!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  natus iure deleniti illo veritatis cupiditate amet unde
                  repellendus eveniet dolores expedita adipisci sapiente nam
                  voluptas dolorem alias, quas dolore animi?
                </p>
              </Styled.Description>
              <Image
                width={800}
                height={500}
                src={img.aboutBanner}
                alt={'Imagem ffxiv'}
              />
              <h2>CONTATO E REDES SOCIAIS</h2>
              <Styled.Description>
                <p>Email: thescionsreportbrasil@gmail.com</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  natus iure deleniti illo veritatis cupiditate amet unde
                  repellendus eveniet dolores expedita adipisci sapiente nam
                  voluptas dolorem alias, quas dolore animi?
                </p>
              </Styled.Description>
            </Styled.Post>
            <SideContent mount={mount} letter={letter} />
          </Grid>
        </Styled.Content>
      </Container>
    </Styled.Container>
  );
}

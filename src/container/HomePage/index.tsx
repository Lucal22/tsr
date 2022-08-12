import React from 'react';
import AdBanner from '../../components/AdBanner';
import Container from '../../components/Container';
import Grid from '../../components/Grid';
import MainPost from '../../components/MainPost';
import * as Styled from './styles';

import { img } from '../../assets';

export default function HomePage() {
  return (
    <Styled.Container>
      <AdBanner />
      <Container width={'large'}>
        <Styled.Content>
          <Grid>
            <Styled.Posts>
              <MainPost
                image={img.main}
                titleSlug={'lul'}
                categorySlug={'endwalker'}
                title={'Teste de heading'}
              />
            </Styled.Posts>
            <div>
              {' '}
              <h1>Hello</h1>
            </div>
          </Grid>
        </Styled.Content>
      </Container>
    </Styled.Container>
  );
}

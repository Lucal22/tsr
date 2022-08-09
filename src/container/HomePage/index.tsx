import React from 'react';
import AdBanner from '../../components/AdBanner';
import Container from '../../components/Container';
import Grid from '../../components/Grid';
import * as Styled from './styles';

export default function HomePage() {
  return (
    <Styled.Container>
      <AdBanner />
      <Container width={'large'}>
        <Styled.Content>
          <Grid>
            <div>
              {' '}
              <h1>Olá</h1>
            </div>
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

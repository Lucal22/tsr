import React from 'react';
import AdBanner from '../../components/AdBanner';
import Container from '../../components/Container';
import Grid from '../../components/Grid';
import MainPost from '../../components/MainPost';
import * as Styled from './styles';

import { img } from '../../assets';
import PostCard from '../../components/PostCard';

export default function HomePage() {
  return (
    <Styled.Container>
      <AdBanner />
      <Container width={'large'}>
        <Styled.Content>
          <Styled.Flex>
            <MainPost
              image={img.main}
              titleSlug={'lul'}
              categorySlug={'endwalker'}
              title={'Teste de heading'}
              category={'Endwalker'}
            />
            <MainPost
              image={img.main}
              titleSlug={'lul'}
              categorySlug={'endwalker'}
              title={'Teste de heading'}
              category={'Endwalker'}
            />
          </Styled.Flex>
          <Grid>
            <Styled.Posts>
              <PostCard />
              <PostCard />
              <PostCard />
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

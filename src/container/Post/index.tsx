import React from 'react';
import Container from '../../components/Container';
import Grid from '../../components/Grid';
import SideContent from '../../components/SideContent';
import { PostData, SideContentTypes } from '../../Types/post';
import * as Styled from './styles';

type PostPageProps = SideContentTypes & {
  post: PostData;
};

export default function Post({ post, mount, letter }: PostPageProps) {
  return (
    <Styled.Container>
      <Container width={'large'}>
        <Styled.Content>
          <Grid>
            <div>
              <h1>{post.title}</h1>
              <p>{post.content}</p>
            </div>
            <SideContent mount={mount} letter={letter} />
          </Grid>
        </Styled.Content>
      </Container>
    </Styled.Container>
  );
}

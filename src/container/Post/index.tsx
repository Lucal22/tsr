import React from 'react';
import Container from '../../components/Container';
import Details from '../../components/Details';
import Grid from '../../components/Grid';
import Images from '../../components/Images';
import SideContent from '../../components/SideContent';
import { PostData, SideContentTypes } from '../../Types/post';
import * as Styled from './styles';
import Links from '../../components/Links';
import Comments from '../../components/Comments';

type PostPageProps = SideContentTypes & {
  post: PostData;
};

export default function Post({ post, mount, letter }: PostPageProps) {
  return (
    <Styled.Container>
      <Container width={'large'}>
        <Styled.Content>
          <Grid>
            <Styled.Post>
              <Styled.PostHeader>
                <Styled.Title categorySlug={post.category.data.attributes.slug}>
                  {post.title}
                </Styled.Title>
                <Details
                  categorySlug={post.category.data.attributes.slug}
                  date={post.publishedAt}
                  author={post.author.data.attributes.name}
                  category={post.category.data.attributes.name}
                  authorSlug={post.author.data.attributes.slug}
                  addCategory={true}
                />
                <Styled.TagSection>
                  <Styled.PostTag>
                    <Links
                      link={`/categories/${post.tag.data.attributes.slug}/1`}
                    >
                      {post.tag.data.attributes.name}
                    </Links>
                  </Styled.PostTag>
                </Styled.TagSection>
              </Styled.PostHeader>
              <Styled.PostImage>
                <Images
                  width={800}
                  height={500}
                  src={post.image.data.attributes.url}
                  alt={post.image.data.attributes.alternativeText}
                />
              </Styled.PostImage>

              <Styled.PostContent
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              <Comments slug={post.slug} title={post.title} />
            </Styled.Post>
            <SideContent mount={mount} letter={letter} />
          </Grid>
        </Styled.Content>
      </Container>
    </Styled.Container>
  );
}

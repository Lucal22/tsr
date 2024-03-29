import { gql } from 'graphql-request';
import { GRAPHQL_POST_FRAGMENTS } from './fragments';

export const GRAPHQL_POST_QUERY = gql`
  ${GRAPHQL_POST_FRAGMENTS}

  query GET_POSTS(
    $categorySlug: StringFilterInput
    $postSlug: StringFilterInput
    $postSearch: StringFilterInput
    $authorSlug: StringFilterInput
    $tagSlug: StringFilterInput
    $sort: [String] = "publishedAt:desc"
    $start: Int = 0
    $limit: Int = 20
  ) {
    posts(
      pagination: { start: $start, limit: $limit }
      sort: $sort
      filters: {
        slug: $postSlug
        or: [
          { title: $postSearch }
          { description: $postSearch }
          { slug: $postSearch }
        ]
        category: { slug: $categorySlug }
        author: { slug: $authorSlug }
        tag: { slug: $tagSlug }
      }
    ) {
      data {
        ...postContent
      }
    }
  }
`;

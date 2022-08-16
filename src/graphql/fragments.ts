import { gql } from 'graphql-request';

export const GRAPHQL_POST_FRAGMENTS = gql`
  fragment image on UploadFileEntityResponse {
    data {
      attributes {
        alternativeText
        formats
      }
    }
  }

  fragment tagPostContent on Tag {
    name
    slug
  }

  fragment authorPostCotent on Author {
    name
    description
    slug
  }

  fragment categoryPostContent on Category {
    name
    slug
  }

  fragment postContent on PostEntity {
    id
    attributes {
      title
      slug
      description
      content
      publishedAt
      updatedAt
      author {
        data {
          attributes {
            ...authorPostCotent
          }
        }
      }
      category {
        data {
          attributes {
            ...categoryPostContent
          }
        }
      }
      tags {
        data {
          id
          attributes {
            ...tagPostContent
          }
        }
      }
      image {
        ...image
      }
    }
  }
`;

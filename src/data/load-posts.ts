import { request } from 'graphql-request';
import { GRAPHQL_URL } from '../config/app-config';
import { GRAPHQL_POST_QUERY } from '../graphql/queries';
import { FullPost } from '../Types/post';

export type EqualVariables = {
  eq: string;
};

export type ContainVariables = {
  contains: string;
};

export type LoadPostVariables = {
  categorySlug?: EqualVariables;
  postSlug?: EqualVariables;
  postSearch?: ContainVariables;
  authorSlug?: EqualVariables;
  sort?: string;
  start?: number;
  limit?: number;
};

export type RequestResponse = {
  posts: FullPost;
};

export const loadPosts = async (
  variables: LoadPostVariables = {},
): Promise<RequestResponse> => {
  const defaultVariables: LoadPostVariables = {
    sort: 'publishedAt:desc',
    start: 0,
    limit: 20,
  };
  const data = await request(GRAPHQL_URL, GRAPHQL_POST_QUERY, {
    ...defaultVariables,
    ...variables,
  });
  return data;
};

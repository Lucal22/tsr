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
  tagSlug?: EqualVariables;
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

export const defaultLoadPostVariables: LoadPostVariables = {
  sort: 'publishedAt:desc',
  start: 0,
};

export const loadPosts = async (
  variables: LoadPostVariables = {},
): Promise<RequestResponse> => {
  const data = await request(GRAPHQL_URL, GRAPHQL_POST_QUERY, {
    ...defaultLoadPostVariables,
    ...variables,
  });
  return data;
};

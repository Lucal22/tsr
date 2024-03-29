export type PostID = number;

export type ImageSimplifiedFormat = {
  data: {
    attributes: {
      alternativeText: string;
      url: string;
      height: number;
      width: number;
      formats: {
        thumbnail: PostCoverFormat;
        small: PostCoverFormat;
        medium: PostCoverFormat;
        large: PostCoverFormat;
      };
    };
  };
};

export type Tag = {
  id: PostID;
  attributes: {
    name: string;
    description: string;
    slug: string;
    image: ImageSimplifiedFormat;
  };
};

export type PostTag = {
  data: Tag;
};

export type PostAuthor = {
  data: {
    id: PostID;
    attributes: {
      name: string;
      slug: string;
      description: string;
      server: string;
      job: string;
      ttlink: string;
      ttname: string;
      ffnickname: string;
      image: ImageSimplifiedFormat;
    };
  };
};

export type Category = {
  id: PostID;
  attributes: {
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    image: ImageSimplifiedFormat;
    slug:
      | 'dawntrail'
      | 'endwalker'
      | 'shadowbringers'
      | 'stormblood'
      | 'heavensward'
      | 'arr'
      | 'geral';
  };
};

export type PostCategory = {
  data: Category;
};

export type PostCreatedBy = {
  id: PostID;
  firstname: string;
  lastname: string;
  username: null;
};

export type PostCoverFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
};

export type PostCover = PostCoverFormat & {
  data: {
    attributes: {
      id: PostID;
      alternativeText: string;
      url: string;
      height: number;
      width: number;
      caption: string;
      previewUrl: null;
      provider: string;
      createdAt: string;
      updatedAt: string;
      formats: {
        thumbnail: PostCoverFormat;
        small: PostCoverFormat;
        medium: PostCoverFormat;
        large: PostCoverFormat;
      };
    };
  };
};

export type PostData = {
  id: PostID;
  title: string;
  content: string;
  slug: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  author: PostAuthor;
  category: PostCategory;
  tag: PostTag;
  image: PostCover;
  carousels: PostCover; //corrigir
};

export type PostObject = {
  id: PostID;
  attributes: PostData;
};

export type FullPost = {
  data: Array<PostObject>;
  meta: object;
};

export type SinglePost = {
  id: PostID;
  attributes: PostData;
  meta: object;
};

export type PaginationType = {
  posts: FullPost;
  filter?: boolean;
  expansion?: boolean;
};

export type SideContentTypes = {
  mount: PostObject;
  letter: PostObject;
};

export type PageProps = PaginationType & SideContentTypes;

export type PostPageTypes = SideContentTypes & {
  posts: FullPost;
};

export type AttributesType = SideContentTypes & {
  attributes: Tag[] | Category[];
};

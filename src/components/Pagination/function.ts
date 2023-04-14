import { PostObject } from '../../Types/post';

export default function postValue(
  tag: string,
  expansion: string,
  posts: PostObject[],
) {
  if (expansion === 'all' && tag === 'all') {
    const postArray = posts;
    return postArray;
  } else if (expansion === 'all' && tag !== 'all') {
    const postArray = posts.filter(
      (filter) => filter.attributes.tag.data.attributes.slug == tag,
    );
    return postArray;
  } else if (expansion !== 'all' && tag === 'all') {
    const postArray = posts.filter(
      (filter) => filter.attributes.category.data.attributes.slug == expansion,
    );
    return postArray;
  } else {
    const postArray = posts.filter(
      (filter) =>
        filter.attributes.category.data.attributes.slug == expansion &&
        filter.attributes.tag.data.attributes.slug == tag,
    );
    return postArray;
  }
}

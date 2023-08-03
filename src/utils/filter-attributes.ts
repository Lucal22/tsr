import { FullPost } from '../Types/post';

export function filterAttributes(posts: FullPost, type: 'category' | 'tag') {
  const items = posts.data.map((article) =>
    type === 'category'
      ? article.attributes.category.data
      : article.attributes.tag.data,
  );
  const uniqueItens = [];
  const categoryIdsSet = new Set();

  for (const item of items) {
    if (!categoryIdsSet.has(item.id)) {
      categoryIdsSet.add(item.id);
      uniqueItens.push(item);
    }
  }
  const sortedItens = uniqueItens.sort((a, b) => a.id - b.id);
  return sortedItens;
}

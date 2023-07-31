import type { GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Skeleton from '../../container/Posts/skeleton';
import { loadPosts, RequestResponse } from '../../data/load-posts';
import { PostPageTypes } from '../../Types/post';
import Posts from '../../container/Posts';

export default function ExpansionPostPage({
  posts,
  mount,
  letter,
}: PostPageTypes) {
  const router = useRouter();
  if (router.isFallback) {
    return <Skeleton />;
  }
  return (
    <div>
      <Head>
        <title>
          The Scions Report -{' '}
          {posts.data[0].attributes.category.data.attributes.name}
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Posts posts={posts} mount={mount} letter={letter} filter={false} />
    </div>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<RequestResponse> = async (ctx) => {
  if (!ctx.params) {
    return {
      notFound: true,
    };
  }

  let data = null;
  try {
    data = await loadPosts({
      categorySlug: {
        eq: ctx.params.slug as string,
      },
    });
  } catch (e) {
    data = null;
  }

  let mount = null;
  try {
    mount = await loadPosts({
      tagSlug: {
        eq: 'mounts' as string,
      },
    });
  } catch (e) {
    mount = null;
  }

  let letter = null;
  try {
    letter = await loadPosts({
      tagSlug: {
        eq: 'live-letter' as string,
      },
    });
  } catch (e) {
    letter = null;
  }
  if (
    !data ||
    !letter ||
    !mount ||
    !data.posts ||
    !mount.posts ||
    !data.posts.data.length ||
    !mount.posts.data.length
  ) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      posts: data.posts,
      mount: mount.posts.data[0],
      letter: letter.posts.data[0],
    },
    revalidate: 24 * 60 * 60,
  };
};

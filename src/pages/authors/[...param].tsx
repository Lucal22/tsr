import type { GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Authors from '../../container/Authors';
import AuthorSkeleton from '../../container/Authors/skeleton';
import { loadPosts, RequestResponse } from '../../data/load-posts';
import { PageProps } from '../../Types/post';

export default function Author({
  posts,
  mount,
  letter,
  author,
  nextPage,
  previousPage,
  postsPerPage,
  numberOfPosts,
}: PageProps) {
  const router = useRouter();
  if (router.isFallback) {
    return <AuthorSkeleton />;
  }
  return (
    <div>
      <Head>
        <title>The Scions Report</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Authors
        numberOfPosts={numberOfPosts}
        nextPage={nextPage}
        previousPage={previousPage}
        author={author}
        posts={posts}
        mount={mount}
        letter={letter}
        postsPerPage={postsPerPage}
      />
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
  if (!ctx.params || !ctx.params.param) {
    return {
      notFound: true,
    };
  }

  const author = ctx.params.param[0];
  const page = Number(ctx.params.param[1]);
  const limit = 5;
  const start = (page - 1) * limit;
  const nextPage = page + 1;
  const previousPage = page - 1;

  let data = null;
  try {
    data = await loadPosts({
      authorSlug: {
        eq: ctx.params.param[0] as string,
      },
      start: start,
      limit: limit,
    });
  } catch (e) {
    data = null;
  }

  let numberOfPosts = null;
  try {
    numberOfPosts = await loadPosts({
      authorSlug: {
        eq: ctx.params.param[0] as string,
      },
    });
  } catch (e) {
    numberOfPosts = null;
  }

  let mount = null;
  try {
    mount = await loadPosts({
      tagSlug: {
        contains: 'mount' as string,
      },
    });
  } catch (e) {
    mount = null;
  }

  let letter = null;
  try {
    letter = await loadPosts({
      tagSlug: {
        contains: 'live-letter' as string,
      },
    });
  } catch (e) {
    letter = null;
  }
  if (
    !data ||
    !numberOfPosts ||
    !letter ||
    !mount ||
    !data.posts ||
    !mount.posts ||
    !data.posts.data.length ||
    !numberOfPosts.posts.data.length ||
    !mount.posts.data.length
  ) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      numberOfPosts: numberOfPosts.posts.data.length,
      posts: data.posts,
      mount: mount.posts.data[0],
      letter: letter.posts.data[0],
      nextPage: nextPage,
      previousPage: previousPage,
      postsPerPage: limit,
      author: author,
    },
    revalidate: 24 * 60 * 60,
  };
};

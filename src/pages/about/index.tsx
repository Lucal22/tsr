import type { GetStaticProps } from 'next';
import Head from 'next/head';
import { loadPosts, RequestResponse } from '../../data/load-posts';
import { PageProps } from '../../Types/post';

export default function Author({ posts, mount, letter }: PageProps) {
  return (
    <div>
      <Head>
        <title>The Scions Report</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <HomePage posts={posts} mount={mount} letter={letter} /> */}
    </div>
  );
}

export const getStaticProps: GetStaticProps<RequestResponse> = async () => {
  let data = null;

  try {
    data = await loadPosts();
  } catch (e) {
    data = null;
  }

  let mount = null;
  try {
    mount = await loadPosts({
      tagSlug: {
        eq: 'mount' as string,
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

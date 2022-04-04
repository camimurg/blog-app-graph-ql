import React from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';
import { Categories, PostCard, PostWidget} from '../components/index';
import { getPosts } from '../services';
import type { PostNode } from '../types';

const Home = ({ 
  posts 
}: { 
  posts: PostNode[]
}): React.ReactElement => {
  return (
    <div>
      <Head>
        <title>CMS BLOG</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1">
            {posts.map((post, index) => (
              <PostCard key={index} post={post.node} />
            ))}
          </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts: Record<string, unknown>[] = (await getPosts()) || [];
  return {
    props: { posts },
  }
}

export default Home

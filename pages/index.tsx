import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Categories, PostCard, PostWidget} from '../components/index';
import { getPosts } from '../services'

export interface PostInterface {
  title: string,
  excerpt: string,
  featuredImage: {
    url: string,
  },
  slug: string,
  author: {
    name: string,
    photo: {
      url: string,
    },
  },
  createdAt: Date,
}

const Home: NextPage = ({ posts }) => {
  
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

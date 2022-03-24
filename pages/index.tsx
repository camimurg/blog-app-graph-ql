import type { NextPage } from 'next'
import Head from 'next/head'
import { Categories, PostCard, PostWidget} from '../components/index'

export interface PostInterface {
  title: string,
  excerpt: string
}

const posts: PostInterface[] = [
  { title: 'React Testing', excerpt: 'Learn react testing'},
  { title: 'React with Tailwind', excerpt: 'Learn react with tailwind'},
];

const Home: NextPage = (): React.ReactElement => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>CMS BLOG</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1' >
          {posts.map((post) => <PostCard post={post} key={post.title}/> )}
        </div>

        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>

      </div>
      </main>
    </div>
  )
}

export default Home

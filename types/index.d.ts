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

export type PostNode = {
  node: PostInterface
}

export interface Category {
  name: string,
  slug: string,
}

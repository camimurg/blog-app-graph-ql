export type PostNode = {
  node: PostInterface
}

export type Author = {
  id: string,
  name: string,
  bio: string,
  photo: {
    url: string,
  }
}

export interface Category {
  name: string,
  slug: string,
}

export interface PostInterface {
  title: string,
  excerpt: string,
  featuredImage: {
    url: string,
  },
  slug: string,
  author: Author,
  createdAt: Date,
  categories: Category[]
  content: {
    raw: {
      children: {
        type: string,
        children: {
            text: string
        }[],
      }[],
    },
  },
}

export interface contentObj {
  bold?: string,
  italic?: string,
  underline?: string,
  title?: string,
  height?: number,
  width?: number,
  src?: string,
}

export type contentType = 'heading-three' | 'paragraph' | 'heading-four' | 'image'

export type DataComment = {
  name: string,
  email: string,
  commment: string,
  slug: string
}

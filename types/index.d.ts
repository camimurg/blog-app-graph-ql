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

export type PostNode = {
  node: PostInterface
}

export interface Category {
  name: string,
  slug: string,
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

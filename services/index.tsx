import { request, gql } from 'graphql-request';
import { DataComment } from '../types';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  if (!graphqlAPI) return
  const result = await request(graphqlAPI, query)

  return result.postsConnection.edges;
};

export const getPostDetails = async (slug: string) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }){
        author {
          bio
          name
          id
          photo {
            url
          }
        }
        createdAt
        slug
        title
        excerpt
        featuredImage {
          url
        }
        categories {
          name
          slug
        }
        content {
          raw
        }
      }
    }
  `;

  if (!graphqlAPI) return
  const result = await request(graphqlAPI, query, { slug })

  return result.post;
};

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(
        orderBy: createdAt_ASC
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `
  if (!graphqlAPI) return
  const result = await request(graphqlAPI, query)

  return result.posts
}

export const getSimilarPosts = async (categories: string[], slug: string) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories:[String!]) {
      posts(
        where: {
          slug_not: $slug, AND: {
            categories_some: {
              slug_in: $categories
            }
          }
        }
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `
  if (!graphqlAPI) return
  const result = await request(graphqlAPI, query, { categories, slug })

  return result.posts
}

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
      }
    }
  `
  if (!graphqlAPI) return
  const result = await request(graphqlAPI, query)

  return result.categories
}

export const submitComment = async (obj: DataComment) => {

  const result = await fetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj)
  });

  return result.json();
}

export const getComments = async (slug: string) => {
  const query = gql`
    query GetComments($slug: String!) {
      comments(where: { post: { slug: $slug } } ) {
        name
        createdAt
        comment
      }
    }
  `
  if (!graphqlAPI) return
  const result = await request(graphqlAPI, query, { slug })

  return result.comments
}

export const getCategoryPost = async (slug: string) => {
  const query = gql`
    query GetCategoryPost($slug: String!) {
      postsConnection(where: {categories_some: {slug: $slug}}) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;
  
  if (!graphqlAPI) return
  const result = await request(graphqlAPI, query, { slug });

  return result.postsConnection.edges;
};

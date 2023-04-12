import { gql } from 'apollo-server-core';
export const typeDefs = gql`
  type User {
    email: String!
    password: String!
    isActivated: Boolean
    activationLink: String
  }
  type Token {
    user: User
    token: String!
  }
  input ArticleInput {
  title: String!
  author: String
  description: String
  url: String!
  urlToImage: String
  publishedAt: String
  content: String
  }
  type ArticleUser {
    user: User
    articles: [Article]
  }
  type Article {
    title: String!
    author: String
    description: String
    url: String!
    urlToImage: String
    publishedAt: String
    content: String
  }
  type RefreshResponse {
    refreshToken: Token
    accessToken: Token
    user: User
  }
  type Query {
    user: User
    favourites: ArticleUser
    logout: Boolean
    refresh: RefreshResponse
    latestNews(query: String, language: String, page: String, pageSize: String): [Article]
  }
  type Mutation {
    signup(email: String!, password: String!): Token
    login(email: String!, password: String!): Token
    activate(link: String!): Boolean
    addFavourite(article: ArticleInput): Boolean
    removeFavourite(title: String!): Boolean
  }
  
`;


const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    email: String!
    password: String!
    isActivated: Boolean
    activationLink: String
  }
  type Token {
    user : User
    token: String!
  }
  type Article {
    User: User
    title: String!,
    author: String,
    description: String,
    url: String!,
    urlToImage: String,
    publishedAt: String,
    content: String,
  }
  type Query {
    user: User
    getFavourites: [Article]
    logout: Boolean
    refresh: [Token, Token, User]
  }
  type Mutation {
      signup(email: String!, password: String!): Token
      login(email: String!, password: String!): Token
      activate(link: String!): Boolean
      latestNews(query: String, language: String, page: String, pageSize: String): [Article]
      addFavourite(article: Article): Boolean        
  }  
`;

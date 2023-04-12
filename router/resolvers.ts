import { UserController } from "../controllers/user-controller.js";
import { NewsController } from "../controllers/news-controller.js";
import { Context } from "../app.js";
const userController = new UserController();
const newsController = new NewsController();

interface logInOutArgs {
  email: string;
  password: string;
}
interface lastNewsQuery {
  query: string;
  language: string;
  page: string;
  pageSize: string;
}
interface User {
  email: String;
  password: String;
  isActivated: Boolean;
  activationLink: String;
}
interface Article {
  User: User;
  title: String;
  author: String;
  description: String;
  url: String;
  urlToImage: String;
  publishedAt: String;
  content: String;
}
export const resolvers = {
  Query: {
    user: (parent: any, args: any, context: Context, info: any) => {
      const token = context.jwtToken;
      if (!token) return;
      const user = userController.getUser(token);
      return user;
    },
    favourites: (parent: any, args: any, context: Context, info: any) => {
      const token = context.jwtToken;
      if (!token) return;
      const favourites = userController.getFavourites(token);
      return favourites;
    },
    logout: (parent: any, args: any, context: Context, info: any) => {
      const token = context.jwtToken;
      if (!token) return;
      return userController.logout(token);
    },
    refresh: (parent: any, args: any, context: Context, info: any) => {
      const token = context.jwtToken;
      if (!token) return;
      return userController.refresh(token);
    },
    latestNews: (
      _: any,
      { query, language, page, pageSize }: lastNewsQuery
    ) => {
      newsController.latestNews(query, language, page, pageSize);
    },
  },
  Mutation: {
    signup: (_: any, { email, password }: logInOutArgs) => {
      userController.signup(email, password);
    },
    login: (_: any, { email, password }: logInOutArgs) => {
      userController.login(email, password);
    },
    activate: (_: any, { link }: any) => {
      userController.activate(link);
    },
    addFavourite: (
      _: any,
      { article }: { article: Article },
      context: Context
    ) => {
      userController.addFavourite(article, context.jwtToken);
    },
    removeFavourite: (
      _: any,
      { title }: { title: string },
      context: Context
    ) => {
      userController.removeFavourite(title, context.jwtToken);
    },
  },
};

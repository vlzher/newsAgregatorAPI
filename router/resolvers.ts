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
      // const token = context.jwtToken;
      // if(!token) return;
      // const favourites  = userController.getFavourites(token);
      // return favourites;
      const article = {
        user: {
          email: "chuj",
          password: "chuj",
          isActivated: true,
          activationLink: "chuj",
        },
        articles: [
          {
            title: "Example Article",
            author: "Jane Smith",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            url: "http://example.com/article",
            urlToImage: "http://example.com/article/image.jpg",
            publishedAt: "2023-04-12T10:00:00.000Z",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod urna a tellus convallis lobortis. Proin et velit urna. Donec laoreet, velit id fringilla consectetur, lectus est porta dolor, vel aliquam mi urna nec nunc. Integer rhoncus quam vel arcu maximus luctus. Duis finibus mauris enim, ac sagittis eros feugiat sit amet. Morbi quis mauris non odio congue interdum vel et velit. Nullam at maximus tellus.",
          },
          {
            title: "Example Article",
            author: "Jane Smith",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            url: "http://example.com/article",
            urlToImage: "http://example.com/article/image.jpg",
            publishedAt: "2023-04-12T10:00:00.000Z",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod urna a tellus convallis lobortis. Proin et velit urna. Donec laoreet, velit id fringilla consectetur, lectus est porta dolor, vel aliquam mi urna nec nunc. Integer rhoncus quam vel arcu maximus luctus. Duis finibus mauris enim, ac sagittis eros feugiat sit amet. Morbi quis mauris non odio congue interdum vel et velit. Nullam at maximus tellus.",
          },
        ],
      };
      return article;
    },
    logout: (parent: any, args: any, context: Context, info: any) => {
      // const token = context.jwtToken;
      // if(!token) return;
      // return userController.logout(token);
      return false;
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
    addFavourite: (_: any, { article }: { article: Article }) => {
      userController.addFavourite(article);
    },
  },
};

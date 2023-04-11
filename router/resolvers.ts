import { UserController } from '../controllers/user-controller';
const userController = new UserController();
const resolvers = {
    Query: {
        user: (parent, args, contextValue, info) =>
            {

                userController.getUser();
                // return data from database having his JWT Token
            }
        ,
        getFavourites: (parent, args, contextValue, info) => ({
            // return data from database having his JWT Token
        }),
        logout: (parent, args, contextValue, info) => true,
        refresh: (parent, args, contextValue, info) => ({
            // logic for refreshing JWT Token
        }),
    },
    Mutation: {
        signup: (_, {email, password}) => ({
            user: {
                email,
                password,
                isActivated: false,
                activationLink: "https://example.com/activate",
            },
            token: "token"
        }),
        login: (_, {email, password}) => ({
            user: {
                email,
                password,
                isActivated: true,
                activationLink: null,
            },
            token: "token"
        }),
        activate: (_, {link}) => true,
        latestNews: (_, {query, language, page, pageSize}) => ([
            {
                User: null,
                title: "Example Article 3",
                author: "John Smith",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                url: "https://example.com/article-3",
                urlToImage: "https://example.com/article-3.jpg",
                publishedAt: "2023-04-11T11:30:00Z",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
                User: null,
                title: "Example Article 4",
                author: "Jane Doe",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                url: "https://example.com/article-4",
                urlToImage: "https://example.com/article-4.jpg
                publishedAt: "2023-04-11T12:00:00Z",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            }
        ]),
        addFavourite: (_, {article}) => true,
    }
};
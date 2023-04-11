import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import { typeDefs, resolvers } from './schema';

interface MyContext {
    token?: string;
}

const app = express();
const httpServer = http.createServer(app);
const server = new ApolloServer<MyContext>({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await server.start();

app.use(
    '/api',
    cors<cors.CorsRequest>(),
    bodyParser.json(),
    expressMiddleware(server, {
        context: async ({ req }) => ({ token: req.headers.token }),
    }),
);

await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log(`🚀 Server ready at http://localhost:4000/`);










































// import * as express from "express";
// import { graphqlHTTP } from 'express-router';
// import { mergedSchema as schema } from './schemes/mergedScheme';
// import {connectDB} from "./db/server";
// const app = express();
// connectDB();
// // make a jwt system with GraphQL and JWT
// app.use(
//     '/router',
//     graphqlHTTP({
//         schema,
//         graphiql:true,
//     })
// );

// app.listen({ port: 4001 }, () => {
//     console.log('Listening to port 4001');
// });


// const user =
//     new userScheme({ email: "fddffd", password: "fdfdf", jwt: "fdfdf"});
//
// user.save().then(r => console.log(r));

// const article
//     = new articleScheme({ title: "fdfdf", description: "fdfdf", url: "fdfdf", urlToImage: "fdfdf", publishedAt: "fdfdf", content: "fdfdf", author: "fdfdf",
//     source: "fdfdf"}).save().then(r => console.log(r));


// async function makeFavourite() {
//     const article = await articleScheme.find({title: "fdfdf"}).then(r => r[0]._id.toString());
//     const user = await userScheme.find({email: "fddffd"}).then(r =>  r[0]._id.toString());
//     console.log(article, user);
//     const favourites = new favouriteScheme({articleID: article, userID: user}).save().then(r => console.log(r));
// }
// makeFavourite();
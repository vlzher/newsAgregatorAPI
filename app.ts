import * as express from "express";
import { graphqlHTTP } from 'express-graphql';
import { mergedSchema as schema } from './schemes/mergedScheme';
import {connectDB} from "./db/server";
const app = express();
connectDB();
// make a jwt system with GraphQL and JWT
app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql:true,
    })
);

app.listen({ port: 4001 }, () => {
    console.log('Listening to port 4001');
});


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
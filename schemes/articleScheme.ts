import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull
} from 'graphql';
import {getNews} from "../api/api";
import {query, response} from "express";
const mockArticles: any[] = []

const Article = new GraphQLObjectType({
    name: 'Article',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLID) },
        title: { type: GraphQLNonNull(GraphQLString) },
        author: { type: GraphQLString },
        description: { type: GraphQLString },
        url: { type: GraphQLNonNull(GraphQLString) },
        urlToImage: { type: GraphQLString },
        publishedAt: { type: GraphQLString },
        content: { type: GraphQLString },
    }),
});

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            latestNews: {
                type: new GraphQLList(Article),
                args: {
                    query: { type: GraphQLString },
                    language: { type: GraphQLString },
                    page: { type: GraphQLString },
                    pageSize: { type: GraphQLString },
                },
                resolve: async (parent, args) => {
                    const { query, language, page, pageSize } = args;
                    return await getNews(query, language, page, pageSize);
                },
            },
        },
    }),
    types: [Article],
});

export { schema };
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const articleScheme = mongoose.model('Article', new Schema({
    title: String,
    author: String,
    description: String,
    url: String,
    urlToImage: String,
    publishedAt: String,
    content: String,
}));

export { articleScheme };
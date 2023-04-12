import mongoose from "mongoose";
import {getNews} from "../../api/api.js";
const Schema = mongoose.Schema;

const favouriteArticleScheme = mongoose.model('FavouriteArticle', new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    article: {type: Schema.Types.ObjectId, ref: 'Article'}
}));
export { favouriteArticleScheme };
// const favouriteArticle = new FavouriteArticle({
//     user: userId,
//     article: articleId
// });
// const favouriteArticles = await FavouriteArticle.find().populate('user').populate('article');

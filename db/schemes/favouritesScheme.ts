import mongoose from "mongoose";
const Schema = mongoose.Schema;

const favouriteScheme = mongoose.model('Favourite', new Schema({
    userID: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    articleID: {type: mongoose.Schema.Types.ObjectId, ref: 'Article'},
}));

export { favouriteScheme };
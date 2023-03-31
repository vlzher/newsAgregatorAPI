import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userScheme = mongoose.model('User', new Schema({
    email: String,
    password: String,
    jwt: String,
}));

export { userScheme };
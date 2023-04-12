import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userScheme = mongoose.model('User', new Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    isActivated: {type: Boolean, default: false},
    activationLink: {type: String},
}));

export { userScheme };
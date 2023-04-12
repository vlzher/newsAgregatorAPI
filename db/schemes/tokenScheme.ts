import mongoose, {Schema} from "mongoose";

const tokenScheme = mongoose.model('Token', new Schema({
    userID: {type: Schema.Types.ObjectId, ref: 'User'},
    token: {type: String, required: true},
}));
export { tokenScheme };
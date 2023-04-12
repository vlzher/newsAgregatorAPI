import {tokenScheme} from "../db/schemes/tokenScheme.js";
import {userScheme} from "../db/schemes/userScheme.js";

export class TokenService{
    async getUserByToken(token: string) {
        // @ts-ignore
        const userID =  await tokenScheme.findOne({token}).userID;
        // error no userID
        const user = await userScheme.findById(userID);
        // error no user with token
        return user;

    }
}
import {userScheme} from "../db/schemes/userScheme.js";
import bcrypt from "bcrypt";
import {UserDto} from "../dtos/UserDto.js";
import {TokenService} from "./token-service.js";
import {v4} from 'uuid';
const tokenService = new TokenService();
interface User{
    _id: string;
    email: string;
    password: string;
    isActivated: boolean;
    activationLink: string;
}
export class UserService{
    async login(email: string, password: string) {
        // @ts-ignore
        const user: User = userScheme.findOne({email})
        if(!user){
            // throw error
            return;
        }
        const isPassCorrect = await bcrypt.compare(password, user.password);
        if(!isPassCorrect){
            // throw error
            return;
        }
        const userDto = new UserDto(user);
        // generate token
        // save tokens to db
        // return tokens and dto
    }
    async signup(email: string, password: string) {
        // @ts-ignore
        const user: User = userScheme.findOne({email})
        if(!user){
            // throw error
            return;
        }
        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = v4();
        const userObject = await userScheme.create({email, password: hashPassword, activationLink});
        // send email
        // get tokens
        // return tokens and dto
    }
    async activate(activationLink: string) {
        const user = await userScheme.findOne({activationLink})
        if (!user) {
            // throw error
            return;
        }
        user.isActivated = true;
        await user.save();
    }
    async logout(refreshToken: string) {
        // remove token from db
        return true;
    }
    async refresh(refreshToken: string) {
        // validate token
        // check if token is in db
        // generate new tokens
        // save new token to db
        // get user by token
        // return dto and tokens
    }
    async getUsers() {
        // get all users
        const users = await userScheme.find();
        return users;
    }
    async getUser(token: string) {
        const user = tokenService.getUserByToken(token);
        return user;
    }
    async getFavourites(token: string) {
        // @ts-ignore
        const favourites = tokenService.getUserByToken(token).then(user => user.favourites);
        return favourites;
    }
}
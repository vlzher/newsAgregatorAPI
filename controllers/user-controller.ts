import {UserService} from "../services/user-service.js";

const userService  =  new UserService();
export class UserController {
    async getUser(token: string) {
        return userService.getUser(token);
    }

    async getFavourites(token: string) {
        return userService.getFavourites(token);
    }

    async logout(token: string) {
        return userService.logout(token);
    }

    async refresh(token: string) {
        return userService.refresh(token);
    }

    async signup(email: string, password: string) {
        // delete token access from cookie
        return userService.signup(email, password);
    }

    async login(email: string, password: string) {
        const data =  userService.login(email, password);
        // set token access token to cookie
        return data;
    }

    async activate(link: string) {
        const isActivated = await userService.activate(link)
        return isActivated;
    }

    async addFavourite(article: any, token: string | undefined) {
        const isAdded = await userService.addFavourite(article,token);
        return isAdded;
    }
    async removeFavourite(title: any, token: string | undefined) {
        const isRemoved = await userService.removeFavourite(title,token);
        return isRemoved;
    }

}
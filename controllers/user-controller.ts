export class UserController {
    async getUser(token: string) {
        // return data from database having his JWT Token
    }

    async getFavourites(token: string) {
        // return data from database having his JWT Token
    }

    async logout(token: string) {
        return true;
    }

    async refresh(token: string) {
        // logic for refreshing JWT Token
    }

    async signup(email: string, password: string) {

    }

    async login(email: string, password: string) {

    }

    async activate(link: string) {
        return true;
    }

    async latestNews(query: string, language: string, page: number, pageSize: number) {

    }

    async addFavourite(article: any) {

    }

}
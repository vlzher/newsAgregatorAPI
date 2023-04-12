import {NewsService} from "../services/news-service.js";

const newsService = new NewsService();

export class NewsController{
    async latestNews(query: string, language:string='en', page:number= 1, pageSize:number=10) {
        const news = await newsService.getNews(query, language, page, pageSize);
        return news;
    }
}

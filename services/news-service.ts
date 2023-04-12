// @ts-ignore
import * as NewsAPI from 'newsapi';

interface IArticle {
    source: any;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}
interface IResponse {
    status: string;
    totalResults: number;
    articles: [IArticle];
}
export class NewsService {
    private newsApi;
    constructor() {
        const api_key = process.env.NEWS_API_KEY;
        this.newsApi = new NewsAPI(api_key);
    }
    public getNews(query: string, language:string, page:number, pageSize:number) {
        return this.newsApi.v2.everything({
            q: query,
            language: language,
            page: page,
            pageSize: pageSize
        }).then((response: IResponse) => response.articles);
    }
}


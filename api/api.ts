// @ts-ignore
import * as NewsAPI from 'newsapi';
const API_KEY = "97d791a77a434a01a29c1d33212ac786";
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

const newsapi = new NewsAPI(API_KEY);

export function getNews(query: string, language:string='en', page:number= 1, pageSize:number=10) {
    return newsapi.v2.everything({
        q: query,
        language: language,
        page: page,
        pageSize: pageSize
    }).then((response: IResponse) => response.articles);
}


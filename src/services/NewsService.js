import axios from 'axios'
import {API_KEY, PAGE_SIZE, API_URL} from "../constants";

class NewsService
{
    static getTopNews(page, category = null) {
        return new Promise( (resolve, reject) => {
            let url = `${API_URL}/top-headlines?apiKey=${API_KEY}&language=en&page=${page}&pageSize=${PAGE_SIZE}&sortBy=popularity`;
            if (category !== null) {
                url += `&category=${category}`;
            }
            axios.get(url)
                .then( response => {
                    resolve(response.data);
                })
                .catch( error => {
                    reject(error);
                });
        });
    }

    static isFavorite(newsList, url)
    {
        return newsList.filter(el => el.url === url).length > 0;
    }
}

export default NewsService;

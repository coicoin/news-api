import type { NewsArticles } from '../view/news/news';
import type { NewsSources } from '../view/sources/sources';

export type Options = {
    apiKey?: string;
    [key: string]: string;
};

export type LoaderUrl = {
    baseLink: string;
    endpoint: string;
    options: Options;
};

type ResponseData = JSON | NewsSources | NewsArticles;

class Loader {
    private baseLink: string;
    private options: Options;
    constructor(baseLink: string, options: Options) {
        this.baseLink = baseLink;
        this.options = options ?? {};
    }

    getResp(
        { endpoint, options = {} }: Omit<LoaderUrl, 'baseLink'>,
        callback = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: Options, endpoint: string): string {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;
        Object.keys(urlOptions).forEach((key: string) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: string, endpoint: string, callback: (data: ResponseData) => void, options: Options): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res: Response) => res.json())
            .then((data: ResponseData) => callback(data))
            .catch((err: Error) => console.error(err));
    }
}

export default Loader;

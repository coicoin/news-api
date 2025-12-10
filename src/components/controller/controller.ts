import type { NewsArticles } from '../view/news/news';
import type { NewsSources } from '../view/sources/sources';
import AppLoader from './appLoader';
import type { LoaderUrl, Options } from './loader';

enum Endpoints {
    SOURCES = 'sources',
    EVERYTHING = 'everything',
}

class AppController extends AppLoader {
    getSources(callback: (data?: NewsSources) => void): void {
        super.getResp(
            {
                endpoint: Endpoints.SOURCES,
            } as LoaderUrl,
            callback
        );
    }

    getNews(e: Event, callback: (data?: NewsArticles) => void) {
        let target = e.target as Element;
        const newsContainer = e.currentTarget as Element;

        while (target && target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId: string = target.getAttribute('data-source-id') || '';
                if (newsContainer && newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: Endpoints.EVERYTHING,
                            options: {
                                sources: sourceId,
                            } as Options,
                        } as LoaderUrl,
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as Element;
        }
    }
}

export default AppController;

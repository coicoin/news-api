import { type SourceEntity } from '../sources/sources';
import './news.css';

export type NewsArticles = {
    articles: Array<NewsEntity>;
};

type NewsEntity = {
    id: string;
    title: string;
    description: string;
    author: string;
    url: string;
    urlToImage: string;
    source: SourceEntity;
    publishedAt: string;
};

class News {
    draw(data: Array<NewsEntity>): void {
        const newsList: Array<NewsEntity> = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');

        if (newsItemTemp) {
            newsList.forEach((item: NewsEntity, idx: number) => {
                const newsClone = newsItemTemp.content.cloneNode(true) as HTMLDivElement;

                if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');

                const newsMetaPhoto: HTMLDivElement | null = newsClone.querySelector('.news__meta-photo');
                if (newsMetaPhoto) {
                    newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
                }

                const newsMetaAuthor: HTMLDivElement | null = newsClone.querySelector('.news__meta-author');
                if (newsMetaAuthor) {
                    newsMetaAuthor.textContent = item.author || item.source.name;
                }
                const newsMetaDate: HTMLDivElement | null = newsClone.querySelector('.news__meta-date');
                if (newsMetaDate) {
                    newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
                }

                const newsDescTitle: HTMLDivElement | null = newsClone.querySelector('.news__description-title');
                if (newsDescTitle) {
                    newsDescTitle.textContent = item.title;
                }

                const newsDescSource: HTMLDivElement | null = newsClone.querySelector('.news__description-source');
                if (newsDescSource) {
                    newsDescSource.textContent = item.source.name;
                }

                const newsDescContent: HTMLDivElement | null = newsClone.querySelector('.news__description-content');
                if (newsDescContent) {
                    newsDescContent.textContent = item.description;
                }

                newsClone.querySelector('.news__read-more a')?.setAttribute('href', item.url);

                fragment.append(newsClone);
            });
        }

        const newsData: HTMLDivElement | null = document.querySelector('.news');
        if (newsData) {
            newsData.innerHTML = '';
            newsData.appendChild(fragment);
        }
    }
}

export default News;

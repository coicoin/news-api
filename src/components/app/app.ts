import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import type { NewsArticles } from '../view/news/news';
import type { NewsSources } from '../view/sources/sources';

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        const element: Element | null = document.querySelector('.sources');
        if (element) {
            element.addEventListener('click', (e: Event) =>
                this.controller.getNews(e, (data?: NewsArticles) => this.view.drawNews(data))
            );
            this.controller.getSources((data?: NewsSources) => this.view.drawSources(data));
        }
    }
}

export default App;

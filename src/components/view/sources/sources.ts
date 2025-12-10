import './sources.css';

export type NewsSources = {
    sources: Array<SourceEntity>;
};

export type SourceEntity = {
    id: string;
    name: string;
};

class Sources {
    draw(data: Array<SourceEntity>): void {
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

        if (data.length > 0 && sourceItemTemp) {
            const fragment: DocumentFragment = document.createDocumentFragment();

            data.forEach((item: SourceEntity) => {
                const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLDivElement;

                const sourceItemName: HTMLDivElement | null = sourceClone.querySelector('.source__item-name');
                if (sourceItemName) {
                    sourceItemName.textContent = item.name;
                }

                const sourceItem: HTMLDivElement | null = sourceClone.querySelector('.source__item');
                if (sourceItem) {
                    sourceItem.setAttribute('data-source-id', item.id);
                }

                fragment.append(sourceClone);

                const sources = document.querySelector('.sources');
                if (sources) {
                    sources.append(fragment);
                }
            });
        }
    }
}

export default Sources;

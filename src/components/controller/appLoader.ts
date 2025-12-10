import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        if (!process.env.API_URL) {
            throw new Error('Mandatory field baseLink is required');
        }
        if (!process.env.API_KEY) {
            throw new Error('Mandatory field apiKey is required');
        }

        super(process.env.API_URL, {
            apiKey: process.env.API_KEY,
        });
    }
}

export default AppLoader;

/** @format */

const API_URL = 'http://localhost:8000/api/producto';

export default class ProductoService {
    async search(query) {
        let response = await fetch(`${API_URL}/search/${query}`);
        let search = await response.json();
        return search;
    }

    async create(data) {
        let response = await fetch(`${API_URL}`, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        let search = await response.json();
        return search;
    }
}

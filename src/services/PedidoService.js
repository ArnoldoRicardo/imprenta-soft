/** @format */

const API_URL = 'http://localhost:8000/api/pedido';

export default class PedidoService {
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

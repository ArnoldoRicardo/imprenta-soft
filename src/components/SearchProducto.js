/** @format */

import React, { Component } from 'react';

import ProductoService from '../services/ProductoService';

const productoService = new ProductoService();

class SearchProducto extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            search: [],
            selected: null,
        };
    }

    search = async (val) => {
        let search = await productoService.search(val);
        if (search.length > 0) {
            this.setState({ search: search });
        } else {
            this.setState({ search: search, selected: null });
        }
    };

    seleccionar = (id, index) => {
        this.setState({
            value: this.state.search[index].nombre,
            selected: id,
            search: [],
        });
    };

    handleChange = async (event) => {
        this.search(event.target.value);
        this.setState({ value: event.target.value });
    };

    agregar = async () => {
        console.log('producto agregado', this.state.selected);
    };

    render() {
        const { value, search } = this.state;

        return (
            <div className='form-group row'>
                <label htmlFor='producto' className='col-1'>
                    Producto:
                </label>
                <div className='col-9'>
                    <input
                        type='text'
                        className='form-control'
                        id='producto'
                        placeholder='Lona impresa'
                        onChange={this.handleChange}
                        value={value}
                    />

                    {search && (
                        <small className='form-text text-muted'>
                            {/* {search.slice(0, 2).map((cliente, index) => ( //mostrar los 2 primeros */}
                            {search.map((cliente, index) => (
                                <button
                                    className='btn btn-secondary mr-1'
                                    key={cliente.id}
                                    onClick={(e) => this.seleccionar(cliente.id, index)}
                                    href='#'
                                >
                                    {cliente.nombre}
                                </button>
                            ))}
                        </small>
                    )}
                </div>
                <div className='col-2'>
                    <button
                        type='button'
                        className='btn btn-primary'
                        onClick={this.agregar}
                    >
                        Agregar
                    </button>
                </div>
            </div>
        );
    }
}

export default SearchProducto;

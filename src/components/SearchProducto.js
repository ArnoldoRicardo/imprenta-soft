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
        };
    }

    search = async (val) => {
        let search = await productoService.search(val);
        this.setState({ search: search });
    };

    addProducto = (producto) => {
        this.props.onAddProducto(producto);

        this.setState({
            value: '',
            search: [],
        });
    };

    handleChange = async (event) => {
        this.search(event.target.value);
        this.setState({ value: event.target.value });
    };

    render() {
        const { value, search } = this.state;

        return (
            <div className='form-group row'>
                <label htmlFor='producto' className='col-1'>
                    Producto:
                </label>
                <div className='col'>
                    <input
                        type='text'
                        className='form-control'
                        id='producto'
                        placeholder='Busca producto'
                        onChange={this.handleChange}
                        value={value}
                    />

                    {search && (
                        <small className='form-text text-muted'>
                            {search.map((producto) => (
                                <button
                                    className='btn btn-secondary mr-1'
                                    key={producto.id}
                                    onClick={(e) => this.addProducto(producto)}
                                    href='#'
                                >
                                    {producto.nombre} ${producto.precio}
                                </button>
                            ))}
                        </small>
                    )}
                </div>
            </div>
        );
    }
}

export default SearchProducto;

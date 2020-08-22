/** @format */

import React, { Component } from 'react';

import SearchCliente from './SearchCliente';
import SearchProducto from './SearchProducto';
import ProductoTable from './ProductoTable';

class CreateNota extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cliente: null,
            productos: [],
        };
    }

    handleClienteChange = (id) => {
        this.setState({ cliente: id });
    };

    handleAddProducto = (producto) => {
        producto.cantidad = 1;
        producto.descripcion = '';

        this.setState((state) => {
            const productos = state.productos.concat(producto);

            return {
                productos,
            };
        });
    };

    render() {
        const { cliente, productos } = this.state;

        return (
            <>
                <div className='container'>
                    <div className='row my-3'>
                        <div className='col-10'>
                            <SearchCliente
                                onClienteChange={this.handleClienteChange}
                                selected={cliente}
                            />
                        </div>
                        <div className='col-2'>
                            <button type='button' className='btn btn-secondary'>
                                Nota <span className='badge badge-light'>1</span>
                            </button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <SearchProducto onAddProducto={this.handleAddProducto} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <ProductoTable productos={productos} />
                        </div>
                    </div>
                    <div className='row justify-content-end'>
                        <div className='col-2'>total: $150</div>
                        <div className='col-2'>
                            <label htmlFor='Anticipo'>Anticipo:</label>
                            <input
                                type='text'
                                className='form-control'
                                id='Anticipo'
                                placeholder='0'
                            />
                        </div>
                        <div className='col-2'>
                            <button type='button' className='btn btn-primary'>
                                Imprimir
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default CreateNota;

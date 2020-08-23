/** @format */

import React, { Component } from 'react';

import SearchCliente from './SearchCliente';
import SearchProducto from './SearchProducto';
import ProductoTable from './ProductoTable';

const shortid = require('shortid');

class CreateNota extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cliente: null,
            productos: [],
            anticipo: '0',
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleClienteChange = (id) => {
        this.setState({ cliente: id });
    };

    handleAddProducto = (producto) => {
        producto.cantidad = 1;
        producto.descripcion = '';
        producto.pk = shortid.generate();
        producto.total = 1 * producto.precio;

        this.setState((state) => {
            const productos = state.productos.concat(producto);

            return {
                productos,
            };
        });
    };

    handleRemoveProducto = (producto) => {
        const pos = this.state.productos
            .map((p) => {
                return p.pk;
            })
            .indexOf(producto.pk);

        this.setState((state) => {
            const productos = state.productos.filter((producto, j) => pos !== j);

            return {
                productos,
            };
        });
    };

    handleProductoChange = (producto, target) => {
        const pos = this.state.productos
            .map((p) => {
                return p.pk;
            })
            .indexOf(producto.pk);

        this.setState((state) => {
            const productos = state.productos.map((producto, j) => {
                if (j === pos) {
                    producto[target.name] = target.value;
                    producto.total = producto.cantidad * producto.precio;
                    return producto;
                } else {
                    return producto;
                }
            });

            return {
                productos,
            };
        });
    };

    handledSave = () => {
        //validaciones
        const existenProductos = this.state.productos.length > 0;
        const descripcionesVacias = this.state.productos
            .map((producto) => producto.descripcion)
            .some((descripcion) => descripcion.length < 1);
        const anticipo = parseInt(this.state.anticipo) > 0;

        if (existenProductos) {
            if (!descripcionesVacias) {
                if (anticipo) {
                    //datos para crear la nota

                    const total = this.state.productos
                        .map((producto) => producto.total)
                        .reduce((a, b) => a + b);
                    const resta = total - anticipo;

                    const datos = {
                        cliente: this.state.cliente,
                        productos: this.state.productos,
                        anticipo: this.state.anticipo,
                        total: total,
                    };

                    console.log(datos);
                } else {
                    window.alert('necesitas cobrar anticipo');
                }
            } else {
                window.alert('necestitas escribir la descripcion');
            }
        } else {
            window.alert('necestitas agragar productos a la nota');
        }
    };

    render() {
        const { cliente, productos, anticipo } = this.state;

        let total = 0;

        if (productos.length > 0) {
            total = productos.map((producto) => producto.total).reduce((a, b) => a + b);
        }
        const resta = total - anticipo;

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
                            <ProductoTable
                                productos={productos}
                                handleChange={this.handleProductoChange}
                                handleRemoveProducto={this.handleRemoveProducto}
                            />
                        </div>
                    </div>
                    <div className='row justify-content-end'>
                        <div className='col-3 text-right'>
                            <button type='button' className='btn btn-danger'>
                                total <span className='badge badge-light'>{total}</span>
                            </button>
                        </div>
                        <div className='col-3'>
                            <div className='row'>
                                <label
                                    htmlFor='anticipo'
                                    className='col-6 col-form-label'
                                >
                                    Anticipo:
                                </label>
                                <input
                                    type='number'
                                    className='col-6 form-control'
                                    name='anticipo'
                                    placeholder='0'
                                    value={anticipo}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className='col-3'>
                            <button type='button' className='btn btn-danger'>
                                resta <span className='badge badge-light'>{resta}</span>
                            </button>
                            <button
                                type='button'
                                className='btn btn-success ml-1'
                                onClick={this.handledSave}
                            >
                                Cobrar
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default CreateNota;

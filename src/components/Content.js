/** @format */

import React from 'react';

import './content.css';

const Content = (props) => {
    return (
        <>
            <div className='container'>
                <div className='row my-3'>
                    <div className='col-10'>
                        <div className='form-group row'>
                            <label htmlFor='Cliente' className='col-1'>
                                Cliente:
                            </label>
                            <div className='col-9'>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='Cliente'
                                    placeholder='arnoldo Ricardo | 963 127 05 17'
                                />
                                <small className='form-text text-muted'>
                                    We'll never share your email with anyone else.
                                </small>
                            </div>
                            <div className='col-2'>
                                <button type='button' className='btn btn-primary'>
                                    Agregar
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='col-2 border'>nota #1</div>
                </div>
                <div className='row'>
                    <div className='col-12'>
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
                                />
                                <small className='form-text text-muted'>
                                    We'll never share your email with anyone else.
                                </small>
                            </div>
                            <div className='col-2'>
                                <button type='button' className='btn btn-primary'>
                                    Agregar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th scope='col'>Producto</th>
                                    <th scope='col'>Precio unitario</th>
                                    <th scope='col'>Cantidad</th>
                                    <th scope='col'>Total</th>
                                    <th scope='col'>descripcion</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope='row'>Lona</th>
                                    <td>$100</td>
                                    <td>
                                        <input
                                            type='text'
                                            className='form-control cantidad'
                                            placeholder='1'
                                        />
                                    </td>
                                    <td>$100</td>
                                    <td>
                                        <textarea
                                            className='form-control'
                                            id='exampleFormControlTextarea1'
                                            rows='3'
                                        ></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope='row'>Lona</th>
                                    <td>$100</td>
                                    <td>
                                        <input
                                            type='text'
                                            className='form-control cantidad'
                                            placeholder='1'
                                        />
                                    </td>
                                    <td>$100</td>
                                    <td>
                                        <textarea
                                            className='form-control'
                                            id='exampleFormControlTextarea1'
                                            rows='3'
                                        ></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope='row'>Lona</th>
                                    <td>$100</td>
                                    <td>
                                        <input
                                            type='text'
                                            className='form-control cantidad'
                                            placeholder='1'
                                        />
                                    </td>
                                    <td>$100</td>
                                    <td>
                                        <textarea
                                            className='form-control'
                                            id='exampleFormControlTextarea1'
                                            rows='3'
                                        ></textarea>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='row justify-content-end'>
                    <div className='col-2'>total</div>
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
};

export default Content;

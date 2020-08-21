/** @format */

import React from 'react';

const ProductoTable = (props) => {
    const { productos } = props;

    return (
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
                {productos.map((producto) => (
                    <tr key={producto.id}>
                        <th scope='row'>{producto.name}</th>
                        <td>${producto.precio}</td>
                        <td>
                            <input
                                type='text'
                                className='form-control'
                                name='cantidad'
                                placeholder={producto.cantidad}
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
                ))}
            </tbody>
        </table>
    );
};

export default ProductoTable;

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
                    <tr key={producto.pk}>
                        <th scope='row'>
                            {producto.nombre}
                            <br />
                            <button type='button' className='btn btn-danger'>
                                Borrar
                            </button>
                        </th>

                        <td>${producto.precio}</td>
                        <td>
                            <input
                                type='number'
                                step='any'
                                className='form-control'
                                name='cantidad'
                                placeholder={producto.cantidad}
                                onChange={(e) => props.handleChange(producto, e.target)}
                                // value={producto.cantidad}
                            />
                        </td>
                        <td>$100</td>
                        <td>
                            <textarea
                                className='form-control'
                                id='exampleFormControlTextarea1'
                                name='descripcion'
                                rows='3'
                                onChange={(e) => props.handleChange(producto, e.target)}
                                // value={producto.descripcion}
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ProductoTable;

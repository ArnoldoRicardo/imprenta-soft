/** @format */

import React, { Component } from 'react';

class SearchCliente extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            loading: false,
            search: null,
            selected: null,
            notExists: null,
        };
    }

    search = async (val) => {
        let response = await fetch('http://127.0.0.1:8000/api/cliente');
        let search = await response.json();
        this.setState({ search: search });
    };

    handleClick = (id, index) => {
        console.log(id, index);

        this.setState({
            value: this.state.search[index].nombre,
            selected: id,
            search: null,
        });
    };

    handleChange = async (event) => {
        this.search(event.target.value);
        this.setState({ value: event.target.value });
    };

    render() {
        return (
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
                        onChange={this.handleChange}
                        value={this.state.value}
                    />

                    {this.state.search && (
                        <small className='form-text text-muted'>
                            {this.state.search.slice(0, 2).map((cliente, index) => (
                                <button
                                    className='btn btn-secondary mr-1'
                                    key={cliente.id}
                                    onClick={(e) => this.handleClick(cliente.id, index)}
                                    href='#'
                                >
                                    {cliente.nombre}
                                </button>
                            ))}
                        </small>
                    )}
                </div>
                {this.state.notExists && (
                    <div className='col-2'>
                        <button type='button' className='btn btn-primary'>
                            Agregar
                        </button>
                    </div>
                )}
            </div>
        );
    }
}

export default SearchCliente;

/** @format */

import React, { Component } from 'react';

import ClienteService from '../services/ClienteService';

const clienteService = new ClienteService();

class SearchCliente extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            search: [],
        };
    }

    search = async (val) => {
        let search = await clienteService.search(val);
        this.setState({ search: search });
    };

    handleClick = (id, index) => {
        this.setState({
            value: this.state.search[index].nombre,
            search: [],
        });
        this.props.onClienteChange(id);
    };

    handleChange = async (event) => {
        this.search(event.target.value);
        this.setState({ value: event.target.value });
    };

    create = async () => {
        const cliente = {
            nombre: this.state.value,
            telefono: '963 127 05 17',
        };

        const user = await clienteService.create(cliente);

        this.props.onClienteChange(user.id);
    };

    render() {
        const { value, search } = this.state;
        const { selected } = this.props;
        let notExists = false;

        if (search.length <= 0 && !selected && value) {
            notExists = true;
        }

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
                        value={value}
                    />

                    {search && (
                        <small className='form-text text-muted'>
                            {/* {search.slice(0, 2).map((cliente, index) => ( */}
                            {search.map((cliente, index) => (
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
                {notExists && (
                    <div className='col-2'>
                        <button
                            type='button'
                            className='btn btn-primary'
                            onClick={this.create}
                        >
                            Crear Nuevo
                        </button>
                    </div>
                )}
            </div>
        );
    }
}

export default SearchCliente;

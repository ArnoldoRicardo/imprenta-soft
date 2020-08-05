/** @format */

import React from 'react';

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
            <a className='navbar-brand' href='#'>
                Talleres Graficos
            </a>
            <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarNavDropdown'
                aria-controls='navbarNavDropdown'
                aria-expanded='false'
                aria-label='Toggle navigation'
            >
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNavDropdown'>
                <ul className='navbar-nav'>
                    <li className='nav-item active'>
                        <a className='nav-link' href='#'>
                            Home <span className='sr-only'>(current)</span>
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='#'>
                            Features
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='#'>
                            Pricing
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

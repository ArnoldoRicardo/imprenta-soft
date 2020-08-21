/** @format */

import React, { Component } from 'react';

import Navbar from './components/Navbar';
import CreateNota from './components/CreateNota';

class App extends Component {
    render() {
        return (
            <>
                <Navbar />
                <CreateNota />
            </>
        );
    }
}

export default App;

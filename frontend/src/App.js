import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './Router';
import '../src/assets/style.css';
import '../src/assets/style1.css';
function App() {
    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    );
}

export default App;

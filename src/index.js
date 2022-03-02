import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './components/PrimeraApp'
import './index.css';

const divRoot = document.querySelector('#root');

ReactDOM.render( 
    <React.StrictMode>
        <PrimeraApp saludo='Hola Mundo'/>
    </React.StrictMode>,
    divRoot 
);

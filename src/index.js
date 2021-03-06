import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './components/CounterApp';
// import PrimeraApp from './components/PrimeraApp';

import './index.css';

const divRoot = document.querySelector('#root');

ReactDOM.render( 
    <React.StrictMode>
        <CounterApp value={ 0 } />
    </React.StrictMode>,
    divRoot 
);

// ReactDOM.render( 
//     <React.StrictMode>
//         <PrimeraApp saludo='Hola, Soy Alberth' />
//     </React.StrictMode>,
//     divRoot 
// );

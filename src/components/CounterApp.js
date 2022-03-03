import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState( value );

    // handleAdd
    const handleAdd = () => {
        setCounter( counter + 1 );
    }

    const handleSubstract = () => {
        setCounter( counter - 1 );
    }

    const handleReset = () => {
        setCounter( value );
    }

    return(
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            {/* Pasamos como referencia la función por eso no lo llamamos como handleAdd() */}
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubstract }>-1</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;

// rafcp es un snippet

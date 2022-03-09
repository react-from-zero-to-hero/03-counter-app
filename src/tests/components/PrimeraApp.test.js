import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
// import { render } from '@testing-library/react';
import PrimeraApp from '../../components/PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {
    // test('Debe mostrar el mensaje "Hola, Soy Alberth"', () => {
    //     const saludo = "Hola, Soy Alberth";

    //     const { getByText } = render( <PrimeraApp saludo={ saludo } /> );

    //     expect( getByText(saludo) ).toBeInTheDocument();
    // });

    test('debe mostrar <PrimeraApp /> correctamente', () => {
        const saludo = 'Hola, Soy Alberth!';

        const wrapper = shallow( <PrimeraApp saludo={ saludo } /> );

        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de mostrar el subtitulo enviado por props', () => {

        const saludo = 'Hola, Soy Alberth!';
        const subTitulo = 'Soy un subtitulo';

        const wrapper = shallow(
            <PrimeraApp 
                saludo={ saludo }
                subtitulo={ subTitulo }
            />
        );

        const textoParrafo = wrapper.find('p').text();

        expect( textoParrafo ).toBe( subTitulo );

    });

});

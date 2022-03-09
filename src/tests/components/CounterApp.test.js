import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CounterApp from '../../components/CounterApp';

describe('Pruebas en <CounterApp />', () => {

    let wrapper = shallow( <CounterApp /> );

    beforeEach( () => {
        wrapper = shallow( <CounterApp /> );
    });

    test('debe mostrar <CounterApp /> correctamente', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test('debe mostrar el valor por defecto de 100', () => {
        const valorProp = 100;
        const valorEsperado = '100';

        const wrapper = shallow( <CounterApp value={valorProp} /> );

        const valorPorDefecto = wrapper.find('h2').text();

        expect( valorPorDefecto ).toBe( valorEsperado );
    });


    test('debe de incrementar con el botón +1', () => {
        wrapper.find('button').at(0).simulate('click');

        const counterText = wrapper.find('h2').text();

        expect( counterText ).toBe('11');

    });

    test('debe de decrementar con el botón -1', () => {
        wrapper.find('button').at(2).simulate('click');

        const counterText = wrapper.find('h2').text();

        expect( counterText ).toBe('9');

    });

    test('debe de colocar el valor por defecto en el btn reset', () => {
        const wrapper = shallow( <CounterApp value={ 105 } /> );

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const counterText = wrapper.find('h2').text();

        expect( counterText ).toBe( '105' );

    });

});

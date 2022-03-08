import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Pruebas con promesas', () => {

    test('getHeroesByIdAsync debe de retornar un Héroe async', ( done ) => {

        const id = 1;

        getHeroeByIdAsync( id )
            .then( heroe => {
                expect( heroe ).toBe( heroes[0] );
                done();
            })
    });

    test('getHeroeByIdAsync debe de obtener un error si el id no existe', ( done ) => {

        const id = 10;

        getHeroeByIdAsync( id )
            .catch( err => {
                expect( err ).toBe('No se pudo encontrar el héroe');
                done();
            })

    });

});
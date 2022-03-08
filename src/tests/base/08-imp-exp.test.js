import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de Héroes', () => {
    test('Debe de retornar un heroe por id', () => {

        const id = 1;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find( h => h.id === id );

        expect( heroe ).toEqual( heroeData );

    });

    test('Debe de retornar un undefined si Héroe no existe', () => {

        const id = 10;
        const heroe = getHeroeById( id );

        expect( heroe ).toBe( undefined );

    });

    test('Debe de retonar un arreglo con los Héroes de DC', () => {

        const owner = 'DC';
        const heroesData = heroes.filter( h => h.owner === owner );

        const arrayHeroes = getHeroesByOwner( owner );

        expect( arrayHeroes ).toEqual( heroesData );
    });

    test('Debe de retonar un arreglo con los Héroes de Marvel de tamaño 2', () => {
        
        const owner = 'Marvel';
        const heroesData = heroes.filter( h => h.owner === owner );

        const arrayHeroes = getHeroesByOwner( owner );

        expect( arrayHeroes.length ).toBe( heroesData.length );
    });

});

import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from '../../src/data/heroes';

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroById debe retornar un heroe por id', () => {
        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    });

    test('getHeroById debe retornar undefined si no existe el id', () => {
        const id = 100;
        const hero = getHeroeById(id);

        expect(hero).toBeUndefined();
        expect(hero).toBeFalsy();
        expect(hero).toBe(undefined);
    });

    test('getHeroByOwner debe retornar un array con los heroes de DC', () => {
        const owner = 'DC';
        const heroesDC = getHeroesByOwner(owner);

        expect(heroesDC.length).toBe(3);
        expect(heroesDC).toEqual(heroes.filter(hero => hero.owner === owner));
    });

    test('getHeroByOwner debe retornar un array con los heroes de Marvel', () => {
        const owner = 'Marvel';
        const heroesDC = getHeroesByOwner(owner);

        expect(heroesDC.length).toBe(2);
        expect(heroesDC).toEqual(heroes.filter(hero => hero.owner === owner));
    });
});
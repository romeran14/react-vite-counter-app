import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"

describe('08-imp', () => { 
    test('getHeroe By id', () => { 
        const id = 1
        const hero = getHeroeById(id)

        expect( hero).toEqual({ id:1,name:'Batman'})
     })
 })
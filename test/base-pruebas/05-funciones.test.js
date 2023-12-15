import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('05-funciones', () => {
    test('get user debe retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser()

        expect(testUser).toEqual(user)
    })

    test('getUsuario debe retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'rome'
        }
        const user = getUsuarioActivo('rome')

        expect(testUser).toEqual(user)
    })

})
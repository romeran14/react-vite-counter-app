import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas firt app', () => { 
    test('should macth snapshot', () => { 
        const title = "hola soy goku"
        
        const { container, getByText} = render( <FirstApp title={title}></FirstApp>)

        expect( container).toMatchSnapshot()
        expect( getByText( title )).toBeTruthy()

        const h1 = container.querySelector('h1')
        console.log(h1.innerHTML)
        expect(h1.innerHTML.trim()).toBe(title)
     })

 })
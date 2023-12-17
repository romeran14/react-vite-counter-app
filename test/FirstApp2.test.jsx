import { getByTestId, render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"


describe('Pruebas firt app', () => { 
    const title = "hola soy goku"
    const subtitle = "hola soy raditz"
    test('debe hacer match con el snapshot', () => { 
        
        
        const { container } = render( <FirstApp title={title}></FirstApp>)
        expect( container).toMatchSnapshot()
     })

     test('debe hacer match con el snapshot', () => { 
        const { container } = render( <FirstApp title={title}></FirstApp>)
        screen.debug()
        expect(screen)
     })

     test('debe de mostrar el titulo en un h1', () => { 
        render( <FirstApp title={title}></FirstApp>)
        expect( screen.getByRole('heading',{level:1}))
      })

      test('debe mostrar el subtitulo enviado por props', () => { 
        render( <FirstApp subTitle={subtitle} title={title}></FirstApp>)
        expect( screen.getAllByText(subtitle).length).toBe(2)
      })

 })
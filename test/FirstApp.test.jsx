import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas firt app', () => { 
    test('should macth snapshot', () => { 
        render( <FirstApp></FirstApp>)
     })

 })
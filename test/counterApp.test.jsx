import { CounterApp } from "../src/CounterApp"
import { render, screen, fireEvent } from "@testing-library/react"

describe('CounterApp', () => { 
  const innitialValue = 10

  test('should match snapshot', () => { 
    const { container } = render(<CounterApp value={innitialValue} />)
    expect(container).toMatchSnapshot()
  })

  test('should show 100', () => { 
    render(<CounterApp value={100} />)
    expect(screen.getByText(/100/)).toBeTruthy()
  })

  test('should increment clikin button', () => { 
    render(<CounterApp value={innitialValue} />)
    fireEvent.click( screen.getByText('+1'))
    expect( screen.getByText('11') ).toBeTruthy()
   })

   test('should decrement clikin button', () => { 
    render(<CounterApp value={innitialValue} />)
    fireEvent.click( screen.getByText('-1'))
    expect( screen.getByText('9') ).toBeTruthy()
   })

   test('should fire reset funct', () => { 
    render(<CounterApp value={innitialValue} />)

    fireEvent.click( screen.getByText('-1'))
    fireEvent.click( screen.getByText('-1'))
    fireEvent.click( screen.getByText('+1'))
    fireEvent.click( screen.getByText('-1'))
    fireEvent.click( screen.getByRole('button', { name:'btn-reset'}))

    expect( screen.getByText('10') ).toBeTruthy()
   })
})

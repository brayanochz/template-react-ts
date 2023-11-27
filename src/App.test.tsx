import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import App from "./App"

test('demo', () => {
  expect(true).toBe(true)
})

test("Renders the main page", () => {
  render(<App />)

  const initialText = screen.getByText("React TS Template")

  expect(initialText).toBeInTheDocument()
})
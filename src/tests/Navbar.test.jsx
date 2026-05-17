import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Navbar from "../components/Navbar"

test("renders navigation links", () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  )

  expect(screen.getByText("Home")).toBeInTheDocument()
  expect(screen.getByText("Products")).toBeInTheDocument()
})
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Products from "./pages/Products"
import AddCake from "./pages/AddCake"
import EditCake from "./pages/EditCake"

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/add" element={<AddCake />} />
        <Route path="/edit/:id" element={<EditCake />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="bg-[#0033a0] text-white p-4 flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/add">Add Cake</Link>
    </nav>
  )
}

export default Navbar
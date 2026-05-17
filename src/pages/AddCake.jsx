import { useState } from "react"
import { useNavigate } from "react-router-dom"

function AddCake() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    flavor: "",
    price: "",
    description: "",
    image: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const savedCakes =
      JSON.parse(localStorage.getItem("cakes")) || []

    const newCake = {
      ...formData,
      id: Date.now()
    }

    const updatedCakes = [...savedCakes, newCake]

    localStorage.setItem(
      "cakes",
      JSON.stringify(updatedCakes)
    )

    navigate("/products")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 flex flex-col gap-4 max-w-md mx-auto"
    >
      <h2>Add a New Cake</h2>
      <input
        type="text"
        name="name"
        placeholder="Cake Name"
        value={formData.name}
        onChange={handleChange}
        className="border p-2 rounded"
      />

      <input
        type="text"
        name="flavor"
        placeholder="Flavor"
        value={formData.flavor}
        onChange={handleChange}
        className="border p-2 rounded"
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        className="border p-2 rounded"
      />

      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
        className="border p-2 rounded"
      />

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className="border p-2 rounded"
      />

      <button className="bg-[#d4af37] text-black p-2 rounded">
        Add Cake
      </button>
    </form>
  )
}

export default AddCake
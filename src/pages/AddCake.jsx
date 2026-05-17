import { useState } from "react"
import { addCake } from "../services/api"
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

  const handleSubmit = async (e) => {
    e.preventDefault()

    await addCake(formData)

    navigate("/products")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 flex flex-col gap-4 max-w-md mx-auto"
    >
        <h2 className="text-2xl font-bold">Add a New Cake</h2>
      <input name="name" placeholder="Cake Name" onChange={handleChange} className="border p-2" />

      <input name="flavor" placeholder="Flavor" onChange={handleChange} className="border p-2" />

      <input name="price" placeholder="Price" onChange={handleChange} className="border p-2" />

      <input name="image" placeholder="Image URL" onChange={handleChange} className="border p-2" />

      <textarea name="description" placeholder="Description" onChange={handleChange} className="border p-2" />

      <button className="bg-[#d4af37] text-black p-2 rounded">
        Add Cake
      </button>
    </form>
  )
}

export default AddCake
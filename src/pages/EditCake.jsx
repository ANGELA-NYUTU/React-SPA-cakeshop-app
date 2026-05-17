import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

function EditCake() {
  const { id } = useParams()

  const navigate = useNavigate()

  const [cake, setCake] = useState({
    name: "",
    flavor: "",
    price: "",
    description: "",
    image: ""
  })

  useEffect(() => {
    const savedCakes =
      JSON.parse(localStorage.getItem("cakes")) || []

    const foundCake = savedCakes.find(
      (cake) => cake.id === Number(id)
    )

    if (foundCake) {
      setCake(foundCake)
    }
  }, [id])

  const handleChange = (e) => {
    setCake({
      ...cake,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const savedCakes =
      JSON.parse(localStorage.getItem("cakes")) || []

    const updatedCakes = savedCakes.map((item) =>
      item.id === Number(id)
        ? cake
        : item
    )

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
      <input
        type="text"
        name="name"
        placeholder="Cake Name"
        value={cake.name}
        onChange={handleChange}
        className="border p-2 rounded"
      />

      <input
        type="text"
        name="flavor"
        placeholder="Flavor"
        value={cake.flavor}
        onChange={handleChange}
        className="border p-2 rounded"
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={cake.price}
        onChange={handleChange}
        className="border p-2 rounded"
      />

      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={cake.image}
        onChange={handleChange}
        className="border p-2 rounded"
      />

      <textarea
        name="description"
        placeholder="Description"
        value={cake.description}
        onChange={handleChange}
        className="border p-2 rounded"
      />

      <button className="bg-[#0033a0] text-white p-2 rounded">
        Update Cake
      </button>
    </form>
  )
}

export default EditCake
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { updateCake } from "../services/api"

function EditCake() {
  const { id } = useParams()

  const navigate = useNavigate()

  const [cake, setCake] = useState({})

  useEffect(() => {
    axios
      .get(`http://localhost:3001/cakes/${id}`)
      .then((response) => setCake(response.data))
  }, [])

  const handleChange = (e) => {
    setCake({
      ...cake,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    await updateCake(id, cake)

    navigate("/products")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 flex flex-col gap-4 max-w-md mx-auto"
    >
      <input
        name="name"
        value={cake.name || ""}
        onChange={handleChange}
        className="border p-2"
      />

      <input
        name="price"
        value={cake.price || ""}
        onChange={handleChange}
        className="border p-2"
      />

      <button className="bg-[#0033a0] text-white p-2 rounded">
        Update Cake
      </button>
    </form>
  )
}

export default EditCake
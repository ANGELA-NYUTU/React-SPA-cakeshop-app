import { useState } from "react"
import { useNavigate } from "react-router-dom"

import CakeCard from "../components/CakeCard"
import SearchBar from "../components/SearchBar"
import useFetchCakes from "../hooks/useFetchCakes"

function Products() {
  const { cakes, setCakes } = useFetchCakes()

  const [search, setSearch] = useState("")

  const navigate = useNavigate()

  const filteredCakes = cakes.filter((cake) =>
    cake.name.toLowerCase().includes(search.toLowerCase())
  )

  const handleDelete = (id) => {
    const updatedCakes =
      cakes.filter((cake) => cake.id !== id)

    setCakes(updatedCakes)

    localStorage.setItem(
      "cakes",
      JSON.stringify(updatedCakes)
    )
  }

  const handleEdit = (cake) => {
    navigate(`/edit/${cake.id}`)
  }

  return (
    <div className="p-6">
      <SearchBar search={search} setSearch={setSearch} />

      <div className="grid md:grid-cols-3 gap-4 mt-4">
        {filteredCakes.map((cake) => (
          <CakeCard
            key={cake.id}
            cake={cake}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  )
}

export default Products
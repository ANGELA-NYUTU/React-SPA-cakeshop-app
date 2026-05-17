import { useEffect, useState } from "react"

function useFetchCakes() {
  const starterCakes = [
    {
      id: 1,
      name: "Chocolate Delight",
      flavor: "Chocolate",
      price: 25,
      description: "Rich chocolate cake",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587"
    },
    {
      id: 2,
      name: "Vanilla Dream",
      flavor: "Vanilla",
      price: 20,
      description: "Soft vanilla cake",
      image:
        "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e"
    }
  ]

  const [cakes, setCakes] = useState([])

  useEffect(() => {
    const savedCakes =
      JSON.parse(localStorage.getItem("cakes"))

    if (savedCakes) {
      setCakes(savedCakes)
    } else {
      localStorage.setItem(
        "cakes",
        JSON.stringify(starterCakes)
      )

      setCakes(starterCakes)
    }
  }, [])

  return { cakes, setCakes }
}

export default useFetchCakes
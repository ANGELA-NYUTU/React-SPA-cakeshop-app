import { useEffect, useState } from "react"
import { getCakes } from "../services/api"

function useFetchCakes() {
  const [cakes, setCakes] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await getCakes()
    setCakes(response.data)
  }

  return { cakes, setCakes, fetchData }
}

export default useFetchCakes
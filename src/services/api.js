import axios from "axios"

const API_URL = "http://localhost:3001/cakes"

export const getCakes = () => axios.get(API_URL)

export const addCake = (cake) => axios.post(API_URL, cake)

export const updateCake = (id, updatedCake) =>
  axios.patch(`${API_URL}/${id}`, updatedCake)

export const deleteCake = (id) =>
  axios.delete(`${API_URL}/${id}`)
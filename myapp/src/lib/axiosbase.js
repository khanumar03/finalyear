import axios from "axios"

const baseURL = axios.create({
    baseURL:"http://localhost:4000/api"
})

export { baseURL }
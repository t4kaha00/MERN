import axios from "axios"

export const axiosInstance = axios.create({
    // baseURL: "https://mern-stack-trial.herokuapp.com/"
    baseURL: "http://localhost:5000"
})
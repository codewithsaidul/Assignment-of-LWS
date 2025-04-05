import axios from "axios"

const axiosInsteance = axios.create({
    baseURL: "http://localhost:9000"
})


export default axiosInsteance
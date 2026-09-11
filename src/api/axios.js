import axios from "axios";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
    baseURL: baseUrl
})

api.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token");

    config.headers.Authorization =`Bearer ${token}`;

    return config;

})
export default api;

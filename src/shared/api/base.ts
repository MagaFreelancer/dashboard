import axios from "axios";

export const API_URL = "https://f1f68e8aa8f9580b.mokky.dev";

export const instance = axios.create({
    baseURL: API_URL,
    withCredentials: true,
});

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

import axios, { AxiosInstance, CreateAxiosDefaults } from 'axios'

const api: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3000'
} as CreateAxiosDefaults)

export default api

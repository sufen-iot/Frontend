import axios from 'axios'

const getAPI = axios.create({
    baseURL: process.env.VUE_API_URL,
    withCredentials: true
})


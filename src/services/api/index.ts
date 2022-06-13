import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://26.236.196.127:3001/',
    timeout: 1000 * 10,
    validateStatus: () => true,
})

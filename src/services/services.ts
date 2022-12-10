import axios from 'axios';
import { API_URL, API_KEY } from '../const/api';

const instance = axios.create({
    withCredentials: false,
    baseURL: API_URL,
    headers: {
        'X-API-KEY': API_KEY,
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Origin': 'https://localhost:3000',
    },
});

export default instance;
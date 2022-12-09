import axios from 'axios';
import { API_URL, API_KEY } from '../const/api';

const instance = axios.create({
    withCredentials: true,
    baseURL: API_URL,
    headers: {
        'API-KEY': API_KEY,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
});

export default instance;
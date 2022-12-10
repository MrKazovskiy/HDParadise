import axios from 'axios';
import { API_URL} from '../const/api';

export const instance = axios.create({
    withCredentials: false,
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

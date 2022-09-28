import axios from 'axios';

export const API = axios.create({
    baseURL: process.env.REACT_APP_SERVERURL + process.env.REACT_APP_API_VERSION,
});
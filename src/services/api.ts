import axios from "axios";

const api = axios.create({
    baseURL: process.env.APP_URL,
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' }
});

api.defaults.timeout = 10000;

export { api };
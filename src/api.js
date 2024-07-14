import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true  // 자격 증명 포함
});

export default api;

import axios from 'axios'

const api = axios.create({
    baseURL: "https://iot-api.onrender.com/api/"
});

export default api
import axios from 'axios'

const api = axios.create({
    baseURL: "https://gentle-beyond-60869.herokuapp.com/api"
});

export default api
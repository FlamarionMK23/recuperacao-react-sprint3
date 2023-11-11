import axios from "axios";

// axion faz a ponte na API, conecta o front com back
// configurando a baseURL do axios

const api = axios.create({
baseURL: "http://localhost:3000/"
});

export default api;
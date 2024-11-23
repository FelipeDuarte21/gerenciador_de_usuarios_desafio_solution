import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8080'
});

export const buscarUsuarios = async () => {
    const resp = await api.get("/api/v1/usuario");
    return resp.data;
}
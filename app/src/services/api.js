import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8080'
});

export const buscarUsuarios = async () => {
    const resp = await api.get("/api/v1/usuario");
    return resp.data;
}

export const buscarEnderecoPorCep = async (cep) => {
    const resp = await api.get(`/api/v1/endereco/consulta/${cep}`);
    return resp.data;
}

export const cadatrarUsuario = async (dados) => {
    const resp = await api.post(`/api/v1/usuario`, dados);
    return resp.data;
}
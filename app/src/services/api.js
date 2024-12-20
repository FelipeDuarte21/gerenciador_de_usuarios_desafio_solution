import axios from "axios";
import { getToken } from './localStorage';

const api = axios.create({
    baseURL: 'http://localhost:8080'
});

const URL_ENDPOINT = "/api/v1/usuario";

export const buscarUsuarios = async () => {
    const resp = await api.get(`${URL_ENDPOINT}`,{ headers: { Authorization: getToken()} });
    return resp.data;
}

export const cadatrarUsuario = async (dados) => {
    const resp = await api.post(`${URL_ENDPOINT}`, dados, { headers: { Authorization: getToken()} });
    return resp.data;
}

export const buscarUsuarioPorId = async (id) => {
    const resp = await api.get(`${URL_ENDPOINT}/${id}`, { headers: { Authorization: getToken()} });
    return resp.data;
}

export const atualizarUsuario = async (id, dados) => {
    const resp = await api.put(`${URL_ENDPOINT}/${id}`, dados, { headers: { Authorization: getToken()} });
    return resp.data;
}

export const excluirUsuario = async (id) => {
    const resp = await api.delete(`${URL_ENDPOINT}/${id}`, { headers: { Authorization: getToken()} });
    return resp.data;
}

export const buscarEnderecoPorCep = async (cep) => {
    const resp = await api.get(`/api/v1/endereco/consulta/${cep}`, { headers: { Authorization: getToken()} });
    return resp.data;
}

export const fazerLogin = async (dados) => {
    const resp = await api.post(`/api/v1/auth/login`, dados);
    return resp.data;
}
const ID_USER = "ID_USER";
const EMAIL_USER = "EMAIL_USER";
const NAME_USER = "NAME_USER";
const TOKEN = "TOKEN";

export const setDados = (data) => {
    localStorage.setItem(ID_USER, data.idUsuario);
    localStorage.setItem(EMAIL_USER, data.email);
    localStorage.setItem(NAME_USER, data.nome);
    localStorage.setItem(TOKEN, `${data.tipo} ${data.token}`);
}

export const getDados = () => {
    return {
        ID_USER: localStorage.getItem(ID_USER),
        EMAIL_USER: localStorage.getItem(EMAIL_USER),
        NAME_USER: localStorage.getItem(NAME_USER),
        TOKEN: localStorage.getItem(TOKEN)
    }
}

export const resetDados = () => {
    localStorage.removeItem(ID_USER);
    localStorage.removeItem(EMAIL_USER);
    localStorage.removeItem(NAME_USER);
    localStorage.removeItem(TOKEN);
}

export const getToken = () => {
    return localStorage.getItem(TOKEN);
}

export const getNameUser = () => {
    return localStorage.getItem(NAME_USER);
}
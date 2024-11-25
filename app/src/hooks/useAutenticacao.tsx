import { useMutation } from "react-query";
import { fazerLogin } from '../services/api.js'
import { setDados } from "../services/localStorage.js";

const useAutenticacao = () => {
    const mutate = useMutation({
        mutationFn: (dados) => { return fazerLogin(dados)},
        onSuccess(data) {
            setDados(data);
        },
    });

    return mutate;
}

export default useAutenticacao;
import { useMutation } from 'react-query';
import { atualizarUsuario } from '../services/api';

const useAtualizaUsuario = () => {
    const mutate = useMutation({
        mutationFn: (dados: object) => { return atualizarUsuario(dados['id'], dados)},
    });
    return mutate;
}

export default useAtualizaUsuario;
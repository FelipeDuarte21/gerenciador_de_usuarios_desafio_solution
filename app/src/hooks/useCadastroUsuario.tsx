import { useMutation } from 'react-query';
import { cadatrarUsuario } from '../services/api';

const useCadastroUsuario = () => {
    const mutate = useMutation({
        mutationFn: (dados) => { return cadatrarUsuario(dados)},
    });
    return mutate;
}

export default useCadastroUsuario;
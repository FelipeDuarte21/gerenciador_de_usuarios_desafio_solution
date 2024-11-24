import { useMutation, useQueryClient } from 'react-query';
import { excluirUsuario } from '../services/api';

const useExcluiUsuario = () => {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: (id) => { return excluirUsuario(id)},
        onSuccess: () => {
            queryClient.invalidateQueries(['usuarios-data']);
        }
    });
    return mutate;
}

export default useExcluiUsuario;
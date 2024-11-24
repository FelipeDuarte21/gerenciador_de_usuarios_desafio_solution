import { useQuery } from "react-query";
import { buscarEnderecoPorCep } from '../services/api.js'

const useEndereco = (cep: string) => {
    const query = useQuery({
        queryFn: () => buscarEnderecoPorCep(cep),
        queryKey: ['endereco-data'],
        retry: false,
        enabled: cep?.length == 8,
        refetchOnWindowFocus: false
    });

    return query;
}

export default useEndereco;
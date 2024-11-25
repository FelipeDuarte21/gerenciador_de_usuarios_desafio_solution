import { useQuery } from "react-query";
import { buscarEnderecoPorCep } from '../services/api.js'

const useEndereco = (cep: string) => {
    const query = useQuery({
        queryFn: () => buscarEnderecoPorCep(cep),
        queryKey: ['endereco-data', cep],
        retry: false,
        enabled: !!cep,
        refetchOnWindowFocus: false
    });

    return query;
}

export default useEndereco;
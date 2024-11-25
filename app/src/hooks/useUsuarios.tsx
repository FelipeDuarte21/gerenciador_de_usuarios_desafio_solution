import { useQuery } from "react-query";
import { buscarUsuarios } from '../services/api.js'

const useUsuarios = () => {
    const query = useQuery({
        queryFn: buscarUsuarios,
        queryKey: ['usuarios-data'],
        retry: false,
        refetchOnWindowFocus: false
    });

    return query;
}

export default useUsuarios;
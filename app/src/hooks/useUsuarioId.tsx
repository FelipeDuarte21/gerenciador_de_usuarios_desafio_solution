import { useQuery } from "react-query";
import { buscarUsuarioPorId } from '../services/api.js'

const useUsarioId = (id: number) => {
    const query = useQuery({
        queryFn: () => buscarUsuarioPorId(id),
        queryKey: ['usuario-id-data'],
        retry: false,
        enabled: !!id && id != 0,
        refetchOnWindowFocus: false
    });

    return query;
}

export default useUsarioId;
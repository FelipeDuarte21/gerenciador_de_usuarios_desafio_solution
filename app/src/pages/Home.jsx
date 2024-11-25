import React, { useEffect } from "react";
import Container from "../components/Container";
import Cabecalho from "../components/Cabecalho";
import { Link, useNavigate } from "react-router-dom";
import useUsuarios from "../hooks/useUsuarios";
import CardList from "../components/CardList";
import Swal from 'sweetalert2';
import useExcluiUsuario from "../hooks/useExcluiUsuario";

const Home = () => {

    const navigate = useNavigate();

    const { data, isLoading, isError }  = useUsuarios();

    const { mutate, isSuccess } = useExcluiUsuario();

    const onEditar = (id) => {
        navigate(`/atualiza/${id}`);
    }

    const onExcluir = (id) => {
        Swal.fire(
            {
                title: "Deseja realmente excluir o usuário?",
                showDenyButton: true,
                confirmButtonText: "Sim",
                denyButtonText: `Não`
            }).then((result) => {
                if(result.isConfirmed) {
                    mutate(id);
                }
            }
        );
    }

    useEffect(() => {
        if(isSuccess) {
            Swal.fire({
                title: 'Sucesso!',
                text: 'Usuário Excluído com Sucesso!',
                icon: 'success',
            });
        }
    }, [isSuccess])

    return (
        <>
            <Cabecalho />
            <Container>

                <h3 className="text-center mt-4"><i className="fa-solid fa-user me-1"></i>Usuários</h3>

                <Link className="btn btn-primary my-3" to="/cadastro">
                    <i className="fa-solid fa-user-plus me-1"></i>Novo
                </Link>

                
                <CardList usuarios={data} isError={isError} isLoading={isLoading} onEditar={onEditar} onExcluir={onExcluir} />

            </Container>
        </>
    )
}

export default Home;
import React, { useEffect } from "react";
import Container from "../components/Container";
import Cabecalho from "../components/Cabecalho";
import { FaPlus } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import useUsuarios from "../hooks/useUsuarios";
import CardList from "../components/CardList";
import Swal from 'sweetalert2';
import useExcluiUsuario from "../hooks/useExcluiUsuario";
import { FaUserLarge } from "react-icons/fa6";


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

                <h3 className="text-center mt-4"><FaUserLarge className="me-1" />Usuários</h3>

                <Link className="btn btn-primary my-3" to="/cadastro">
                    <FaPlus className="me-1"/>Novo
                </Link>

                <CardList usuarios={data} isError={isError} isLoading={isLoading} onEditar={onEditar} onExcluir={onExcluir} />

            </Container>
        </>
    )
}

export default Home;
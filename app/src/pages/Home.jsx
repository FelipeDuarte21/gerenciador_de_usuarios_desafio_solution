import React from "react";
import Container from "../components/Container";
import Cabecalho from "../components/Cabecalho";
import { FaPlus } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

import useUsuarios from "../hooks/useUsuarios";

import CardList from "../components/CardList";

const Home = () => {

    const navigate = useNavigate();

    const { data, isLoading, isError }  = useUsuarios();

    const onEditar = (id) => {
        navigate(`/atualiza/${id}`);
    }

    const onExcluir = (id) => {
        console.log(id);
    }

    return (
        <>
            <Cabecalho />
            <Container>

                <h3 className="text-center mt-4">Usuários</h3>

                <Link className="btn btn-primary my-3" to="/cadastro">
                    <FaPlus className="me-1"/>Novo
                </Link>

                <CardList usuarios={data} isError={isError} isLoading={isLoading} onEditar={onEditar} onExcluir={onExcluir} />

            </Container>
        </>
    )
}

export default Home;
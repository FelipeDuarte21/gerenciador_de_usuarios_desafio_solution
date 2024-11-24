import React from "react";
import Cabecalho from '../components/Cabecalho';
import Container from '../components/Container';
import { Link, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import FormAtualiza from "../components/FormAtualiza";

const Atualiza = () => {

    const { id } = useParams();

    const onReceberDados = (dados) => {
        console.log(dados);
    }

    return (
        <>
            <Cabecalho />
            <Container>

                <h3 className="text-center mt-4">Atualizar Cadastro de Usuário</h3>

                <Link className="btn btn-outline-secondary mt-3" to="/">
                    <FaArrowLeftLong className="me-1" />Voltar
                </Link>

                <div className="row mt-5 mb-3">

                    <div className="col-12">

                        <FormAtualiza onReceberDados={onReceberDados} />

                    </div>

                </div>

            </Container>
        </>
    );

}

export default Atualiza;
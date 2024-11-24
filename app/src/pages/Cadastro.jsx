import React, { useEffect } from "react";
import Cabecalho from '../components/Cabecalho';
import Container from '../components/Container';
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import FormCadastro from "../components/FormCadastro";
import  useCadastroUsuario from '../hooks/useCadastroUsuario';
import Swal from 'sweetalert2';
import { FaUserPlus } from "react-icons/fa6";
 
const Cadastro = () => {

    const navigate = useNavigate();

    const { mutate , isSuccess, isError, error } = useCadastroUsuario();

    const onReceberDados = (dados) => {
        mutate(dados);
    }

    useEffect(() => {
        if(isSuccess) {
            Swal.fire({
                title: 'Sucesso!',
                text: 'Usuário Cadastrado com Sucesso!',
                icon: 'success',
            });
            navigate("/");
        }
    }, [isSuccess]);

    useEffect(() => {
        if(isError) {
            Swal.fire({
                title: 'Erro ao Cadastrar Usuário!',
                text: error.response.data.message,
                icon: 'error',
            });
        }
    }, [isError]);

    return (
        <>
            <Cabecalho/>
            <Container>

                <h3 className="text-center mt-4"><FaUserPlus className="me-1" />Cadastrar Usuário</h3>

                <Link className="btn btn-outline-secondary mt-3" to="/">
                    <FaArrowLeftLong className="me-1"/>Voltar
                </Link>

                <div className="row mt-5 mb-3">

                    <div className="col-12">

                       <FormCadastro onReceberDados={onReceberDados} />

                    </div>

                </div>

            </Container>
        </>
    );
}

export default Cadastro;
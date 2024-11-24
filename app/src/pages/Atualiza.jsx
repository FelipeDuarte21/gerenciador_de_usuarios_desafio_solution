import React, { useEffect } from "react";
import Cabecalho from '../components/Cabecalho';
import Container from '../components/Container';
import { Link, useParams, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import FormAtualiza from "../components/FormAtualiza";
import useUsarioId from "../hooks/useUsuarioId";
import useAtualizaUsuario from "../hooks/useAtualizaUsuario";
import Spinner from '../components/Spinner';
import Swal from 'sweetalert2';
import { FaUserPen } from "react-icons/fa6";

const Atualiza = () => {

    const { id } = useParams();

    const { data, isLoading } = useUsarioId(id);

    const { mutate, isSuccess, isError, error } = useAtualizaUsuario();

    const navigate = useNavigate();

    const onReceberDados = (dados) => {
        dados = {id: id , ...dados};
        mutate(dados);
    }

    useEffect(() => {

        if(isSuccess) {
            Swal.fire({
                title: 'Sucesso!',
                text: 'Cadastro atualizado com Sucesso!',
                icon: 'success',
            });
            navigate("/");
        }

    }, [isSuccess]);

    useEffect(() => {

        if(isError) {
            Swal.fire({
                title: 'Erro ao Atualizar Cadastro do Usuário!',
                text: error.response.data.message,
                icon: 'error',
            });
        }

    }, [isError]);

    return (
        <>
            <Cabecalho />
            <Container>

                <h3 className="text-center mt-4"><FaUserPen className="me-1" />Atualizar Cadastro de Usuário</h3>

                <Link className="btn btn-outline-secondary mt-3" to="/">
                    <FaArrowLeftLong className="me-1" />Voltar
                </Link>

                {isLoading && 
                    <div className="d-flex justify-content-center my-5">
                        <Spinner/>
                    </div>
                }

                {!isLoading && data && 
                
                    <>
                        <div className="row mt-5 mb-3">

                            <div className="col-12">

                                <FormAtualiza dados={data} onReceberDados={onReceberDados} />

                            </div>

                        </div>
                    </>

                }

            </Container>
        </>
    );

}

export default Atualiza;
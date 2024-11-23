import React, { useState } from "react";
import Cabecalho from '../components/Cabecalho';
import Container from '../components/Container';
import { Link } from "react-router-dom";
import InputMask from 'react-input-mask';
import { FaRegFloppyDisk } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

const Cadastro = () => {

    const [sizeNome, setSizeNome] = useState(0);


    return (
        <>
            <Cabecalho/>
            <Container>

                <h3 className="text-center mt-4">Cadastro Endereços</h3>

                <Link className="btn btn-outline-secondary mt-3" to="/">
                    <FaArrowLeftLong className="me-1"/>Voltar
                </Link>

                <div className="row mt-5 mb-3">

                    <div className="col-12">

                        <form>

                            <label htmlFor="nome" className="form-label mb-0">Nome:</label>
                            <input id="nome" type="text" className="form-control" onChange={e => setSizeNome(e.target.value.length)} />
                            <div className="d-flex justify-content-end mb-0">
                                <small>{sizeNome}/60</small>
                            </div>
                           
                            <div className="row mt-2">
                                
                                <div className="col-12 col-md-6">
                                    <label htmlFor="cpf" className="form-label mb-0">CPF:</label>
                                    <InputMask id="cpf" mask="999.999.999-99" className="form-control" />
                                </div>

                                <div className="col-12 col-md-6">
                                    <label htmlFor="cep" className="form-label mb-0 mt-3 mt-md-0">CEP:</label>
                                    <InputMask id="cep" mask="99.999-999" className="form-control" />
                                </div>

                            </div>

                            <div className="row mt-4">
                                
                                <div className="col-12 col-md-8">
                                    <label htmlFor="logradouro" className="form-label mb-0">Logradouro:</label>
                                    <input id="logradouro" type="text" className="form-control" readOnly />
                                </div>

                                <div className="col-12 col-md-4">
                                    <label htmlFor="Bairro" className="form-label mb-0 mt-3 mt-md-0">Bairro:</label>
                                    <input id="bairro" type="text" className="form-control" readOnly />
                                </div>

                            </div>

                            <div className="row mt-3">
                                
                                <div className="col-12 col-md-9">
                                    <label htmlFor="cidade" className="form-label mb-0">Cidade:</label>
                                    <input id="cidade" type="text" className="form-control" readOnly />
                                </div>

                                <div className="col-12 col-md-3">
                                    <label htmlFor="estado" className="form-label mb-0 mt-3 mt-md-0">Estado:</label>
                                    <input id="estado" type="text" className="form-control" readOnly />
                                </div>

                            </div>

                            <button type="submit" className="btn btn-primary mt-4">
                                <FaRegFloppyDisk className="me-1" />Cadastrar
                            </button>

                        </form>

                    </div>

                </div>

                

            </Container>
        </>
    )
}

export default Cadastro;
import React from "react";
import { colocaMascaraCPF , colocaMascaraCEP } from "../../../utils/pipes";

const Card = ({usuario, onEditar, onExcluir}) => {

    return (
        <div className="col-12 col-lg-8 col-xl-4">

            <div className="card mt-3 mt-lg-2 shadow-sm">
                <div className="card-body">

                    <h5 className="mb-0">Nome:</h5>
                    <p>{usuario.nome}</p>

                    <h5 className="mb-0">CPF:</h5>
                    <p>{colocaMascaraCPF(usuario.cpf)}</p>

                    <h5 className="mb-0">CEP:</h5>
                    <p>{colocaMascaraCEP(usuario.cep)}</p>

                    <h5 className="mb-0">Logradouro:</h5>
                    <p>{usuario.logradouro}</p>

                    <h5 className="mb-0">Bairro:</h5>
                    <p>{usuario.bairro}</p>

                    <h5 className="mb-0">Cidade:</h5>
                    <p>{usuario.cidade}</p>

                    <h5 className="mb-0">Estado:</h5>
                    <p>{usuario.estado}</p>

                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <small className="me-1 fw-bold">Data de Criação:</small>
                            <small className="d-block">{usuario.dataCriacao}</small>
                        </div>

                        {usuario.dataAtualizacao ? 

                            <div className="col-12 col-lg-6 mt-2 mt-lg-0">
                                <small className="me-1 fw-bold">Data de Atualização:</small>
                                <small className="d-block">{usuario.dataAtualizacao}</small>
                            </div>

                            : <></>
                        }
                    </div>

                </div>
                <div className="card-footer">

                    <div className="float-end">
                        <button type="button" className="btn btn-sm btn-primary me-1" onClick={event => onEditar(usuario.id)}><i className="fa-solid fa-user-pen"></i></button>
                        <button type="button" className="btn btn-sm btn-danger" onClick={event => onExcluir(usuario.id)}><i className="fa-solid fa-user-minus"></i></button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Card;
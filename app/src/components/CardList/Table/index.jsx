import React from "react";
import './styles.css';
import { colocaMascaraCEP, colocaMascaraCPF } from "../../../utils/pipes";

const Table = ({ usuarios, onEditar, onExcluir }) => {

    return (
        <div className="col-12">
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>CEP</th>
                            <th>Logradouro</th>
                            <th>Bairro</th>
                            <th>Cidade</th>
                            <th className="text-center">Estado</th>
                            <th className="text-center">Data de Criação</th>
                            <th className="text-center">Data de Alteração</th>
                            <th className="text-center">Opções</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {usuarios.map((usuario) => {
                            return <tr>
                                <td>{usuario.nome}</td>
                                <td>{colocaMascaraCPF(usuario.cpf)}</td>
                                <td>{colocaMascaraCEP(usuario.cep)}</td>
                                <td>{usuario.logradouro}</td>
                                <td>{usuario.bairro}</td>
                                <td>{usuario.cidade}</td>
                                <td className="text-center">{usuario.estado}</td>
                                <td className="text-center">{usuario.dataCriacao}</td>
                                <td className="text-center">{usuario.dataAtualizacao}</td>
                                <td className="text-center">
                                    <button type="button" className="btn btn-sm btn-primary me-1" onClick={e => onEditar(usuario.id)}><i className="fa-solid fa-user-pen"></i></button>
                                    <button type="button" className="btn btn-sm btn-danger" onClick={e => onExcluir(usuario.id)}><i className="fa-solid fa-user-minus"></i></button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table;
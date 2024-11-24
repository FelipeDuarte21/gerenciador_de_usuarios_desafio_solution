import React from "react";
import './styles.css';
import { pipeCPF, pipeCep } from "../../../utils/pipes";
import { FaPenToSquare } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";

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
                                <td>{pipeCPF(usuario.cpf)}</td>
                                <td>{pipeCep(usuario.cep)}</td>
                                <td>{usuario.logradouro}</td>
                                <td>{usuario.bairro}</td>
                                <td>{usuario.cidade}</td>
                                <td className="text-center">{usuario.estado}</td>
                                <td className="text-center">{usuario.dataCriacao}</td>
                                <td className="text-center">{usuario.dataAtualizacao}</td>
                                <td className="text-center">
                                    <button type="button" className="btn btn-sm btn-primary me-1" onClick={e => onEditar(usuario.id)}><FaPenToSquare /></button>
                                    <button type="button" className="btn btn-sm btn-danger" onClick={e => onExcluir(usuario.id)}><FaRegTrashCan /></button>
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
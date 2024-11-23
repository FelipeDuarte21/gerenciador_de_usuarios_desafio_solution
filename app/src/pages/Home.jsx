import React, { useState } from "react";
import Container from "../components/Container";
import Cabecalho from "../components/Cabecalho";
import { FaRegFloppyDisk } from "react-icons/fa6";
import Card from "../components/Card";

const Home = () => {

    const [usuarios, setUsuarios] = useState([
        {
            id: 1,
            nome: 'Luiz Felipe Duarte Elias',
            cpf: '16380658700',
            cep: '21866197',
            logradouro: 'Rua Williams',
            bairro: 'Bangu',
            cidade: 'Rio de Janeiro',
            estado: 'RJ',
            dataCriacao: '22/11/2024 21:15:45',
            dataAtualizacao: null
        }
    ]);

    const onEditar = (id) => {
        console.log(id);
    }

    const onExcluir = (id) => {
        console.log(id);
    }

    return (
        <>
            <Cabecalho />
            <Container>

                <h3 className="text-center mt-4">Endereços</h3>

                <button type="button" className="btn btn-primary my-3">
                    <FaRegFloppyDisk className="me-1"/>Cadastrar
                </button>

                <div className="row my-4">

                    {usuarios.map( (usuario, i) => {
                        return <Card usuario={usuario} key={i} onEditar={onEditar} onExcluir={onExcluir} />
                    })}
                    
                </div>

            </Container>
        </>
    )
}

export default Home;
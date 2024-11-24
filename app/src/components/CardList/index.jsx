import React, { useState } from "react";
import { FaRegFaceSadTear } from "react-icons/fa6";
import Card from "./Card";
import Table from "./Table";
import Spinner from "../Spinner";
import { FaTableList } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa6";



const CardList = ({ usuarios, isLoading, isError, onEditar, onExcluir }) => {

    const [view, setView] = useState('card');

    return (
        <>

            {isLoading && <Spinner />}

            {!isLoading && isError && <>
                <p className="alert alert-danger text-center mt-3">
                    <FaRegFaceSadTear className="me-1" />Ocorreu um erro ao buscar usuários
                </p>
            </>}

            {!isLoading && !isError && <>

                {usuarios.length == 0 && <>
                    <p className="alert alert-warning text-center mt-3">
                        <FaRegFaceSadTear className="me-1" />Nenhum usuário encontrado encontrado
                    </p>
                </>}

                {usuarios.length > 0 && <>
                
                    <div className="my-3 d-flex justify-content-end">
                        <div class="btn-group btn-group-sm">
                            <button type="button" class={`btn btn-outline-primary ${view === 'card' ? 'active' : ''}`} onClick={e => setView('card')}><FaAddressCard className="me-1"/>Card</button>
                            <button type="button" class={`btn btn-outline-primary ${view === 'table' ? 'active' : ''}`} onClick={e => setView('table')}><FaTableList className="me-1"/>Tabela</button>
                        </div>
                    </div>

                    <div className="row my-4">

                        {view === 'card' && usuarios.map((usuario, i) => {
                            return <Card usuario={usuario} key={i} onEditar={onEditar} onExcluir={onExcluir} />
                        })}

                        {view === 'table' &&
                            <Table usuarios={usuarios} onEditar={onEditar} onExcluir={onExcluir} />
                        }

                    </div>
                
                </>}

            </>}

        </>
    );

}

export default CardList;
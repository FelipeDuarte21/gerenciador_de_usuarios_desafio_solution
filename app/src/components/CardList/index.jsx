import React, { useState } from "react";
import Card from "./Card";
import Table from "./Table";
import Spinner from "../Spinner";

const CardList = ({ usuarios, isLoading, isError, onEditar, onExcluir }) => {

    const [view, setView] = useState('card');

    return (
        <>

            {isLoading && <Spinner />}

            {!isLoading && isError && <>
                <p className="alert alert-danger text-center mt-3">
                    Ocorreu um erro ao buscar usuários
                </p>
            </>}

            {!isLoading && !isError && <>

                {usuarios.length == 0 && <>
                    <p className="alert alert-warning text-center mt-3">
                        Nenhum usuário encontrado encontrado
                    </p>
                </>}

                {usuarios.length > 0 && <>
                
                    <div className="my-3 d-flex justify-content-end">
                        <div className="btn-group btn-group-sm">
                            <button type="button" className={`btn btn-outline-primary ${view === 'card' ? 'active' : ''}`} onClick={e => setView('card')}><i className="fa-solid fa-address-card me-1"></i>Card</button>
                            <button type="button" className={`btn btn-outline-primary ${view === 'table' ? 'active' : ''}`} onClick={e => setView('table')}><i className="fa-solid fa-table-list me-1"></i>Tabela</button>
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
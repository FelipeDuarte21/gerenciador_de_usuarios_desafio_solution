import React, { useEffect, useState } from "react";
import Card from "./Card";
import Table from "./Table";
import Spinner from "../Spinner";

const CardList = ({ usuarios, isLoading, isError, onEditar, onExcluir }) => {

    const [view, setView] = useState('card');

    const [usuariosFiltrados, setUsuariosFiltrados] = useState([]);

    const [nomePesquisa, setNomePesquisa] = useState('');

    useEffect(() => {

        setUsuariosFiltrados(usuarios);

    }, [usuarios]);

    
    useEffect(() => {

        if(!usuarios) return;

        const filtro = usuarios.filter((item) =>
            item.nome.toLowerCase().includes(nomePesquisa.toLowerCase())
        );

        setUsuariosFiltrados(filtro);

    }, [nomePesquisa] );


    return (
        <>

            {isLoading && <Spinner />}

            {!isLoading && isError && <>
                <p className="alert alert-danger text-center mt-3">
                    Ocorreu um erro ao buscar usuários
                </p>
            </>}

            {!isLoading && !isError && <>

                {usuarios == null || usuarios.length == 0 && <>
                    <p className="alert alert-warning text-center mt-3">
                        <i className="fa-solid fa-face-sad-tear me-1"></i>Nenhum usuário cadastrado no momento!
                    </p>
                </>}

                {usuarios && usuarios.length > 0 && <>
                
                    <div className="my-3 d-flex justify-content-end">
                        <div className="btn-group btn-group-sm">
                            <button type="button" className={`btn btn-outline-primary ${view === 'card' ? 'active' : ''}`} onClick={e => setView('card')}><i className="fa-solid fa-address-card me-1"></i>Card</button>
                            <button type="button" className={`btn btn-outline-primary ${view === 'table' ? 'active' : ''}`} onClick={e => setView('table')}><i className="fa-solid fa-table-list me-1"></i>Tabela</button>
                        </div>
                    </div>

                    <form className="my-4">
                        <div className="row">
                            <div className="col-12">
                                <input type="text" className="form-control" placeholder="Pesquisar por nome..." value={nomePesquisa} onChange={e => setNomePesquisa(e.target.value)} />
                            </div>
                        </div>
                    </form>

                </>}

                {usuariosFiltrados != null && usuariosFiltrados.length > 0 && <>

                    <div className="row justify-content-center mb-3">

                        {view === 'card' && usuariosFiltrados.map((usuario, i) => {
                            return <Card usuario={usuario} key={i} onEditar={onEditar} onExcluir={onExcluir} />
                        })}

                        {view === 'table' &&
                            <Table usuarios={usuariosFiltrados} onEditar={onEditar} onExcluir={onExcluir} />
                        }

                    </div>
                
                </>}

                {usuarios.length > 0 && usuariosFiltrados != null && usuariosFiltrados.length == 0 && <>
                    <p className="text-center text-secondary mt-5">Nenhum usuário econtrado!!</p>
                </>}

            </>}

        </>
    );

}

export default CardList;
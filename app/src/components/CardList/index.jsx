import React from "react";
import { FaRegFaceSadTear } from "react-icons/fa6";
import Card from "./Card";
import Spinner from "../Spinner";

const CardList = ({ usuarios, isLoading, isError, onEditar, onExcluir }) => {


    return (
        <>

            {isLoading && <Spinner/>}

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

                <div className="row my-4">

                    {usuarios.map((usuario, i) => {
                        return <Card usuario={usuario} key={i} onEditar={onEditar} onExcluir={onExcluir} />
                    })}

                </div>

            </>}

        </>
    );

}

export default CardList;
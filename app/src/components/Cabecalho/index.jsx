import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import { getNameUser } from "../../services/localStorage";

const Cabecalho = () => {

    const [nameUser, setNameUser] = useState('');

    const { isAutentication, logout } = useAuth();

    const navigate = useNavigate();

    const onLogout = () => {
        logout();
        navigate("/");
    }

    useEffect(() => {

        if(isAutentication) {
            setNameUser(getNameUser());
        }

    }, [isAutentication])

    return (
        <nav className="navbar bg-primary">
            <div className="container">
                <Link className="navbar-brand text-white" to="/"><i className="fa-solid fa-users me-1"></i>Gerenciamento de Usuários</Link>
                
                {isAutentication && <>
                    <div className="d-sm-flex  justify-content-end align-items-center">
                        <div className="align-middle text-light me-2"><i className="fa-regular fa-user me-1"></i>{nameUser}</div>
                        <button type="button" className="btn btn-outline-light mt-1 mt-sm-0" onClick={e => onLogout()} ><i className="fa-solid fa-right-from-bracket me-1"></i>Sair</button>
                    </div>
                </>}
            </div>
        </nav>
    )
}

export default Cabecalho;
import React from "react";
import { Link } from "react-router-dom";
import { FaUserGroup } from "react-icons/fa6";

const Cabecalho = () => {
    return (
        <nav className="navbar bg-primary">
            <div className="container">
                <Link className="navbar-brand text-white" to="/"><FaUserGroup className="me-1" />Gerenciamento de Usuários</Link>
            </div>
        </nav>
    )
}

export default Cabecalho;
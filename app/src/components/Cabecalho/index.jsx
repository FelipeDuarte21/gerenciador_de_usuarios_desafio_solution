import React from "react";
import { Link } from "react-router-dom";

const Cabecalho = () => {
    return (
        <nav className="navbar bg-primary">
            <div className="container">
                <Link className="navbar-brand text-white" to="/">Gerenciamento de Usuários</Link>
            </div>
        </nav>
    )
}

export default Cabecalho;
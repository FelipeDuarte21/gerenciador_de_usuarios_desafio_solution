import React from "react";
import { Link } from "react-router-dom";

const Cabecalho = () => {
    return (
        <nav className="navbar bg-primary">
            <div className="container">
                <Link className="navbar-brand" to="/">Solution</Link>
            </div>
        </nav>
    )
}

export default Cabecalho;
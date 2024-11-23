import React from "react";

const Spinner = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-grow" role="status">
                <span className="visually-hidden">Carregando...</span>
            </div>
        </div>
    )
}

export default Spinner;
import React from "react";

const Spinner = () => {
    return (
        <div className="d-flex justify-content-center">
            <div class="spinner-grow" role="status">
                <span class="visually-hidden">Carregando...</span>
            </div>
        </div>
    )
}

export default Spinner;
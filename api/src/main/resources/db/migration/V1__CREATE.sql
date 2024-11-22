CREATE TABLE USUARIOS(
    id BIGSERIAL PRIMARY KEY,
    nome VARCHAR(60) NOT NULL,
    cpf VARCHAR(11),
    cep VARCHAR(8) NOT NULL,
    logradouro VARCHAR(60) NOT NULL,
    bairro VARCHAR(30) NOT NULL,
    cidade VARCHAR(30) NOT NULL,
    estado VARCHAR(2) NOT NULL,
    data_criacao TIMESTAMP NOT NULL,
    data_atualizacao TIMESTAMP
);
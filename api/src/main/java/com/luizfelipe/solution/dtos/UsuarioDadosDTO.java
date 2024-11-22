package com.luizfelipe.solution.dtos;

public record UsuarioDadosDTO(
    String nome,
    String cpf,
    String cep,
    String logradouro,
    String bairro,
    String cidade,
    String estado
) {}

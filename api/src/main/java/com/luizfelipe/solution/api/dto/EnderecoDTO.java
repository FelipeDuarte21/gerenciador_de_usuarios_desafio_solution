package com.luizfelipe.solution.api.dto;

public record EnderecoDTO(
    String cep, String logradouro,String bairro, 
    String cidade, String estado
) {}

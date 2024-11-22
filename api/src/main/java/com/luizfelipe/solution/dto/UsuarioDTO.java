package com.luizfelipe.solution.dto;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonFormat;

public record UsuarioDTO(
    String nome,
    String cpf,
    String cep,
    String logradouro,
    String bairro,
    String cidade,
    String estado,
    
    @JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    LocalDateTime dataCriacao,
    
    @JsonFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    LocalDateTime dataAtualizacao
) {}

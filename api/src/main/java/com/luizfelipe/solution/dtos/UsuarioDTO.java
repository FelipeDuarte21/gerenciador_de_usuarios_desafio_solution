package com.luizfelipe.solution.dtos;

import java.time.LocalDateTime;

public record UsuarioDTO(
    String nome,
    String cpf,
    String cep,
    String logradouro,
    String bairro,
    String cidade,
    String estado,
    LocalDateTime dataCriacao,
    LocalDateTime dataAtualizacao
) {}

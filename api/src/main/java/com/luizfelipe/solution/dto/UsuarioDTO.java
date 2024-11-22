package com.luizfelipe.solution.dto;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.luizfelipe.solution.entity.Usuario;

public record UsuarioDTO(
    Long id,
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
) {

    public UsuarioDTO(Usuario usuario) {
        this(usuario.getId(), usuario.getNome(), usuario.getCpf(), usuario.getCep(), 
        usuario.getLogradouro(), usuario.getBairro(), usuario.getCidade(), usuario.getEstado(), 
            usuario.getDataCriacao(), usuario.getDataAtualizacao());
    }

}

package com.luizfelipe.solution.api.dto;

public record TokenDTO(
    String token,
	String tipo,
	Long idUsuario,
	String nome,
	String email
) {}

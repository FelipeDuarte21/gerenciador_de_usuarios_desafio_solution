package com.luizfelipe.solution.dto;

import org.hibernate.validator.constraints.Length;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

public record UsuarioDadosDTO(
    @NotBlank
    @Length(min = 3, max = 60, message = "Nome deve ter no mínimo {min} e no máximo {max} caracteres!" )
    String nome,

    @NotBlank
    @Pattern(regexp = "^\\d{11}$", message = "Por favor insira o CPF sem pontos e traços e com 11 caracteres!")
    String cpf,

    @NotBlank
    @Pattern(regexp = "^\\d{8}$", message = "Por favor insira o CEP sem pontos e traços e com 8 caracteres!")
    String cep,

    @NotBlank
    @Length(min = 3, max = 60, message = "Logradouro deve ter no mínimo {min} e no máximo {max} caracteres!")
    String logradouro,

    @NotBlank
    @Length(min = 3, max = 30, message = "Bairro deve ter no mínimo {min} e no máximo {max} caracteres!")
    String bairro,

    @NotBlank
    @Length(min = 3, max = 30, message = "Bairro deve ter no mínimo {min} e no máximo {max} caracteres!")
    String cidade,

    @NotBlank
    @Pattern(regexp = "^[A-Z]{2}$", message = "Estado deve ter duas letras maiúscula ex: RJ ; SP !")
    String estado
) {}

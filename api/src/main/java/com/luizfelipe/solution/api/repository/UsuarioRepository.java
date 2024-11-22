package com.luizfelipe.solution.api.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.luizfelipe.solution.api.entity.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    Optional<Usuario> findByCpf(String cpf);

}

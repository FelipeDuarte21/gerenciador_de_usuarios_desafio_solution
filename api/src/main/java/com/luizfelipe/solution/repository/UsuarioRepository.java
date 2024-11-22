package com.luizfelipe.solution.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.luizfelipe.solution.entity.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    Optional<Usuario> findByCpf(String cpf);

}

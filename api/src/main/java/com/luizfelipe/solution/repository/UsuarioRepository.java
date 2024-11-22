package com.luizfelipe.solution.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.luizfelipe.solution.entity.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

}

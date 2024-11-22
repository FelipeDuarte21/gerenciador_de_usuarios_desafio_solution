package com.luizfelipe.solution.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.luizfelipe.solution.dtos.UsuarioDTO;
import com.luizfelipe.solution.dtos.UsuarioDadosDTO;
import com.luizfelipe.solution.repository.UsuarioRepository;

@Service
public class UsuarioService {

    private UsuarioRepository repository;

    public UsuarioService(UsuarioRepository repository){
        this.repository = repository;
    }

    public UsuarioDTO cadastrar(UsuarioDadosDTO dados){
        return null;
    }

    public UsuarioDTO alterar(UsuarioDadosDTO dados, Long id) {
        return null;
    }

    public UsuarioDTO buscarPorId(Long id){
        return null;
    }

    public void excluir(Long id) {

    }

    public List<UsuarioDTO> listar(){
        return null;
    }

}

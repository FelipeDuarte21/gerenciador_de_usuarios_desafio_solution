package com.luizfelipe.solution.service;

import java.util.Optional;
import java.util.List;

import org.springframework.stereotype.Service;

import com.luizfelipe.solution.dto.UsuarioDTO;
import com.luizfelipe.solution.dto.UsuarioDadosDTO;
import com.luizfelipe.solution.entity.Usuario;
import com.luizfelipe.solution.repository.UsuarioRepository;
import com.luizfelipe.solution.service.exception.IllegalParameterException;

@Service
public class UsuarioService {

    private UsuarioRepository repository;

    public UsuarioService(UsuarioRepository repository){
        this.repository = repository;
    }

    public UsuarioDTO cadastrar(UsuarioDadosDTO dados){
        
        Optional<Usuario> optUsuario = this.repository.findByCpf(dados.cpf());

        if(optUsuario.isPresent()) throw new IllegalParameterException("Erro! o CPF informado já está cadastrado!");

        Usuario usuario = new Usuario(dados);

        this.repository.save(usuario);

        return new UsuarioDTO(usuario);
        
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

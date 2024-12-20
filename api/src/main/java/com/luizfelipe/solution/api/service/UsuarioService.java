package com.luizfelipe.solution.api.service;

import java.util.Optional;
import java.util.stream.Collectors;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.luizfelipe.solution.api.dto.UsuarioDTO;
import com.luizfelipe.solution.api.dto.UsuarioDadosDTO;
import com.luizfelipe.solution.api.entity.Usuario;
import com.luizfelipe.solution.api.repository.UsuarioRepository;
import com.luizfelipe.solution.api.service.exception.IllegalParameterException;
import com.luizfelipe.solution.api.service.exception.ObjectNotFoundFromParameterException;

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
        
        Optional<Usuario> optUsuario = this.repository.findById(id);

        if(optUsuario.isEmpty()) throw new ObjectNotFoundFromParameterException("Erro! Usuário não encontrado para o Id informado!");

        Usuario usuario = optUsuario.get();

        if (!usuario.getCpf().equals(dados.cpf())) {    
            if (this.repository.findByCpf(dados.cpf()).isPresent()) throw new IllegalParameterException("Erro! o CPF informado já está cadastrado!");
        }

        usuario.setNome(dados.nome());
        usuario.setCpf(dados.cpf());
        usuario.setCep(dados.cep());
        usuario.setLogradouro(dados.logradouro());
        usuario.setBairro(dados.bairro());
        usuario.setCidade(dados.cidade());
        usuario.setEstado(dados.estado());
        usuario.setDataAtualizacao(LocalDateTime.now());
        
        this.repository.save(usuario);

        return new UsuarioDTO(usuario);

    }

    public UsuarioDTO buscarPorId(Long id){
        
        Optional<Usuario> optUsuario = this.repository.findById(id);

        if(optUsuario.isEmpty()) throw new ObjectNotFoundFromParameterException("Erro! Usuário não encontrado para o Id informado!");

        return new UsuarioDTO(optUsuario.get());

    }

    public void excluir(Long id) {

        Optional<Usuario> optUsuario = this.repository.findById(id);

        if(optUsuario.isEmpty()) throw new ObjectNotFoundFromParameterException("Erro! Usuário não encontrado para o Id informado!");

        this.repository.delete(optUsuario.get());

    }

    public List<UsuarioDTO> listar(){
   
        List<Usuario> usuarios = this.repository.findAll(Sort.by(Sort.Direction.ASC, "nome"));

        return usuarios.stream().map(UsuarioDTO::new).collect(Collectors.toList());

    }

}

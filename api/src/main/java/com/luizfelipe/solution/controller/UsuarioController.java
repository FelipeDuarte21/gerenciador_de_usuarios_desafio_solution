package com.luizfelipe.solution.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.luizfelipe.solution.controller.exception.ObjectBadRequestException;
import com.luizfelipe.solution.controller.exception.ObjectNotFoundException;
import com.luizfelipe.solution.dto.UsuarioDTO;
import com.luizfelipe.solution.dto.UsuarioDadosDTO;
import com.luizfelipe.solution.service.UsuarioService;
import com.luizfelipe.solution.service.exception.IllegalParameterException;
import com.luizfelipe.solution.service.exception.ObjectNotFoundFromParameterException;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/usuario")
public class UsuarioController {

    private UsuarioService service;

    public UsuarioController(UsuarioService service){
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<UsuarioDTO> cadastrar(@RequestBody @Valid UsuarioDadosDTO dados, 
        UriComponentsBuilder uriBuilder){

        try{

            UsuarioDTO usuario = this.service.cadastrar(dados);

            var uri = uriBuilder.path("/api/v1/usuario/{id}").buildAndExpand(usuario.id()).toUri();

            return ResponseEntity.created(uri).body(usuario);

        }catch(IllegalParameterException ex){
            throw new ObjectBadRequestException(ex.getMessage());
            
        }

    }

    @PutMapping("/{id}")
    public ResponseEntity<UsuarioDTO> alterar(@RequestBody @Valid UsuarioDadosDTO dados, @PathVariable Long id) {
        
        try{

            UsuarioDTO usuario = this.service.alterar(dados, id);

            return ResponseEntity.ok().body(usuario);

        }catch(ObjectNotFoundFromParameterException ex){
            throw new ObjectNotFoundException(ex.getMessage());
        
        }catch(IllegalParameterException ex){
            throw new ObjectBadRequestException(ex.getMessage());

        }

    }

    @GetMapping("/{id}")
    public ResponseEntity<UsuarioDTO> buscarPorId(@PathVariable Long id){
        
        try{

            UsuarioDTO usuario = this.service.buscarPorId(id);

            return ResponseEntity.ok().body(usuario);

        }catch(ObjectNotFoundFromParameterException ex){
            throw new ObjectNotFoundException(ex.getMessage());

        }

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> excluir(@PathVariable Long id) {
        
        try{

            this.service.excluir(id);

            return ResponseEntity.ok().build();

        }catch(ObjectNotFoundFromParameterException ex){
            throw new ObjectNotFoundException(ex.getMessage());

        }

    }

    @GetMapping()
    public ResponseEntity<List<UsuarioDTO>> listar(){
        
        List<UsuarioDTO> usuarios = this.service.listar();

        return ResponseEntity.ok().body(usuarios);

    }

}

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
import com.luizfelipe.solution.dto.UsuarioDTO;
import com.luizfelipe.solution.dto.UsuarioDadosDTO;
import com.luizfelipe.solution.service.UsuarioService;
import com.luizfelipe.solution.service.exception.IllegalParameterException;

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
    public ResponseEntity<UsuarioDTO> alterar(@RequestBody @Valid UsuarioDadosDTO dados, @PathVariable(name = "id") Long id) {
        return null;
    }

    @GetMapping("/{id}")
    public ResponseEntity<UsuarioDTO> buscarPorId(@PathVariable(name = "id") Long id){
        return null;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> excluir(@PathVariable(name = "id") Long id) {
        return null;
    }

    @GetMapping()
    public ResponseEntity<List<UsuarioDTO>> listar(){
        return null;
    }

}

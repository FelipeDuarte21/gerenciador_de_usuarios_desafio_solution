package com.luizfelipe.solution.api.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.luizfelipe.solution.api.controller.exception.ObjectBadRequestException;
import com.luizfelipe.solution.api.dto.EnderecoDTO;
import com.luizfelipe.solution.api.service.EnderecoService;
import com.luizfelipe.solution.api.service.exception.IllegalParameterException;

@RestController
@RequestMapping("/api/v1/endereco")
public class EnderecoController {

    private EnderecoService service;

    public EnderecoController(EnderecoService service){
        this.service = service;
    }

    @GetMapping("/consulta/{cep}")
    public ResponseEntity<EnderecoDTO> consultarEnderecoPorCep(@PathVariable String cep){

        try{

            EnderecoDTO endereco = this.service.consultarEnderecoPorCep(cep);

            return ResponseEntity.ok().body(endereco);

        }catch(IllegalParameterException ex){
            throw new ObjectBadRequestException(ex.getMessage());
        }

    }

}

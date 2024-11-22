package com.luizfelipe.solution.api.service;

import org.springframework.stereotype.Service;

import com.luizfelipe.solution.api.dto.EnderecoDTO;
import com.luizfelipe.solution.api.service.exception.IllegalParameterException;
import com.luizfelipe.solution.apiviacep.DadosViaCEP;
import com.luizfelipe.solution.apiviacep.ViaCep;

@Service
public class EnderecoService {

    private ViaCep viaCep;

    public EnderecoService(ViaCep viaCep){
        this.viaCep = viaCep;
    }

    public EnderecoDTO consultarEnderecoPorCep(String cep){

        try{
       
            DadosViaCEP dadosViaCEP = this.viaCep.consultarCEP(cep);

            EnderecoDTO endereco = new EnderecoDTO(dadosViaCEP.cep(), 
                dadosViaCEP.logradouro(), dadosViaCEP.bairro(), 
                    dadosViaCEP.localidade(), dadosViaCEP.uf());

            return endereco;
       
        }catch(IllegalArgumentException ex){
            throw new IllegalParameterException(ex.getMessage());
        }

    }

}

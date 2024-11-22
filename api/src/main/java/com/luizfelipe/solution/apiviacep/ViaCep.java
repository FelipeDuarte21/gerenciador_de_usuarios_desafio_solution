package com.luizfelipe.solution.apiviacep;

import org.springframework.stereotype.Component;

@Component
public class ViaCep {

    public ViaCepService service;

    public ViaCep(ViaCepService service){
        this.service = service;
    }

    public DadosViaCEP consultarCEP(String cep) {

        return this.service.consultarCEP(cep);

    }

}

package com.luizfelipe.solution.apiviacep;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ViaCepService {

    public DadosViaCEP consultarCEP(String cep) {

        if (!cep.matches("^\\d{8}$")) 
            throw new IllegalArgumentException("Erro! cep fora do formato esperado: cep com 8 digitos sem ponto e traço.");

        String url = String.format( "https://viacep.com.br/ws/%s/json/", cep);
        
        RestTemplate template = new RestTemplate();
            
        ResponseEntity<DadosViaCEP> resp = 
            template.getForEntity(url, DadosViaCEP.class); 
        
        return resp.getBody();

    }

}

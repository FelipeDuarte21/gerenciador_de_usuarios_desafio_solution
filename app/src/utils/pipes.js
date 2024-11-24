export const pipeCPF = (cpf) => {
    let cpfMascarado = '';
    for(let i=0; i < cpf.length ; i++) {
        cpfMascarado += cpf[i]
        if(i == 2 || i==5) {
            cpfMascarado += ".";
        }
        if(i == 8) {
            cpfMascarado += "-";
        }
    }
    return cpfMascarado;
}

export const pipeCep = (cep) => {
    let cepMascarado = '';
    for(let i=0; i < cep.length ; i++) {
        cepMascarado += cep[i]
        if(i == 1) {
            cepMascarado += ".";
        }
        if(i == 4) {
            cepMascarado += "-";
        }
    }
    return cepMascarado;
}

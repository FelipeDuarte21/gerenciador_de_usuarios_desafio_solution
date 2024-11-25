import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { FaRegFloppyDisk } from "react-icons/fa6";
import useEndereco from '../../hooks/useEndereco';
import Spinner from '../Spinner';
import { useQueryClient } from 'react-query';
import Field from "../Field";
import { tiraMascaraCPF , tiraMascaraCEP } from "../../utils/pipes";
import useDebounced from "../../hooks/useDebounced";

const FormCadastro = ({ onReceberDados }) => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    
    const [valueCep, setValueCep] = useState('');
    
    const debouncedValue = useDebounced(valueCep);
    
    const [ valueSearchCep, setValueSearchCep ] = useState(undefined);
    
    const { data, isLoading, refetch } = useEndereco(valueSearchCep);

    const queryClient = useQueryClient();

    const onSubmit = (dados) => {
        dados = {...dados, cep: tiraMascaraCEP(dados.cep), cpf: tiraMascaraCPF(dados.cpf)};
        onReceberDados(dados);
        queryClient.setQueriesData('endereco-data', undefined);
    }

    
    useEffect(() => {

        let value = tiraMascaraCEP(debouncedValue);
        
        if(value.match("^\\d{8}$")){
            setValueSearchCep(value);
            refetch();
        }

    }, [debouncedValue])

    useEffect(() => {
    
        if(data) {
            setValue('logradouro', data.logradouro);
            setValue('bairro', data.bairro);
            setValue('cidade', data.cidade);
            setValue('estado', data.estado);
        }

        console.log(data);

    }, [data]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <Field nameField="nome" label="Nome" register={register} errors={errors}
                validation={{
                    required: { value: true, message: "Nome é requerido !" },
                    minLength: { value: 3, message: 'Nome tem que ter pelo menos 3 caracteres!'  },
                    maxLength: { value: 60, message: 'Nome não pode passar de 60 caracteres!' }
                }} 
            />

            <div className="row mt-2">

                <div className="col-12 col-md-6">

                    <Field nameField="cpf" label="CPF" register={register} errors={errors} 
                        isInputMask={true}  mask="999.999.999-99" validation={{
                            required: { value: true,  message: 'CPF é requerido!'}
                        }} 
                    />

                </div>

                <div className="col-12 col-md-6">
                    <Field nameField="cep" label="CEP" register={register} errors={errors} 
                        isInputMask={true} mask="99.999-999" onChangeHandler={(value) => { setValueCep(value) }} valueInput={valueCep}
                        validation={{
                            required: { value: true,  message: 'CEP é requerido' } 
                        }} 
                    />
                </div>

            </div>

            {isLoading && 
                <div className="d-flex justify-content-center my-3">
                    <Spinner className="mt-3" />
                </div>
            }

            {!isLoading && 
                <>
                    <div className="row mt-4">

                        <div className="col-12 col-md-8">
                            <Field nameField="logradouro" label="Logradouro" register={register} errors={errors} validation={{}} isReadOnly={true} />
                        </div>

                        <div className="col-12 col-md-4">
                            <Field nameField="bairro" label="Bairro" register={register} errors={errors} validation={{}} isReadOnly={true}/>
                        </div>

                    </div>

                    <div className="row mt-3">

                        <div className="col-12 col-md-9">
                            <Field nameField="cidade" label="Cidade" register={register} errors={errors} validation={{}} isReadOnly={true} />
                        </div>

                        <div className="col-12 col-md-3">
                            <Field nameField="estado" label="Estado" register={register} errors={errors} validation={{}} isReadOnly={true} />
                        </div>

                    </div>
                </>
            }


            <button type="submit" className="btn btn-primary mt-4">
                <FaRegFloppyDisk className="me-1" />Cadastrar
            </button>

        </form>
    )
}

export default FormCadastro;
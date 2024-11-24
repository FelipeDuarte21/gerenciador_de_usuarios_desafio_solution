import React, { useEffect } from "react";
import { useForm } from 'react-hook-form';
import { FaRegFloppyDisk } from "react-icons/fa6";
import Field from "../Field";
import { tiraMascaraCPF } from "../../utils/pipes";

const FormAtualiza = ({ dados, onReceberDados }) => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    const onSubmit = (dados) => {
        dados = {...dados, cpf: tiraMascaraCPF(dados.cpf)};
        onReceberDados(dados);
    }

    useEffect(() => {

        if(dados) {
            setValue('nome', dados.nome);
            setValue('cpf', dados.cpf);
            setValue('cep', dados.cep);
            setValue('logradouro', dados.logradouro);
            setValue('bairro', dados.bairro);
            setValue('cidade', dados.cidade);
            setValue('estado', dados.estado);
        }

    }, [dados])

    return (

        <form onSubmit={handleSubmit(onSubmit)}>

            <Field nameField="nome" label="Nome" register={register} errors={errors} 
                validation={{
                    required: { value: true, message: "Nome é requerido !" },
                    minLength: { value: 3, message: 'Nome tem que ter pelo menos 3 caracteres!' },
                    maxLength: { value: 60, message: 'Nome não pode passar de 60 caracteres!'}
                }}
            />

            <div className="row mt-2">

                <div className="col-12 col-md-6">
                    <Field nameField="cpf" label="CPF" register={register} errors={errors} 
                        isInputMask={true}  mask="999.999.999-99" 
                            validation={{ required: { value: true,  message: 'CPF é requerido!'}}} />
                </div>

                <div className="col-12 col-md-6">
                    <Field nameField="cep" label="CEP" register={register} errors={errors} 
                        validation={{
                            required: { value: true,  message: 'CEP é requerido' },
                            pattern: { value: /^[0-9]{8}$/, message: "CEP fora do formato padrão de 8 digitos" }
                        }} />
                </div>

            </div>


            <div className="row mt-4">

                <div className="col-12 col-md-8">
                    <Field nameField="logradouro" label="Logradouro" register={register} errors={errors} 
                        validation={{ required: { value: true,  message: 'Logradouro é requerido!'}}} />
                </div>

                <div className="col-12 col-md-4">
                    <Field nameField="bairro" label="Bairro" register={register} errors={errors} 
                        validation={{ required: { value: true,  message: 'Bairro é requerido!' }}} />
                </div>

            </div>

            <div className="row mt-3">

                <div className="col-12 col-md-9">
                    <Field nameField="cidade" label="Cidade" register={register} errors={errors} 
                        validation={{required: { value: true,  message: 'Cidade é requerido!'}}} />
                </div>

                <div className="col-12 col-md-3">
                    <Field nameField="estado" label="Estado" register={register} errors={errors} 
                        validation={{required: { value: true,  message: 'Estado é requerido!' }}} />
                </div>

            </div>

            <button type="submit" className="btn btn-primary mt-4">
                <FaRegFloppyDisk className="me-1" />Atualizar
            </button>

        </form>

    );
}

export default FormAtualiza;
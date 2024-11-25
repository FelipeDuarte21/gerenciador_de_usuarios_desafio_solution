import React, { useEffect } from "react";
import { useForm } from 'react-hook-form';
import Field from "../Field";
import { colocaMascaraCEP, colocaMascaraCPF, tiraMascaraCPF, tiraMascaraCEP } from "../../utils/pipes";

const FormAtualiza = ({ dados, onReceberDados }) => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    const onSubmit = (dados) => {
        dados = {...dados, cep: tiraMascaraCEP(dados.cep), cpf: tiraMascaraCPF(dados.cpf)};
        console.log(dados);
        onReceberDados(dados);
    }

    useEffect(() => {

        if(dados) {
            setValue('nome', dados.nome);
            setValue('cpf', colocaMascaraCPF(dados.cpf));
            setValue('cep', colocaMascaraCEP(dados.cep));
            setValue('logradouro', dados.logradouro);
            setValue('bairro', dados.bairro);
            setValue('cidade', dados.cidade);
            setValue('estado', dados.estado);
        }

    })

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
                        isInputMask={true}  mask="999.999.999-99" validation={{ 
                            required: { value: true,  message: 'CPF é requerido!'}
                        }} 
                    />
                </div>

                <div className="col-12 col-md-6">
                    <Field nameField="cep" label="CEP" register={register} errors={errors} 
                        isInputMask={true} mask="99.999-999"
                        validation={{
                            required: { value: true,  message: 'CEP é requerido' },
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
                <i className="fa-solid fa-floppy-disk me-1"></i>Atualizar
            </button>

        </form>

    );
}

export default FormAtualiza;
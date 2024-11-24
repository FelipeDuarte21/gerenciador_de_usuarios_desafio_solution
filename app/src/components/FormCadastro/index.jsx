import React, { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import { useForm } from 'react-hook-form';
import { FaRegFloppyDisk } from "react-icons/fa6";
import useEndereco from '../../hooks/useEndereco';
import Spinner from '../Spinner';
import { useQueryClient } from 'react-query';

const FormCadastro = ({ onReceberDados }) => {

    const { register, handleSubmit, setValue, formState: { errors }, watch, reset } = useForm();
    
    const [ debouncedCep, setDebouncedCep ] = useState('');

    const inputCep = watch('cep');

    const { data, isLoading } = useEndereco(debouncedCep);

    const queryClient = useQueryClient();

    const onSubmit = (dados) => {
        dados = {...dados, cpf: trataCPF(dados.cpf)};
        onReceberDados(dados);
        queryClient.setQueriesData('endereco-data', undefined);
    }

    const trataCPF = (cpf) => {
        return cpf.replace(".", "").replace(".", "")
            .replace(".", "").replace("-", "");
    }

    useEffect(() => {

        const timeout = setTimeout(() => {
            setDebouncedCep(inputCep)
        }, 500);

        return () => { clearTimeout(timeout) };

    }, [inputCep])

    useEffect(() => {
        
        if(data) {
            setValue('logradouro', data.logradouro);
            setValue('bairro', data.bairro);
            setValue('cidade', data.cidade);
            setValue('estado', data.estado);
        }

    }, [data]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <label htmlFor="nome" className="form-label mb-0">Nome:</label>
            <input id="nome" type="text" className={`form-control ${errors.nome ? 'is-invalid' : ''}`}
                {...register('nome', {
                    required: {
                        value: true,
                        message: "Nome é requerido !"
                    },
                    minLength: {
                        value: 3,
                        message: 'Nome tem que ter pelo menos 3 caracteres!'
                    },
                    maxLength: {
                        value: 60,
                        message: 'Nome não pode passar de 60 caracteres!'
                    }
                })}
            />
            {errors.nome &&
                <>
                    <div id="nomeFeedback" className="invalid-feedback">
                        {errors.nome.message}
                    </div>
                </>
            }

            <div className="row mt-2">

                <div className="col-12 col-md-6">
                    <label htmlFor="cpf" className="form-label mb-0">CPF:</label>
                    <InputMask id="cpf" mask="999.999.999-99" className={`form-control ${errors.cpf ? 'is-invalid' : ''}`}
                        {...register('cpf', {
                            required: {
                                value: true,
                                message: 'CPF é requerido!'
                            }
                        })}
                    />
                    {errors.cpf &&
                        <>
                            <div className="invalid-feedback">
                                {errors.cpf.message}
                            </div>
                        </>
                    }
                </div>

                <div className="col-12 col-md-6">
                    <label htmlFor="cep" className="form-label mb-0 mt-3 mt-md-0">CEP:</label>
                    <input id="cep" className={`form-control ${errors.cep ? 'is-invalid' : ''}`}
                        {...register('cep', {
                            required: {
                                value: true,
                                message: 'CEP é requerido'
                            },
                            pattern: {
                                value: /^[0-9]{8}$/,
                                message: "CEP fora do formato padrão de 8 digitos"
                            }
                        })}
                    />
                    {errors.cep &&
                        <>
                            <div className="invalid-feedback">
                                {errors.cep.message}
                            </div>
                        </>
                    }
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
                            <label htmlFor="logradouro" className="form-label mb-0">Logradouro:</label>
                            <input id="logradouro" type="text" className="form-control" {...register('logradouro')} readOnly />
                        </div>

                        <div className="col-12 col-md-4">
                            <label htmlFor="Bairro" className="form-label mb-0 mt-3 mt-md-0">Bairro:</label>
                            <input id="bairro" type="text" className="form-control" {...register('bairro')}  readOnly/>
                        </div>

                    </div>

                    <div className="row mt-3">

                        <div className="col-12 col-md-9">
                            <label htmlFor="cidade" className="form-label mb-0">Cidade:</label>
                            <input id="cidade" type="text" className="form-control" {...register('cidade')}  readOnly/>
                        </div>

                        <div className="col-12 col-md-3">
                            <label htmlFor="estado" className="form-label mb-0 mt-3 mt-md-0">Estado:</label>
                            <input id="estado" type="text" className="form-control" {...register('estado')} readOnly />
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
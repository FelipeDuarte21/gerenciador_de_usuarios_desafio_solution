import React, { useEffect } from "react";
import InputMask from 'react-input-mask';
import { useForm } from 'react-hook-form';
import { FaRegFloppyDisk } from "react-icons/fa6";

const FormAtualiza = ({ dados, onReceberDados }) => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    const onSubmit = (dados) => {
        dados = {...dados, cpf: trataCPF(dados.cpf)};
        onReceberDados(dados);
    }

    const trataCPF = (cpf) => {
        return cpf.replace(".", "").replace(".", "")
            .replace(".", "").replace("-", "");
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


            <div className="row mt-4">

                <div className="col-12 col-md-8">
                    <label htmlFor="logradouro" className="form-label mb-0">Logradouro:</label>
                    <input id="logradouro" type="text" className={`form-control ${errors.logradouro ? 'is-invalid' : ''}`}
                        {...register('logradouro', {
                            required: {
                                value: true,
                                message: 'Logradouro é requerido!'
                            }
                        })}
                    />
                    {errors.logradouro &&
                        <>
                            <div className="invalid-feedback">
                                {errors.logradouro.message}
                            </div>
                        </>
                    }
                </div>

                <div className="col-12 col-md-4">
                    <label htmlFor="Bairro" className="form-label mb-0 mt-3 mt-md-0">Bairro:</label>
                    <input id="bairro" type="text" className={`form-control ${errors.bairro ? 'is-invalid' : ''}`}
                        {...register('bairro', {
                            required: {
                                value: true,
                                message: 'Bairro é requerido!'
                            }
                        })}
                    />
                    {errors.bairro &&
                        <>
                            <div className="invalid-feedback">
                                {errors.bairro.message}
                            </div>
                        </>
                    }
                </div>

            </div>

            <div className="row mt-3">

                <div className="col-12 col-md-9">
                    <label htmlFor="cidade" className="form-label mb-0">Cidade:</label>
                    <input id="cidade" type="text" className={`form-control ${errors.cidade ? 'is-invalid' : ''}`}
                        {...register('cidade', {
                            required: {
                                value: true,
                                message: 'Cidade é requerido!'
                            }
                        })}
                    />
                    {errors.cidade &&
                        <>
                            <div className="invalid-feedback">
                                {errors.cidade.message}
                            </div>
                        </>
                    }
                </div>

                <div className="col-12 col-md-3">
                    <label htmlFor="estado" className="form-label mb-0 mt-3 mt-md-0">Estado:</label>
                    <input id="estado" type="text" className={`form-control ${errors.estado ? 'is-invalid' : ''}`}
                        {...register('estado', {
                            required: {
                                value: true,
                                message: 'Estado é requerido!'
                            },
                            pattern: {
                                value: /^[A-Z]{2}$/,
                                message: "Estado deve se a abreviação do Estado ex: RJ, SP, MG"
                            }
                        })}
                    />
                    {errors.estado &&
                        <>
                            <div className="invalid-feedback">
                                {errors.estado.message}
                            </div>
                        </>
                    }
                </div>

            </div>

            <button type="submit" className="btn btn-primary mt-4">
                <FaRegFloppyDisk className="me-1" />Atualizar
            </button>

        </form>

    );
}

export default FormAtualiza;
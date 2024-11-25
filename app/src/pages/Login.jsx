import React, { useEffect } from "react";
import Cabecalho from "../components/Cabecalho";
import { useForm } from 'react-hook-form';
import useAutenticacao from "../hooks/useAutenticacao";
import Spinner from '../components/Spinner';
import { useNavigate } from "react-router-dom";
import useAuth from '../hooks/useAuth';

const Login = () => {
    
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { mutate, isError, error , isSuccess, isLoading } = useAutenticacao();

    const { login } = useAuth();

    const onEntrar = (dados) => {
        mutate(dados);
    }

    useEffect(() => {

        if(isSuccess) {
            login();
            navigate("/home");
        }

    }, [isSuccess]);

    return (
        <>
            <Cabecalho />
            <div className="container mt-5">

                <div className="row justify-content-center mt-5">

                    <div className="col-11 col-md-7 col-lg-4 mt-5">

                        <div className="card px-4 mt-5">

                            <h5 className="text-center mt-4">Bem-vindo</h5>

                            {!isLoading && 

                                <form onSubmit={handleSubmit(onEntrar)} > 

                                    <label htmlFor="email" className="mb-1 mt-4"><i className="fa-solid fa-envelope me-1"></i>Email:</label>
                                    <input type="email" id="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} placeholder="digite seu email"  
                                        {...register('email', {
                                            required: { value: true, message: "Por favor informe o email" },
                                            pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Email fora do padrão esperado"}
                                        })}
                                    />
                                    {errors.email &&
                                        <div className="invalid-feedback">
                                            {errors.email.message}
                                        </div>
                                    }

                                    <label htmlFor="senha" className="mb-1 mt-4"><i className="fa-solid fa-lock me-1"></i>Senha:</label>
                                    <input type="password" id="senha" className={`form-control ${errors.senha ? 'is-invalid' : ''}`} placeholder="digite sua senha" 
                                        {...register('senha', {
                                            required: { value: true, message: "Por favor informe a senha!" },
                                            minLength: { value: 4 , message: "senha deve ter no mínimo 4 caracteres!" },
                                            maxLength: { value: 8, message: "Senha deve ter no máximo 8 caracteres!" }
                                        })}
                                    />
                                    {errors.senha &&
                                        <div className="invalid-feedback">
                                            {errors.senha.message}
                                        </div>
                                    }

                                    {isError && <>
                                        <p className="text-center text-danger mt-4">{error.response.data.message}</p>
                                    </>}

                                    <button type="submit" className="btn btn-primary mt-4 mb-4"><i className="fa-solid fa-right-to-bracket me-1"></i>Entrar</button>
                                
                                </form>

                            }

                            {isLoading &&  <div className="my-5">
                                <Spinner/> 
                            </div>}

                        </div>
                    
                    </div>

                </div>

            </div>

        </>
    )
}

export default Login;
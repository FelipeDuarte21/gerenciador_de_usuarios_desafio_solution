package com.luizfelipe.solution.service.exception;

public class UserAuthorizationException extends RuntimeException{

    private static final long serialVersionUID = 1L;

    public UserAuthorizationException(String message){
        super(message);
    }

}

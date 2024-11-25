package com.luizfelipe.solution.api.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.luizfelipe.solution.api.controller.exception.ObjectBadRequestException;
import com.luizfelipe.solution.api.dto.LoginDTO;
import com.luizfelipe.solution.api.dto.TokenDTO;
import com.luizfelipe.solution.api.service.AuthService;
import com.luizfelipe.solution.api.service.exception.IllegalParameterException;

import jakarta.validation.Valid;


@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {

	private AuthService authService;

	public AuthController(AuthService authService) {
		this.authService = authService;
	}
	
	@PostMapping("/login")
	public ResponseEntity<TokenDTO> login(@RequestBody @Valid LoginDTO login){
		
		try {
			
			var token = this.authService.login(login);
			
			return ResponseEntity.ok(token);
			
		}catch(IllegalParameterException ex) {
			throw new ObjectBadRequestException(ex.getMessage());
			
		}
		
	}
	
}

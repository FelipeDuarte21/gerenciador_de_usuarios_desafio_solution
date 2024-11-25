package com.luizfelipe.solution.api.service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Service;

import com.luizfelipe.solution.api.dto.LoginDTO;
import com.luizfelipe.solution.api.dto.TokenDTO;
import com.luizfelipe.solution.api.security.JWTUtil;
import com.luizfelipe.solution.api.security.UsuarioDetalhe;
import com.luizfelipe.solution.api.service.exception.IllegalParameterException;

@Service
public class AuthService {
	
	private JWTUtil jwtUtil;
	private AuthenticationManager authManager;
	
	public AuthService(JWTUtil jwtUtil,AuthenticationManager authManager) {
		this.jwtUtil = jwtUtil;
		this.authManager = authManager;
	}
	
	public TokenDTO login(LoginDTO login) {
		
		UsernamePasswordAuthenticationToken dadosLogin = 
			new UsernamePasswordAuthenticationToken(login.email(),login.senha());
		
		try {
			
			Authentication authentication = authManager.authenticate(dadosLogin);
			
			var usuario = (UsuarioDetalhe) authentication.getPrincipal();
			
			String token = this.jwtUtil.geradorToken(usuario);
			
			return new TokenDTO(token, "Bearer",usuario.getId(), usuario.getNome(), usuario.getEmail());
			
		}catch(AuthenticationException ex) {
			throw new IllegalParameterException("Erro! email e/ou senha incorretos!");
			
		}
		
	}

}

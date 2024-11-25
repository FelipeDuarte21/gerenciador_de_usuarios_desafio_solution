package com.luizfelipe.solution.api.security;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UsuarioDetalheService implements UserDetailsService {

	@Value("${user.id}")
	private Long idUser;

	@Value("${user.nameUser}")
	private String nameUser;

	@Value("${user.email}")
	private String emailUser;

	@Value("${user.password}")
	private String passwordUser;
	
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		
		if(!email.equals(emailUser)) throw new UsernameNotFoundException(email);
		
		return new UsuarioDetalhe(idUser,nameUser, emailUser, passwordUser);
		
	}
	
	public UserDetails loadUserById(Long id) throws UsernameNotFoundException {
		
		if(id != idUser) throw new UsernameNotFoundException(id.toString());
		
		return new UsuarioDetalhe(idUser,nameUser, emailUser, passwordUser);
		
	}
	
	public Optional<UsuarioDetalhe> getUsuarioAutenticado() throws Exception {
		try {
			
			return Optional.of(new UsuarioDetalhe(idUser,nameUser, emailUser, passwordUser));
			
		}catch(Exception e) {
			throw new Exception("Erro! O usuario nao está autenticado!");
		}
	}

}

package com.example.jobseeker;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configurers.ResourceServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.security.oauth2.provider.token.store.JwtAccessTokenConverter;
import org.springframework.security.oauth2.provider.token.store.JwtTokenStore;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.jobseeker.model.Jobseeker;

@SpringBootApplication
@EnableResourceServer
@RestController
@EnableGlobalMethodSecurity(prePostEnabled = true)
@RequestMapping("v1/jobseekers")
public class JobseekerApplication extends ResourceServerConfigurerAdapter {

	public static void main(String[] args) {
		SpringApplication.run(JobseekerApplication.class, args);
	}
	
	@GetMapping("/load")
	@PreAuthorize("hasRole('ROLE_VIEW')")
	public List<Jobseeker> getAllJobseekers(Authentication auth) {
		
		Jobseeker jb1 = new Jobseeker(1L,"Shane Warne",30,"RICHMOND");
		Jobseeker jb2 = new Jobseeker(2L,"Simon Wick",28,"HAWTHORN");
		Jobseeker jb3 = new Jobseeker(3L,"Ann Marry",34,"DOCKLANDS");		
		
		List<Jobseeker> jbs = new ArrayList<Jobseeker>();
		jbs.add(jb1);
		jbs.add(jb2);
		jbs.add(jb3);		
		
		return jbs;
	}
	
	
	@Override
    public void configure(HttpSecurity http) throws Exception {
        http.csrf().disable().authorizeRequests().antMatchers("/**").authenticated();       
    }

   /* @Override
    public void configure(ResourceServerSecurityConfigurer resources) throws Exception {
        resources.resourceId("foo").tokenStore(tokenStore());
    }*/
    
    @Bean
    protected JwtAccessTokenConverter jwtTokenEnhancer() {
        JwtAccessTokenConverter converter = new JwtAccessTokenConverter();
        converter.setSigningKey("123");
        return converter;
    }
    
    @Bean
    public TokenStore tokenStore() {
        return new JwtTokenStore(jwtTokenEnhancer());
    }
}

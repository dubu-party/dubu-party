package com.dubu.party.common.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**") // CORS를 적용할 URL 패턴 정의
                .allowedOrigins("http://localhost:3000")
//                .allowedOrigins("*")    // 자원 공유를 허락할 Origin을 지정
                .allowedMethods("GET", "POST", "PUT", "DELETE") // 허락할 HTTP method 지정
                .allowedHeaders("*") // 허락할 Header 지정
                .exposedHeaders("Authorization") // 추가: 허용된 헤더에 Authorization 헤더를 추가합니다.
                .allowCredentials(true) // 추가: true로 설정하면 자격증명 허용
                .maxAge(3600);
    }
}



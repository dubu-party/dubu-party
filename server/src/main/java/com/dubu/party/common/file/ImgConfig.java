package com.dubu.party.common.file;

import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Slf4j
@Configuration
public class ImgConfig implements WebMvcConfigurer {
    // src/main/resources/static/files/ 를 외부에 노출시킨다.
    // 이렇게 하면, http://localhost:8080/files/ 에서 파일을 확인할 수 있다.
    @Override
    // addResourceHandlers 역할
    // 1. 외부에 노출시킬 url 설정한다.
    // 2. 외부에 노출시킬 폴더를 설정한다.
    public void addResourceHandlers(org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/files/**")
                .addResourceLocations("file:src/main/resources/static/files/");
    }
}

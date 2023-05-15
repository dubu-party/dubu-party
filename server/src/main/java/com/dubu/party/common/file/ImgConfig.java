package com.dubu.party.common.file;

import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Slf4j
@Configuration
public class ImgConfig implements WebMvcConfigurer {

    // addResourceHandlers 역할 : 외부에 노출시킬 url,폴더를 설정한다.
    @Override
    public void addResourceHandlers(org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/files/**")
                .addResourceLocations("file:src/main/resources/static/files/");
    }
}

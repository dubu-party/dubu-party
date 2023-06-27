package com.dubu.party.common.file;

import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.io.File;
import java.util.UUID;

@Slf4j
@Configuration
public class ImgConfig implements WebMvcConfigurer {

    // addResourceHandlers 역할 : 외부에 노출시킬 url,폴더를 설정한다.
    @Override
    public void addResourceHandlers(org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/files/**")
//                .addResourceLocations("file:src/main/resources/static/files/");
                .addResourceLocations("file:/media/");
    }

    static String saveImage(MultipartFile file)  throws Exception{
        // 파일이 저장될 경로 설정 (static/files)
//        String filePath = new File("").getAbsolutePath() + "/src/main/resources/static/files";
        String filePath = new File("").getAbsolutePath() + "/media";
        String name = UUID.randomUUID() + "_" + file.getOriginalFilename();
        file.transferTo(new File(filePath, name)); // 파일 저장
        return "/files/" + name; //url 경로 반환
    }

    static void deleteImage(String fileUrl) {
        // 파일이 저장된 경로 설정 (static/files)
        String filePath = new File("").getAbsolutePath() + "/media";
        String fileName = fileUrl.substring(fileUrl.lastIndexOf("/") + 1);
        File file = new File(filePath, fileName);
        if (file.exists()) {
            file.delete();
        }
    }

}

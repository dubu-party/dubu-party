package com.dubu.party.common.file;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.UUID;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Image {
    private String fileUrl;

    public Image(MultipartFile file) throws Exception{
        this.fileUrl = this.saveImage(file);
    }
    static String saveImage(MultipartFile file)  throws Exception{
        // 파일이 저장될 경로 설정 (static/files)
        String filePath = new File("").getAbsolutePath() + "/src/main/resources/static/files";
        String name = UUID.randomUUID() + "_" + file.getOriginalFilename();
        file.transferTo(new File(filePath, name)); // 파일 저장
        return "/files/" + name; //url 경로 반환
    }
    // /src/main/resources/static/files/ 에 파일이 저장된다.
    // 배포 환경에서는 이 폴더가 없기 때문에
    // 배포 환경에서는 외부에 파일을 저장해야 한다.
    // 외부에 파일을 저장하려면
    // application.properties 에 설정을 추가해야 한다.
    // spring.servlet.multipart.location=외부 경로
    // 외부 경로에 파일을 저장하면
    // 외부 경로에 저장된 파일을 url로 접근할 수 있도록
    // 설정을 추가해야 한다.
    // spring.mvc.static-path-pattern=/files/**
    // spring.mvc.static-locations=classpath:/static/,file:외부 경로
    // 외부 경로에 저장된 파일을 url로 접근할 수 있도록
    // 설정을 추가하면
    // 외부 경로에 저장된 파일을 url로 접근할 수 있다.
    // http://localhost:8080/files/파일명


}

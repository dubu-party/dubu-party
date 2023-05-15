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
        String filePath = System.getProperty("user.dir") + "/src/main/resources/static/files" ;
        String name = UUID.randomUUID() + "_" + file.getOriginalFilename();
        file.transferTo(new File(filePath, name)); // 파일 저장
        return "/files/" + name; //url 경로 반환
    }

}

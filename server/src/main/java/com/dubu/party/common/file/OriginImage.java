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
public class OriginImage {
    private String originFileUrl;

    public OriginImage(MultipartFile file) throws Exception{
        this.originFileUrl = ImgConfig.saveImage(file);
    }
}

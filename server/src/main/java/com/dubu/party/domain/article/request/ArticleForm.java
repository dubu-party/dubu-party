package com.dubu.party.domain.article.request;


import com.dubu.party.domain.article.entity.data.Footer;
import com.dubu.party.domain.article.entity.data.Title;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter @Setter
public class ArticleForm {
    private Title title;
    private Footer footer;

    private MultipartFile file;

    private MultipartFile originFile;

}

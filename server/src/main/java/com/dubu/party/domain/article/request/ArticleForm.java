package com.dubu.party.domain.article.request;


import com.dubu.party.domain.article.entity.data.Footer;
import com.dubu.party.domain.article.entity.data.Title;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter @Setter
public class ArticleForm {

//    private String title;
//    private String content;
//
//    /** Content Setting **/
//    private Integer fontSize;
//    private String fontColor;
//    private String fontFamily;
//    private TextAlign textAlign;
//
//    /** File **/
//    private MultipartFile file;

    private Title title;
    private Footer footer;

    private MultipartFile file;

}

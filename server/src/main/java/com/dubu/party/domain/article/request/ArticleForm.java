package com.dubu.party.domain.article.request;


import com.dubu.party.domain.article.db.entity.ContentSetting;
import com.dubu.party.domain.article.db.entity.TextAlign;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ArticleForm {

    private String title;
    private String content;


    private ContentSetting contentSetting;

    private Long userPkId;

}

package com.dubu.party.domain.article.db.entity;


import com.dubu.party.domain.user.db.entity.UserDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class ArticleDto {

    Long id;
    String title;
    String content;
    ContentSetting contentSetting;
    UserDto user;

    public ArticleDto(Article article){
        this.id = article.getId();
        this.title = article.getTitle();
        this.content = article.getContent();
        this.contentSetting = article.getContentSetting();
        this.user = new UserDto(article.getUser());
    }

}

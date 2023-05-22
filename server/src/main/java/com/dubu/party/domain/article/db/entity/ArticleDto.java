package com.dubu.party.domain.article.db.entity;


import com.dubu.party.common.file.Image;
import com.dubu.party.domain.user.db.entity.UserDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class ArticleDto {

    Long id;
    String title;
    String content;
    ContentSetting contentSetting;

    String fileUrl;

    UserDto user;

    List<UserDto> articleLikes ;

    public ArticleDto(Article article){
        this.id = article.getId();
        this.title = article.getTitle();
        this.content = article.getContent();
        this.contentSetting = article.getContentSetting();
        this.user = new UserDto(article.getUser());
        List<ArticleLike> articleLikes = article.getArticleLikes();
        this.articleLikes = new ArrayList<UserDto>();
        if(articleLikes != null){
            articleLikes.forEach(o -> this.articleLikes.add(new UserDto(o.getUser())));
        }
        Image image = article.getArticleImage();
        if(image != null){
            this.fileUrl = image.getFileUrl();
        }
    }

}

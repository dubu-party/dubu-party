package com.dubu.party.domain.article.db.data.article;


import com.dubu.party.common.file.Image;
import com.dubu.party.domain.article.db.entity.Article;
import com.dubu.party.domain.article.db.entity.ArticleLike;
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
public class ArticleWithLike {

    Long id;
    String title;
    String content;
    ContentSetting contentSetting;

    String fileUrl;

    UserDto user;

    List<UserDto> likeUsers ;

    public ArticleWithLike(Article article){
        this.id = article.getId();
        this.title = article.getTitle();
        this.content = article.getContent();
        this.contentSetting = article.getContentSetting();
        this.user = new UserDto(article.getUser());
        List<ArticleLike> articleLikes = article.getArticleLikes();
        this.likeUsers = new ArrayList<UserDto>();
        if(articleLikes != null){
            articleLikes.forEach(o -> this.likeUsers.add(new UserDto(o.getUser())));
        }
        Image image = article.getArticleImage();
        if(image != null){
            this.fileUrl = image.getFileUrl();
        }
    }

    public static List<ArticleWithLike> listOf(List<Article> articles){
        List<ArticleWithLike> articleWithLikes = new ArrayList<>();
        articles.forEach(o -> articleWithLikes.add(new ArticleWithLike(o)));
        return articleWithLikes;
    }

}

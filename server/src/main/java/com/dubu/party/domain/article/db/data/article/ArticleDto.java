package com.dubu.party.domain.article.db.data.article;

import com.dubu.party.common.file.Image;
import com.dubu.party.domain.article.db.data.comment.CommentDto;
import com.dubu.party.domain.article.db.entity.Article;
import com.dubu.party.domain.article.db.entity.ArticleLike;
import com.dubu.party.domain.article.db.entity.Comment;
import com.dubu.party.domain.user.db.entity.UserDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter @Setter
@NoArgsConstructor // 기본 생성자
@AllArgsConstructor // 모든 필드를 인자로 받는 생성자
public class ArticleDto {
    // ARTICLE + likes + comments

    Long id;
    String title;
    String content;
    ContentSetting contentSetting;

    String fileUrl;

    UserDto user;

    Integer likeCount;

    List<UserDto> likeUsers;

    List<CommentDto> comments;

    public ArticleDto(Article article){
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

        this.likeCount = likeUsers.size();


        List<Comment> comments = article.getComments();
        if (comments != null) {
            this.comments = CommentDto.listOf(comments);
        }
        else{
            this.comments = new ArrayList<>();
        }
    }
    public static List<ArticleDto> listOf(List<Article> articles){
        List<ArticleDto> articleWithLikes = new ArrayList<>();
        articles.forEach(o -> articleWithLikes.add(new ArticleDto(o)));
        return articleWithLikes;
    }
}

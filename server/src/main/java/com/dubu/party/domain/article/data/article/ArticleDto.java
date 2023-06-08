package com.dubu.party.domain.article.data.article;

import com.dubu.party.common.file.Image;
import com.dubu.party.domain.article.entity.Article;
import com.dubu.party.domain.article.entity.ArticleLike;
import com.dubu.party.domain.article.entity.Comment;
import com.dubu.party.domain.article.entity.data.Footer;
import com.dubu.party.domain.article.entity.data.Title;
import com.dubu.party.domain.user.data.UserSimplify;
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
    private Title title;
    private Footer footer;

    private String fileUrl;

    private UserSimplify user;

    private Integer likeCount;
    private Integer commentCount;


    // 좋아요 누른 유저 목록 => 내가 좋아요 했는지 확인
    private List<UserSimplify> likeUsers;

    // TODO: 좋아요 누른 유저 목록 => 내가 좋아요 했는지 확인

    //    private boolean isLike;


    public ArticleDto(Article article){
        this.id = article.getId();
        this.title = article.getTitle();
        this.footer = article.getFooter();
        this.user = new UserSimplify(article.getUser());

        Image image = article.getArticleImage();
        if(image != null){
            this.fileUrl = image.getFileUrl();
        }
        List<ArticleLike> articleLikes = article.getArticleLikes();
        if(articleLikes == null) {
            articleLikes = new ArrayList<>();
        }
        this.likeUsers = UserSimplify.listOfWithArticleLike(articleLikes);
        this.likeCount = article.getLikeCount();

        List<Comment> comments = article.getComments();
        if(comments == null) {
            comments = new ArrayList<>();
        }
        this.commentCount = comments.size();
    }
    public static List<ArticleDto> listOf(List<Article> articles){
        List<ArticleDto> articleWithLikes = new ArrayList<>();
        articles.forEach(o -> articleWithLikes.add(new ArticleDto(o)));
        return articleWithLikes;
    }
}

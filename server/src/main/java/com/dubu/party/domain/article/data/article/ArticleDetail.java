package com.dubu.party.domain.article.data.article;

import com.dubu.party.common.file.Image;
import com.dubu.party.domain.article.data.comment.CommentDto;
import com.dubu.party.domain.article.entity.Article;
import com.dubu.party.domain.article.entity.ArticleLike;
import com.dubu.party.domain.article.entity.data.Footer;
import com.dubu.party.domain.article.entity.data.Title;
import com.dubu.party.domain.user.data.UserSimplify;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter @Setter
@NoArgsConstructor
public class ArticleDetail {
    private Long id;
    private Title title;
    private Footer footer;
    private String fileUrl;
    private UserSimplify user;
    private List<UserSimplify> likeUserList;
    private List<CommentDto> comments;
    public ArticleDetail(Article article){
        this.id = article.getId();
        this.title = article.getTitle();
        this.footer = article.getFooter();
        this.user = new UserSimplify(article.getUser());

        Image image = article.getArticleImage();
        if(image != null){
            this.fileUrl = image.getFileUrl();
        }
        List<ArticleLike> articleLikes = article.getArticleLikes();

        this.likeUserList = UserSimplify.listOfWithArticleLike(articleLikes);

        this.comments = CommentDto.listOf(article.getComments());
    }

}

package com.dubu.party.domain.article.data.comment;
import com.dubu.party.domain.article.data.article.ArticleSimple;
import com.dubu.party.domain.article.entity.Comment;
import com.dubu.party.domain.user.data.UserSimplify;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@NoArgsConstructor
public class CommentDetail {
    private Long id;
    private String content;
    private ArticleSimple article;
    private UserSimplify user;

    public CommentDetail(Comment comment){
        this.id = comment.getId();
        this.content = comment.getContent();
        this.user = new UserSimplify(comment.getUser());
        this.article = new ArticleSimple(comment.getArticle());
    }
}

package com.dubu.party.domain.article.db.data.comment;
import com.dubu.party.domain.article.db.data.article.ArticleSimple;
import com.dubu.party.domain.article.db.entity.Comment;
import com.dubu.party.domain.user.db.entity.UserDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@NoArgsConstructor
public class CommentDetail {
    private Long id;
    private String content;
    private ArticleSimple article;
    private UserDto user;

    public CommentDetail(Comment comment){
        this.id = comment.getId();
        this.content = comment.getContent();
        this.user = new UserDto(comment.getUser());
        this.article = new ArticleSimple(comment.getArticle());
    }
}

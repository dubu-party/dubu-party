package com.dubu.party.domain.article.db.data.comment;

import com.dubu.party.domain.article.db.data.article.ArticleWithLike;
import com.dubu.party.domain.article.db.entity.Comment;
import com.dubu.party.domain.user.db.entity.UserDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter @Setter
@NoArgsConstructor
public class CommentDto {
    private Long id;
    private String content;
//    private ArticleWithLike article;
    private UserDto user;

    public CommentDto(Comment comment){
        this.id = comment.getId();
        this.content = comment.getContent();
        this.user = new UserDto(comment.getUser());
    }
    public static List<CommentDto> listOf(List<Comment> comments){
        List<CommentDto> commentDtos = new ArrayList<>();
        comments.forEach(o -> commentDtos.add(new CommentDto(o)));
        return commentDtos;
    }
}

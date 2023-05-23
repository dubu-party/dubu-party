package com.dubu.party.domain.article.request;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class CommentForm {
    public Long articleId;
    public String content;

}

package com.dubu.party.domain.article.data.article;


import com.dubu.party.domain.article.entity.Article;
import lombok.*;

@Getter @Setter
@NoArgsConstructor // 기본 생성자
@AllArgsConstructor // 모든 필드를 인자로 받는 생성자
public class ArticleForComment {
    private Long id;
    private String title;
    private String footer;

    public ArticleForComment(Article article){
        this.id = article.getId();
        this.title = article.getTitle().getContent();
        this.footer = article.getFooter().getContent();
    }

}

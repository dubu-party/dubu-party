package com.dubu.party.domain.article.entity;
import com.dubu.party.common.file.Image;
import com.dubu.party.common.file.OriginImage;
import com.dubu.party.domain.article.entity.data.Footer;
import com.dubu.party.domain.article.entity.data.Title;
import com.dubu.party.domain.user.entity.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import javax.persistence.*;
import java.util.List;

@Entity
@Getter @Setter
@AllArgsConstructor // 모든 필드 값을 파라미터로 받는 생성자를 생성
@NoArgsConstructor // 파라미터가 없는 생성자를 생성
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Embedded
    private Title title;
    @Embedded
    private Footer footer;


    @Embedded
    private Image articleImage;

    @Embedded
    private OriginImage originImage;

    @OneToMany @JsonIgnore
    @JoinColumn(name="article_id")
    private List<ArticleLike> articleLikes;

    @Column(nullable = false, columnDefinition = "int default 0")
    private int likeCount;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    @OneToMany(mappedBy = "article")
    @JsonIgnore // mappedBy는 양방향 관계에서 반대쪽 엔티티의 필드명을 지정합니다.
    private List<Comment> comments;

}

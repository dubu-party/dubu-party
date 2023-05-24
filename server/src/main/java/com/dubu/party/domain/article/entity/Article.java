package com.dubu.party.domain.article.entity;
import com.dubu.party.common.file.Image;
import com.dubu.party.domain.article.entity.data.ContentSetting;
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

    private String title;

    private String content;

    @Embedded // 내장타입
    private ContentSetting contentSetting;

    @Embedded
    private Image articleImage;


    @OneToMany
    @JoinColumn(name="article_id") //
    // 기본값 []로 설정 하는 법
    private List<ArticleLike> articleLikes;

    @ManyToOne
    @JoinColumn(name="user_id")
    @JsonIgnore
    private User user;

    @OneToMany(mappedBy = "article") // mappedBy는 양방향 관계에서 반대쪽 엔티티의 필드명을 지정합니다.
    private List<Comment> comments;


}

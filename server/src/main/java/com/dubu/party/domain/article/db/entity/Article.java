package com.dubu.party.domain.article.db.entity;


import com.dubu.party.common.file.Image;
import com.dubu.party.domain.user.db.entity.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter @Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
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
    private List<ArticleLike> articleLikes;

    @ManyToOne
    @JoinColumn(name="user_id")
    @JsonIgnore
    private User user;




}

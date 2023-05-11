package com.dubu.party.domain.article.db.entity;


import lombok.*;

@Getter @Setter
@NoArgsConstructor
@Builder
@AllArgsConstructor
public class ContentSetting {
    private Integer fontSize;
    private String fontColor;
    private String bgColor;
    private String fontFamily;
    private TextAlign textAlign;
}

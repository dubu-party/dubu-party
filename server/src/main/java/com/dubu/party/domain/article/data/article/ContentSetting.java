package com.dubu.party.domain.article.data.article;


import com.dubu.party.domain.article.request.ArticleForm;
import lombok.*;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;

@Getter @Setter
@NoArgsConstructor
@Builder
@AllArgsConstructor
public class ContentSetting {
    private Integer fontSize;
    private String fontColor;
    private String fontFamily;

    @Enumerated(EnumType.STRING)
    private TextAlign textAlign;

    public ContentSetting(ArticleForm articleForm) {
        this.fontSize = articleForm.getFontSize();
        this.fontColor = articleForm.getFontColor();
        this.fontFamily = articleForm.getFontFamily();
        this.textAlign = articleForm.getTextAlign();
    }
}

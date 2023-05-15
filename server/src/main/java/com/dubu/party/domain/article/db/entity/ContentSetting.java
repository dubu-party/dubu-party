package com.dubu.party.domain.article.db.entity;


import com.dubu.party.domain.article.request.ArticleForm;
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

    public ContentSetting(ArticleForm articleForm) {
        this.fontSize = articleForm.getFontSize();
        this.fontColor = articleForm.getFontColor();
        this.bgColor = articleForm.getBgColor();
        this.fontFamily = articleForm.getFontFamily();
        this.textAlign = articleForm.getTextAlign();
    }
}

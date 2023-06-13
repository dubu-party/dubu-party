package com.dubu.party.domain.article.entity.data;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class Footer {
    @Column(name = "footer_content")
    public String content;

    @Column(name = "footer_size")
    public int size; // 15,

    @Column(name = "footer_weight")
    public int weight; // 1,2,3,4,5 ( 1 이 얇은거) (300,400,500,600,700)

    @Column(name = "footer_background")
    public Boolean background; // true, false

    @Column(name = "footer_color")
    public String color; // #33ff33,

    @Column(name = "footer_font_family")
    public String fontFamily; // "Noto Sans KR",



}

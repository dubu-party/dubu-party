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
public class Title {

    @Column(name = "title_content")
    public String content; //

    @Column(name = "title_size")
    public int size; // 15,

    @Column(name = "title_weight")
    public int weight; // 1,2,3,4,5 ( 1 이 얇은거) (300,400,500,600,700)

    @Column(name = "title_color")
    public String color; // #33ff33,

    @Column(name = "title_font_family")
    public String fontFamily; // "Noto Sans KR",

    @Column(name = "title_height_sort")
    public String heightSort; // TOP MID BOTTOM

    @Column(name = "title_width_sort")
    public String widthSort; // LEFT CENTER RIGHT


}

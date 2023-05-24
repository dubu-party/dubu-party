package com.dubu.party.domain.user.entity.data;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class Setting {
    private String bgColor;

    public Setting() {
        this.bgColor = "#fff";
    }
    public Setting(String bgColor) {
        this.bgColor = bgColor;
    }
}

package com.dubu.party.domain.user.request;

import com.dubu.party.domain.user.entity.data.Setting;
import lombok.Getter;

@Getter
public class UpdateSettingForm {
    private String bgColor;

    public UpdateSettingForm() {
        this.bgColor = "#fff";
    }
    public UpdateSettingForm(String bgColor) {
        if (bgColor == null || bgColor.length() != 3) {
            bgColor = "#fff";
        }
        this.bgColor = bgColor;
    }
    public Setting toSetting(){
        return new Setting(this.bgColor);
    }
}

package com.dubu.party.domain.user.db.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Authority {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    private Long authorityId;

    private String authorityName;

    @JoinColumn(name = "userPkId")
    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    private User user;

}

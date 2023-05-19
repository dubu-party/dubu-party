package com.dubu.party.common.exception;


import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ErrorResponse {

    private int status;
    private String message;

    public ErrorResponse( int status,String message) {
        this.message = message;
        this.status = status;
    }
}

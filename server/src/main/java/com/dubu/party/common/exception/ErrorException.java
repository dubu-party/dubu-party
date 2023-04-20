package com.dubu.party.common.exception;


import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ErrorException extends RuntimeException {

    private int status;
    private String message;


    public ErrorException( int status,String message) {
        super();
        this.message = message;
        this.status = status;
    }
}

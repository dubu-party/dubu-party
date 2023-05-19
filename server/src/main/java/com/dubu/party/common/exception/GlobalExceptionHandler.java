package com.dubu.party.common.exception;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.annotation.*;

@RestControllerAdvice // 모든 예외를 잡아서 처리
public class GlobalExceptionHandler {
    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseEntity<String> handleHttpMessageNotReadableException(HttpMessageNotReadableException e) {
        String message = e.getMessage();
        if (message.contains("Cannot deserialize value of type `com.dubu.party.domain.article.db.entity.TextAlign`")) {
            return ResponseEntity.badRequest().body("TextAlign 형식을 확인해주세요(TOP,BOTTOM,CENTER)");
        }
        return ResponseEntity.badRequest().body("형식을 확인해주세요");
    }
}

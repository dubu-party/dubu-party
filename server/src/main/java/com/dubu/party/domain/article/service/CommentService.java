package com.dubu.party.domain.article.service;

import com.dubu.party.domain.article.data.article.ArticleDto;
import com.dubu.party.domain.article.entity.Article;
import com.dubu.party.domain.article.entity.Comment;
import com.dubu.party.domain.article.data.comment.CommentDto;
import com.dubu.party.domain.article.repository.ArticleRepository;
import com.dubu.party.domain.article.repository.CommentRepository;
import com.dubu.party.domain.article.data.comment.CommentDetail;
import com.dubu.party.domain.user.entity.User;
import com.dubu.party.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CommentService {

    @Autowired
    private final ArticleRepository articleRepository;

    @Autowired
    private final CommentRepository commentRepository;

    @Autowired
    private final UserRepository userRepository;

    public ArticleDto createComment(Long userId, Long articleId, String content) {
        User user = userRepository.getById(userId);
        if (user == null) {
            throw new IllegalStateException("사용자를 찾을 수 없습니다.");
        }

        Article article = articleRepository.getById(articleId);
        if (article == null) {
            throw new IllegalStateException("게시글을 찾을 수 없습니다.");
        }
        Comment comment = new Comment();
        comment.setUser(user);
        comment.setContent(content);
        comment.setArticle(article);
        commentRepository.save(comment);
        return new ArticleDto(article);
    }

    public boolean deleteComment(Long userId, Long commentId) {
        Comment comment = commentRepository.findById(commentId).orElse(null);
        if(comment == null){
            throw new IllegalStateException("댓글을 찾을 수 없습니다.");
        }
        if (comment.getUser().getId() != userId) {
            throw new IllegalStateException("댓글을 삭제할 권한이 없습니다.");
        }
        commentRepository.delete(comment);
        return true;
    }

    public ArticleDto updateComment( Long commentId,Long userId,Long articleId ,String content) {

        Comment comment = commentRepository.findById(commentId).orElse(null);
        if(comment == null){
            throw new IllegalStateException("댓글을 찾을 수 없습니다.");
        }
        if (comment.getUser().getId() != userId) {
            throw new IllegalStateException("댓글을 수정할 권한이 없습니다.");
        }
        Article article = articleRepository.getById(articleId);
        comment.setContent(content);
        commentRepository.save(comment);
        return new ArticleDto(article);
    }




    public CommentDetail getComment(Long commentId) {
        Comment comment = commentRepository.findById(commentId).orElse(null);
        if(comment == null){
            throw new IllegalStateException("댓글을 찾을 수 없습니다.");
        }
        return new CommentDetail(comment);
    }
    public List<CommentDto> getCommentByUser(Long userId) {
        List<Comment> comments = commentRepository.findByUserId(userId);
        return CommentDto.listOf(comments);
    }

    public  List<CommentDto> getCommentByArticle(Long articleId) {
        List<Comment> comments = commentRepository.findByArticleId(articleId);
        return CommentDto.listOf(comments);
    }
}

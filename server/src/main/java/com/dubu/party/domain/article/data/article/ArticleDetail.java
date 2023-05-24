package com.dubu.party.domain.article.data.article;

import com.dubu.party.common.file.Image;
import com.dubu.party.domain.article.entity.Article;
import com.dubu.party.domain.user.data.UserSimplify;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter @Setter
@NoArgsConstructor
public class ArticleDetail {
    private Long id;
    private String title;
    private String content;
    private ContentSetting contentSetting;

    private String fileUrl;

    private UserSimplify user;

    private List<UserSimplify> likeUserList;

    public ArticleDetail(Article article){
        this.id = article.getId();
        this.title = article.getTitle();
        this.content = article.getContent();
        this.contentSetting = article.getContentSetting();
        this.user = new UserSimplify(article.getUser());

//        List<ArticleLike> articleLikes = article.getArticleLikes();
//        for(User user : users){
//            this.likeUserList.add(new UserDto(user));
//        }

        Image image = article.getArticleImage();
        if(image != null){
            this.fileUrl = image.getFileUrl();
        }

    }

}

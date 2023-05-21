import { User } from "./user";

export class Article {
  id: number;
  title: string;
  content: string;
  fileUrl?: string;
  user: User;
  contentSetting: ContentSetting;
  constructor() {
    this.id = 0;
    this.title = "";
    this.content = "";
    this.user = new User();
    this.contentSetting = {
      fontSize: 0,
      fontColor: "",
      fontFamily: "",
      textAlign: "TOP",
    };
  }
}

export interface ContentSetting {
  fontSize: number;
  fontColor: string;
  fontFamily: string;
  textAlign: "TOP" | "CENTER" | "BOTTOM";
}

export const FONT_FAMILY = [
  "Noto Sans KR",
  "Noto Sans JP",
  "Noto Sans SC",
  "Noto Sans TC",
  "Noto Sans",
];
export const TEXT_ALIGN = ["TOP", "CENTER", "BOTTOM"];

export const FONT_SIZE = [12, 14, 16, 18, 20, 22, 24, 26, 28, 30];

export interface ArticleForm {
  title: string;
  content: string;
  fontSize: number;
  fontColor: string;
  fontFamily: string;
  textAlign: "TOP" | "CENTER" | "BOTTOM" | string;
  file?: File;
}

export class ArticleCreateRequest implements ArticleForm {
  title: string;
  content: string;
  fontSize: number;
  fontColor: string;
  fontFamily: string;
  textAlign: "TOP" | "CENTER" | "BOTTOM" | string;
  file?: File;

  constructor() {
    this.title = "";
    this.content = "";
    this.fontSize = FONT_SIZE[0];
    this.fontColor = "#000000";
    this.fontFamily = FONT_FAMILY[0];
    this.textAlign = TEXT_ALIGN[0];
  }
}

export class ArticleService {
  static async list() {
    try {
      // 아오...
      // 원래는 "/api/articles" 이렇게 써야하는데
      // api 파싱 에러가 뜨는데 이유를 모르겠다.
      // 그래서 process.env.BASE_FETCH_URL 을 사용했다.

      const res = await fetch(`${process.env.BASE_FETCH_URL}/api/articles`, {
        method: "GET",
        headers: {
          //   Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });

      if (res.status === 200) {
        return await res.json();
      }
      return [];
    } catch (error) {
      return [];
    }
  }

  static async create(articleForm: ArticleForm) {
    try {
      // const res = await fetch(`${process.env.BASE_FETCH_URL}/api/articles`, {
      const res = await fetch(`/api/articles`, {
        method: "POST",
        headers: {
          //   "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
        body: ArticleService.toFormData(articleForm),
      });
      const articleId = Number(await res.json());

      if (articleId) {
        alert("게시글이 등록되었습니다.");
        return;
        // return (location.href = `/articles/${articleId}`);
      }
      return alert("게시글 등록에 실패하였습니다.");
    } catch (error) {
      console.error(error);
    }
  }

  static toFormData(articleForm: ArticleForm) {
    const formData = new FormData();
    formData.append("title", articleForm.title);
    formData.append("content", articleForm.content);
    formData.append("fontSize", articleForm.fontSize.toString());
    formData.append("fontColor", articleForm.fontColor);
    formData.append("fontFamily", articleForm.fontFamily);
    formData.append("textAlign", articleForm.textAlign);
    if (articleForm.file) {
      formData.append("file", articleForm.file);
    }
    return formData;
  }

  static async get(articleId: number): Promise<Article> {
    try {
      const res = await fetch(
        `${process.env.BASE_FETCH_URL}/api/articles/${articleId}`,
        {
          method: "GET",
          headers: {
            // Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        },
      );
      const article = await res.json();
      return article;
    } catch (error) {
      console.log("게시글을 불러오는데 실패하였습니다.");
      return new Article();
    }
  }
}

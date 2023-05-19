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
  static async create(articleForm: ArticleForm) {
    try {
      const res = await fetch("/api/articles", {
        method: "POST",
        headers: {
          //   "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
        body: ArticleService.toFormData(articleForm),
      });
      console.log(sessionStorage.getItem("token"));
      const articleId = await res.json();

      if (articleId) {
        alert("게시글이 등록되었습니다.");
        return (location.href = `/articles/${articleId}`);
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
}

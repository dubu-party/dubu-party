import customAxios from "@/api/AxiosModule";
import customServerAxios from "@/api/AxiosModuleServer";
import { User } from "../user";
import { ArticleForm, ArticleFooter, ArticleTitle } from "./data";

export class Article {
  id: number;
  fileUrl?: string;
  title: ArticleTitle;
  footer: ArticleFooter;
  user: User;
  constructor() {
    this.id = 0;
    this.fileUrl = "";
    this.title = new ArticleTitle();
    this.footer = new ArticleFooter();
    this.user = new User();
  }
}

export const ArticleAPI = {
  list: async () => {
    const result = await customServerAxios
      .get("/api/articles")
      .then((res) => {
        if (res.status === 200) return res.data;
        return [];
      })
      .catch((err) => []);
    return result;
  },
  create: async (articleForm: ArticleForm) => {
    const formData = ArticleAPI.toFormData(articleForm);
    const result = await customAxios
      .post("/api/articles", formData)
      .then((res) => {
        if (res.status === 200) return res.data;
        return null;
      })
      .catch((err) => null);
    if (result) return alert("게시글이 등록되었습니다.");
    alert("게시글 등록에 실패하였습니다.");
  },
  get: async (articleId: number) => {
    const result = await customServerAxios
      .get(`/api/articles/${articleId}`)
      .then((res) => {
        if (res.status === 200) return res.data;
        return new Article();
      })
      .catch((err) => new Article());
    return result;
  },

  toFormData: (articleForm: ArticleForm) => {
    const formData = new FormData();
    formData.append("title", JSON.stringify(articleForm.title));
    formData.append("footer", JSON.stringify(articleForm.footer));
    if (articleForm.file) {
      formData.append("file", articleForm.file);
    }
    return formData;
  },
};

import customAxios from "@/api/AxiosModule";
import customServerAxios from "@/api/AxiosModuleServer";
import { User } from "../user";
import { ArticleForm, ArticleFooter, ArticleTitle } from "./data";

export class Article {
  id: number;
  fileUrl?: string;
  originFileUrl?: string;
  title: ArticleTitle;
  footer: ArticleFooter;
  likeCount: number;
  user: User;
  constructor() {
    this.id = 0;
    this.fileUrl = "";
    this.title = new ArticleTitle();
    this.footer = new ArticleFooter();
    this.likeCount = 0;
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
    customAxios.defaults.headers["Content-Type"] = "multipart/form-data";
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
    return result as Article;
  },

  toFormData: (articleForm: ArticleForm) => {
    const formData = new FormData();

    Object.entries(articleForm.title).forEach(([key, value]) => {
      formData.append(`title.${key}`, value);
    });

    Object.entries(articleForm.footer).forEach(([key, value]) => {
      formData.append(`footer.${key}`, value);
    });

    if (articleForm.file) {
      formData.append("file", articleForm.file);
    }
    if (articleForm.originFile) {
      formData.append("originFile", articleForm.originFile);
    }
    return formData;
  },

  // 추가

  delete: async (contentId: number) => {
    try {
      const result = await customAxios.delete(`/api/articles/${contentId}`);
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
    }
  },
};

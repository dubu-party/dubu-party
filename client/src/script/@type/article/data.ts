import { FONT } from "./variable";

export class ArticleTitle {
  content: string;
  size: number;
  weight: 1 | 2 | 3 | 4 | 5;
  color: string;
  fontFamily: string;
  heightSort: "TOP" | "CENTER" | "BOTTOM";
  widthSort: "LEFT" | "CENTER" | "RIGHT";
  constructor() {
    this.content = "";
    this.size = FONT.TITLE_SIZE_LIST[0];
    this.weight = 1;
    this.color = "#333";
    this.fontFamily = FONT.FAMILY_LIST[0];
    this.heightSort = "TOP";
    this.widthSort = "LEFT";
  }
}
export class ArticleFooter {
  content: string;
  size: number;
  weight: 1 | 2 | 3 | 4 | 5;
  color: string;
  fontFamily: string;
  background: boolean;
  constructor() {
    this.content = "";
    this.size = FONT.FOOTER_SIZE_LIST[0];
    this.weight = 1;
    this.color = "#333";
    this.fontFamily = FONT.FAMILY_LIST[0];
    this.background = true;
  }
}

export interface ArticleForm {
  title: ArticleTitle;
  footer: ArticleFooter;
  file?: File;
}

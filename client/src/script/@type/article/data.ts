export const FONT_FAMILY = [
  "Noto Sans KR",
  "Noto Sans JP",
  "Noto Sans SC",
  "Noto Sans TC",
  "Noto Sans",
];
export const HEIGHT_SORT = ["TOP", "CENTER", "BOTTOM"];
export const WIDTH_SORT = ["LEFT", "CENTER", "RIGHT"];

export const TITLE_FONT_SIZE = [12, 14, 16, 18, 20, 22, 24, 26, 28, 30];
export const FOOTER_FONT_SIZE = [12, 14, 16, 18, 20, 22, 24, 26, 28, 30];
export const FONT_WEIGHT = [1, 2, 3, 4, 5];

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
    this.size = TITLE_FONT_SIZE[0];
    this.weight = 1;
    this.color = "#fff";
    this.fontFamily = FONT_FAMILY[0];
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
  constructor() {
    this.content = "";
    this.size = FOOTER_FONT_SIZE[0];
    this.weight = 1;
    this.color = "#333";
    this.fontFamily = FONT_FAMILY[0];
  }
}

export interface ArticleForm {
  title: ArticleTitle;
  footer: ArticleFooter;
  file?: File;
}

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
  heightSort: HeightSort;
  widthSort: WidthSort;
  constructor() {
    this.content = "";
    this.size = 0;
    this.weight = 1;
    this.color = "";
    this.fontFamily = "";
    this.heightSort = HeightSort.TOP;
    this.widthSort = WidthSort.LEFT;
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
    this.size = 0;
    this.weight = 1;
    this.color = "";
    this.fontFamily = "";
  }
}

enum HeightSort {
  TOP,
  CENTER,
  BOTTOM,
}
enum WidthSort {
  LEFT,
  CENTER,
  RIGHT,
}
export interface ArticleForm {
  title: ArticleTitle;
  footer: ArticleFooter;
  file?: File;
}

export class ArticleCreateRequest implements ArticleForm {
  title: ArticleTitle;
  footer: ArticleFooter;
  file?: File;

  constructor() {
    this.title = new ArticleTitle();
    this.footer = new ArticleFooter();
  }
}

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

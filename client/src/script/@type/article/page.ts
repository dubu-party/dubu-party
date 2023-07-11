export class Page {
  totalPages?: number;
  current: number;
  size: number;
  constructor() {
    this.totalPages = 0;
    this.current = 1;
    this.size = 9;
  }
}

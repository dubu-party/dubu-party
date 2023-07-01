export class User {
  id: number;
  email: string;
  nickname: string;
  instagram: string;
  profileUrl?: string;
  constructor() {
    this.id = 0;
    this.email = "";
    this.nickname = "";
    this.instagram = "";
  }
}

export interface SimpleUser {
  id: number;
  nickname: string;
  profileUrl?: string;
}

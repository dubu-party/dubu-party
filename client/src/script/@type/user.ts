export class User {
  id: number;
  email: string;
  nickname: string;
  phoneNumber: string;
  profileUrl?: string;
  constructor() {
    this.id = 0;
    this.email = "";
    this.nickname = "";
    this.phoneNumber = "";
  }
}

declare interface User {
  username?: string;
  password?: string;
  email?: string;
  phone?: string;
  image?: string;
  createAt?: Date;
  updateAt?: Date;
  [key: string]: any;
}

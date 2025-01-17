export interface User {
  id: string;
  name: string;
  username: string;
  token: string;
  favorites: string[];
  createdAt: Date;
  updatedAt: Date;
}

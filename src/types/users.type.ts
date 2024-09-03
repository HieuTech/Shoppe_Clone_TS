enum UserVerifyStatus {
  Unverified, // chưa xác thực email, mặc định = 0
  Verified, // đã xác thực• email
  Banned, //bi khoa
}

export interface User {
  _id?: string;
  name: string;
  email: string;
  date_of_birth: Date;
  password: string;
  created_at: Date;
  updated_at: Date;
  email_verify_token: string; // jwt hoặc "" nếu đã xác thực emoil
  forgot_password_token: string; // jwt hoặc néu đã xác thực emoil
  verify: UserVerifyStatus;
  bio: string; // perional
  location: string;

  website: string;
  username: string;
  avatar: string; // optionol
  cover_photo: string; //optional
}

//method Pick ben typescript
export type Users = Pick<User, "_id" | "email" | "date_of_birth">[];

export interface GetUserResponse {
  users: Users;
  currentPage: number;
}

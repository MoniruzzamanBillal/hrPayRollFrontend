export type Role = "ADMIN" | "MANAGER" | "EMPLOYEE";

export interface IUser {
  userId: string;
  userEmail: string;
  userRole: Role;
}

export interface ILoginPayload {
  email: string;
  password: string;
}

export interface ILoginResponse {
  accessToken: string;
  refreshToken: string;
}

import { getAccessToken } from "@/utils/tokenManager";
import jwt from "jsonwebtoken";

// export interface DecodedToken {
//   userId: string;
//   userRole: keyof typeof userRoleConts;
//   profileImage?: string;
//   iat: number;
//   exp: number;
// }

export const useGetUser = () => {
  const accessToken = getAccessToken();

  if (accessToken) {
    // const decode = jwtDecode<DecodedToken>(accessToken);
    const decoded = jwt.decode(accessToken);

    return decoded;
  }

  return null;
};

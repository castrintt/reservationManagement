import { AuthLoginRequest } from "@request/AuthLoginRequest";
import { AuthLoginResponse } from "@response/AuthLoginResponse";

export interface IAuthService {
  authLogin(login: AuthLoginRequest): Promise<AuthLoginResponse>;
}

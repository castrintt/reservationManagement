import { AuthLoginRequest } from "@request/AuthLoginRequest";
import { AuthLoginResponse } from "@response/AuthLoginResponse";
import { IAuthService } from "./interfaces/IAuthService";
import { axiosInstances } from "@config/axiosInstances";
import { callToast } from "@utils/toastCall";

export default class AuthService implements IAuthService {
  private _http = axiosInstances.publicUsers;

  async authLogin(login: AuthLoginRequest): Promise<AuthLoginResponse> {
    return await this._http
      .get("auth/login", { params: login })
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        }
        callToast("Usuário não cadastrado", "warning");
        return null;
      })
      .catch((err) => {
        if (err) {
          callToast("Usuário não cadastrado", "warning");
        }
        return null;
      });
  }
}

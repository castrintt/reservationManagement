import { lazy } from "react";

const Common = {
  Unauthorize: lazy(() => import("../Pages/Common/Unauthorize/Unauthorize")),
  NotFound: lazy(() => import("../Pages/Common/NotFound/NotFound")),
  Login: lazy(() => import("../Pages/Common/Login/Login")),
};

const Client = {
  Register: lazy(() => import("../Pages/Client/Register/Register")),
};

export { Common, Client };

import { lazy } from "react";

const Common = {
  Unauthorize: lazy(() => import("@pages/Common/Unauthorize/Unauthorize")),
  NotFound: lazy(() => import("@pages/Common/NotFound/NotFound")),
  Login: lazy(() => import("@pages/Common/Login/Login")),
};

const Client = {
  Register: lazy(() => import("@pages/Client/Register/Register")),
};

const Adm = {
  Home: lazy(() => import("@pages/Adm/Home/Home")),
};

export { Common, Client, Adm };

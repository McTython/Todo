import Main from "../../pages/Main/ui/Main";
import NotFound from "../../pages/NotFound/ui/NotFound";
import { IRouteItem } from "./interfaces/IRouteItem";

export enum ERoute {
  Main = "/",
  NotFound = "*",
}

export const routes: IRouteItem[] = [
  {
    path: ERoute.Main,
    element: <Main />,
  },
  {
    path: ERoute.NotFound,
    element: <NotFound />,
  },
];

import { Route, Routes } from "react-router-dom";
import { routes } from "../../config/routes";
import { Suspense } from "react";

const RoutesMap = (): React.ReactElement => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<Suspense fallback={"От такот"}>{route.element}</Suspense>}
        />
      ))}
    </Routes>
  );
};

export default RoutesMap;

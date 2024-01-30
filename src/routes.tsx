/* eslint-disable @typescript-eslint/no-explicit-any */
import { Route, Routes, Navigate } from "react-router-dom";

// PAGES
import App from "./App";

// PAGES
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function BasicRouteComponent(path: string, component: JSX.Element) {
  return { string: path, component: component };
}

const routePaths = {
  DEFAULT: BasicRouteComponent("*", <Navigate to={"/"} />),
  HOME: BasicRouteComponent("/", <HomePage />),
  PROFILE: BasicRouteComponent("/profile", <ProfilePage />),
  // USER: BasicRouteComponent("admin/:id", <ProfilePage />)
};

const RoutesEnneConfeitaria = () => (
  <App>
    <Routes>
      {Object.values(routePaths).map((route, idx) => {
        return (
          <Route
            key={route.string + idx}
            path={route.string}
            element={route.component}
          />
        );
      })}
    </Routes>
  </App>
);

export default RoutesEnneConfeitaria;

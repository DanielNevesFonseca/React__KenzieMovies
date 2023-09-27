import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";
import { MoviePage } from "../pages/MoviePage/MoviePage";
import { PublicRoutes } from "./PublicRoutes/PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes/PrivateRoutes";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      <Route element={<PrivateRoutes />}></Route>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MoviePage />} />
    </Routes>
  );
};

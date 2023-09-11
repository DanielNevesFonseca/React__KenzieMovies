import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";
import { DashboardPage } from "../pages/DashboardPage/DashboardPage";
import { PublicRoutes } from "./PublicRoutes/PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes/PrivateRoutes";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}></Route>
      <Route element={<PrivateRoutes />}></Route>
      {/* Páginas */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
};

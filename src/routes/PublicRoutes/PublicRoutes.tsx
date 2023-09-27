import { Navigate, Outlet } from "react-router-dom";

export const PublicRoutes = () => {
  const userToken = localStorage.getItem("@Kenzie-Movie:user-token");

  return <>{!userToken ? <Outlet /> : <Navigate to={"/"} />}</>;
};

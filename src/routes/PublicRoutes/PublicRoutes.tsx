import { Navigate, Outlet } from "react-router-dom"

export const PublicRoutes = () => {
  
  const user = true;
  
  return(
    <>
    {!user ? <Outlet/> : <Navigate to={"/"}/>}
    </>
  )
}
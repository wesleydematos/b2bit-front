import { Navigate, Outlet } from "react-router-dom";

export default function AuthRoutes() {
  const token = localStorage.getItem("@Token-b2bit");

  return token ? <Outlet /> : <Navigate to="/" />;
}

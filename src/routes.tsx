import { Route, Routes } from "react-router-dom";
import { AuthRoutes, Profile, SignIn } from "./pages";

export default function RoutesMain() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route element={<AuthRoutes />}>
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

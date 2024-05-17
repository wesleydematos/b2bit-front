import { Route, Routes } from "react-router-dom";
import { AuthRoutes, Profile, SignIn } from "./pages";
import NotFoundPage from "./pages/NotFoundPage";

export default function RoutesMain() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route element={<AuthRoutes />}>
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

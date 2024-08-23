import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/auth/signin" element={<Login />} />
        <Route path="/auth/signup" element={<Register />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
};

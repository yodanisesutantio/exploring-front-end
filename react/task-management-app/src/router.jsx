import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "@/components/layouts/MainLayout";
import GuestLayout from "@/components/layouts/GuestLayout";
import Login from "@/components/pages/Authentication/Login";
import Signup from "@/components/pages/Authentication/Signup";
import ForgotPassword from "@/components/pages/Authentication/ForgotPassword";
import NotFound from "@/components/pages/NotFound";
import GetStarted from "@/components/pages/GetStarted";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/get-started" />,
      },
      {
        path: "/get-started",
        element: <GetStarted />,
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/forgot",
        element: <ForgotPassword />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;

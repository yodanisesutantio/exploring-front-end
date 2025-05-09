import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "@/components/context/ContextProvider";

export default function MainLayout() {
  const { token } = useStateContext();

  // When token is invalid, redirect them from main app to /login
  if (!token) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      {/* To display children page components */}
      <Outlet />
    </div>
  );
}

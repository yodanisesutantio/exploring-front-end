import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useStateContext } from "@/components/context/ContextProvider";

export default function GuestLayout() {
  const { token } = useStateContext();

  // When token is valid, navigate to main app, which when I write this comment should be to /get-started
  if (token) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      {/* To display children page components */}
      <Outlet />
    </div>
  );
}

import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "@/components/context/ContextProvider";
import { VStack } from "@chakra-ui/react";

export default function MainLayout() {
  const { token } = useStateContext();

  // When token is invalid, redirect them from main app to /login
  if (!token) {
    return <Navigate to="/login" />;
  }
  return (
    <VStack display={"flex"} textAlign={"center"} flexGrow={"grow"}>
      {/* To display children page components */}
      <Outlet />
    </VStack>
  );
}

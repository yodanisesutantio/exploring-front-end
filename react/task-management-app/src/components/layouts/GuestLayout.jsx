import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useStateContext } from "@/components/context/ContextProvider";
import { VStack } from "@chakra-ui/react";

export default function GuestLayout() {
  const { token } = useStateContext();

  // When token is valid, navigate to main app, which when I write this comment should be to /get-started
  if (token) {
    return <Navigate to="/" />;
  }

  return (
    <VStack
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      backgroundColor={"gray.50"}
      textAlign={"center"}
      width={"100vw"}
      height={"100vh"}
    >
      {/* To display children page components */}
      <Outlet />
    </VStack>
  );
}

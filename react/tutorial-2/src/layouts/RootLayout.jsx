import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function RootLayout() {
  return (
    <Grid templateColumns={"repeat(6, 1fr)"} backgroundColor={"whiteAlpha.200"}>
      <GridItem
        as={"aside"}
        colSpan={{ base: 6, lg: 2, xl: 1 }}
        backgroundColor={"red.600"}
        minHeight={{ lg: "100vh" }}
        padding={{ base: 3, xl: 7 }}
      >
        <Sidebar />
      </GridItem>
      <GridItem
        as={"main"}
        colSpan={{ base: 6, lg: 4, xl: 5 }}
        paddingX={{ base: 6, xl: 10 }}
        paddingY={{ base: 2, xl: 4 }}
      >
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  );
}

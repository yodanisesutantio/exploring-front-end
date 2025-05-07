import { Box, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Dashboard = () => {
  return (
    <Container maxWidth={"2xl"} as={"section"} paddingY={"5"}>
      <Heading marginY={"30px"} padding={"10px"}>
        Chakra UI Component
      </Heading>
      <Text marginLeft={"30px"}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, non?
      </Text>

      <Box
        padding={"10"}
        backgroundColor={"teal.700"}
        color={"white"}
        textAlign={"center"}
      >
        Hello, Trainers!
      </Box>
    </Container>
  );
};

export default Dashboard;

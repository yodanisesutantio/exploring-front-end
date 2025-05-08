import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Flex
      as={"nav"}
      padding={"2"}
      alignItems={"center"}
      gap={"2"}
      marginBottom={"6"}
    >
      <Heading as={"h1"} textStyle={"3xl"}>
        Gen 5 Pokedex
      </Heading>
      <Spacer />

      <HStack gap={"4"}>
        <Box
          backgroundColor={"gray.200"}
          color={"black"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius={"full"}
          textAlign={"center"}
          width={"10"}
          height={"10"}
        >
          T
        </Box>
        <Text>trainer@pokemon.com</Text>
        <Button colorPalette={"red"}>Logout</Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;

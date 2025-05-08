import {
  Avatar,
  Box,
  Button,
  defineStyle,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
  // useToastStyles,
} from "@chakra-ui/react";
import React from "react";
import { toaster } from "./ui/toaster";

const Navbar = () => {
  const ringCss = defineStyle({
    outlineWidth: "2px",
    outlineColor: "colorPalette.500",
    outlineOffset: "2px",
    outlineStyle: "solid",
  });

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
        <Avatar.Root css={ringCss} variant={"solid"} colorPalette={"red"}>
          <Avatar.Fallback name="Ash Ketchum" />
          <Avatar.Image src="https://i.pinimg.com/736x/7f/36/4b/7f364bd9bede19320c1c71f448bd8f58.jpg" />
        </Avatar.Root>
        <Text>ash.trainer@pokemon.com</Text>
        <Button
          colorPalette={"red"}
          fontWeight={600}
          onClick={() =>
            toaster.create({
              title: "Log Out",
              description: "Logout successfully",
              type: "error",
              duration: 4000,
            })
          }
        >
          Logout
        </Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;

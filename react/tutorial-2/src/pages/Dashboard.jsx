import {
  Avatar,
  Box,
  Button,
  Card,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { LiaEye, LiaHeart } from "react-icons/lia";
import { useLoaderData } from "react-router-dom";

const Dashboard = () => {
  const pokemons = useLoaderData();

  return (
    <SimpleGrid columns={4} gap={"4"} minChildWidth={"300px"}>
      {pokemons &&
        pokemons.map((pokemon) => (
          <Card.Root key={pokemon.id} bg={"red.500/5"}>
            <Card.Header>
              <HStack gap={"4"}>
                <Avatar.Root
                  variant={"outline"}
                  size={"xl"}
                  colorPalette={"red"}
                >
                  <Avatar.Fallback name={pokemon.name} />
                  <Avatar.Image src={pokemon.thumb} />
                </Avatar.Root>

                <Stack gap={"0"}>
                  <Text color={"whiteAlpha.600"} textStyle={"sm"}>
                    {pokemon.pType}
                    {pokemon.sType && ` · ${pokemon.sType}`}
                  </Text>
                  <Heading
                    as={"h2"}
                    marginTop={"-4px"}
                    fontFamily={"fantasy"}
                    textStyle={"xl"}
                  >
                    {pokemon.name}
                  </Heading>
                </Stack>
              </HStack>
            </Card.Header>

            <Card.Body>
              <Text
                color={"whiteAlpha.700"}
                fontFamily={"mono"}
                textStyle={"sm"}
                textAlign={"justify"}
              >
                {pokemon.description}
              </Text>
            </Card.Body>

            <Card.Footer
              justifyContent={"end"}
              paddingY={"6"}
              borderTop={"2px solid"}
              borderColor={"whiteAlpha.300"}
            >
              <HStack width={"full"} justifyContent={"space-between"}>
                <HStack>
                  <Button variant={"outline"} paddingX={3} colorPalette={"red"}>
                    <LiaEye /> Watch
                  </Button>
                  <Button
                    variant={"outline"}
                    paddingX={3}
                    colorPalette={"pink"}
                  >
                    <LiaHeart /> Favorite
                  </Button>
                </HStack>
                <Text
                  textStyle={"sm"}
                  textAlign={"right"}
                  color={"whiteAlpha.600"}
                >
                  #{pokemon.id}
                </Text>
              </HStack>
            </Card.Footer>
          </Card.Root>
        ))}
    </SimpleGrid>
  );
};

export const pokemonsLoader = async () => {
  const res = await fetch("http://localhost:8000/pokemons");

  return res.json();
};

export default Dashboard;

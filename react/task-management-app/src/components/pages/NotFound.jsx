import { Box, Heading, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";

const NotFound = () => {
  return (
    <>
      <Box
        display={"flex"}
        width={"100vw"}
        height={"100vh"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <VStack>
          <Text paddingY={6} color={"gray.400"} letterSpacing={"0.3rem"}>
            Oops! Page Not Found
          </Text>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            fontFamily="'Cal Sans', sans-serif"
          >
            <Heading
              as="span"
              fontSize="160pt"
              color="gray.200"
              css={{
                WebkitTextStroke: "5px #09090B",
              }}
            >
              4
            </Heading>
            <Heading
              as="span"
              fontSize="160pt"
              color="gray.400"
              mx={-8}
              css={{
                WebkitTextStroke: "5px #09090B",
              }}
            >
              0
            </Heading>
            <Heading
              as="span"
              fontSize="160pt"
              color="gray.400"
              css={{
                WebkitTextStroke: "5px #09090B",
              }}
            >
              4
            </Heading>
          </Box>

          <Text paddingY={6} color={"gray.400"}>
            Don't worry! We can help you{" "}
            <Link
              href="/"
              textDecoration={"underline"}
              fontWeight={"500"}
              _hover={{ textDecoration: "none" }}
            >
              return to home
            </Link>
          </Text>
        </VStack>
      </Box>
    </>
  );
};

export default NotFound;

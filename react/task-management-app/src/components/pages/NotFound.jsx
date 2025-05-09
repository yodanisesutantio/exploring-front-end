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
        marginTop={"-4"}
        justifyContent={"center"}
      >
        <VStack>
          <Text color={"gray.400"} letterSpacing={"0.3rem"}>
            Oops! Page Not Found
          </Text>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop={"-8"}
            fontFamily="'Cal Sans', sans-serif"
          >
            <Heading
              as="span"
              fontSize="160pt"
              color="white"
              lineHeight={1}
              css={{
                WebkitTextStroke: "4px #09090B",
              }}
            >
              4
            </Heading>
            <Heading
              as="span"
              fontSize="160pt"
              color="white"
              lineHeight={1}
              mx={-8}
              css={{
                WebkitTextStroke: "4px #09090B",
              }}
            >
              0
            </Heading>
            <Heading
              as="span"
              fontSize="160pt"
              color="white"
              lineHeight={1}
              css={{
                WebkitTextStroke: "4px #09090B",
              }}
            >
              4
            </Heading>
          </Box>

          <Text color={"gray.400"}>
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

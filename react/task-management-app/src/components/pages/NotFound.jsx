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
          <Text color={"gray.400"} letterSpacing={"0.3rem"} marginBottom={6}>
            Oops! Page Not Found
          </Text>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop={"-8"}
          >
            <Heading as="span" fontSize="160pt" color="white" lineHeight={0.8}>
              4
            </Heading>
            <Heading
              as="span"
              fontSize="160pt"
              color="white"
              lineHeight={0.8}
              mx={-8}
            >
              0
            </Heading>
            <Heading as="span" fontSize="160pt" color="white" lineHeight={0.8}>
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

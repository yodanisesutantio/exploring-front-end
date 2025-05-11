import {
  Box,
  Circle,
  Float,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <>
      <VStack marginBottom={8} width={"54rem"}>
        <Heading as={"h1"} textStyle={"4xl"}>
          Which Task do you want to manage?
        </Heading>
        <Text as={"p"} textStyle={"md"}>
          You can manage today's task by clicking on the left option, or create
          new, edit or remove a recurring task by clicking the option on the
          right
        </Text>
      </VStack>

      <HStack gap={12}>
        <Link to={"/task"}>
          <Box
            width={"26rem"}
            aspectRatio={1 / 1}
            borderRadius={"xl"}
            cursor={"pointer"}
            bgImage={"url(/task.png)"}
            bgPos={"center"}
            bgSize={"cover"}
            border={"1px solid #00000010"}
            position={"relative"}
            padding={"6"}
            transition={"all 500ms ease"}
            _hover={{
              boxShadow: "2xl",
              transform: "scale(1.02)",
            }}
          >
            <Heading as={"h2"} textStyle={"2xl"} color={"black"}>
              Today's Task
            </Heading>
            <Float placement={"top-end"}>
              <Circle size="12" bg="red.400" color="white" fontWeight={600}>
                3
              </Circle>
            </Float>
          </Box>
        </Link>

        <Link to={"/recurring"}>
          <Box
            width={"26rem"}
            aspectRatio={1 / 1}
            borderRadius={"xl"}
            cursor={"pointer"}
            bgImage={"url(/calendar.png)"}
            bgPos={"center"}
            bgSize={"cover"}
            border={"1px solid #00000010"}
            position={"relative"}
            padding={"6"}
            transition={"all 500ms ease"}
            _hover={{
              boxShadow: "2xl",
              transform: "scale(1.02)",
            }}
          >
            <Heading as={"h2"} textStyle={"2xl"} color={"black"}>
              Recurring Task
            </Heading>
            <Float placement={"top-end"}>
              <Circle size="12" bg="red.400" color="white" fontWeight={600}>
                7
              </Circle>
            </Float>
          </Box>
        </Link>
      </HStack>
    </>
  );
};

export default GetStarted;

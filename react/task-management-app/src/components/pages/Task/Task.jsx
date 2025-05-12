import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Card,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { LiaArrowLeftSolid, LiaCheckCircle, LiaCircle } from "react-icons/lia";
import { Link } from "react-router-dom";

const Task = () => {
  const today = new Date().toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Box paddingY={8} paddingX={"28rem"} width={"full"}>
      <Box marginBottom={8} textAlign={"left"}>
        <Link to={"/"}>
          <Button variant={"surface"} paddingStart={3} marginBottom={4}>
            <LiaArrowLeftSolid />
            Back
          </Button>
        </Link>

        <Heading as={"h1"} textStyle={"4xl"}>
          Task for Today
        </Heading>
        <Text as={"p"} textStyle={"md"}>
          This is the task for today - {today}
        </Text>
      </Box>

      <VStack gap={6}>
        {/* Task List */}
        <Card.Root width={"full"}>
          <Card.Header
            display={"flex"}
            flexDirection={"row"}
            gap={6}
            justifyContent={"space-between"}
          >
            <Box gap={0}>
              <Card.Title as={"h1"} textStyle={"3xl"}>
                Task #1
              </Card.Title>
              <Card.Description>
                Priority: High, Mid, Low | Recurring Daily, or Monthly or Weekly
              </Card.Description>
            </Box>

            <Badge
              colorPalette="green"
              variant={"surface"}
              height={"fit"}
              padding={2}
              textStyle={"sm"}
              fontWeight={600}
            >
              <LiaCheckCircle />
              Completed
            </Badge>
            {/* <Badge
              colorPalette="yellow"
              variant={"surface"}
              height={"fit"}
              padding={2}
              textStyle={"sm"}
              fontWeight={600}
            >
              <LiaCircle />
              Not Completed
            </Badge> */}
          </Card.Header>

          <Card.Body gap={4}>
            <Text>
              Description: Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Similique fugiat hic harum officia fugit dicta!
            </Text>
            <Text>Deadline: Lorem, ipsum.</Text>
            <Text>For: (Person or Organization)</Text>
          </Card.Body>

          <Card.Footer
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            gap={6}
          >
            <ButtonGroup variant={"subtle"}>
              <Button>Edit Task</Button>
              <Button>Remove Task</Button>
            </ButtonGroup>

            <Button variant={"outline"} fontWeight={600}>
              Mark as Incomplete
            </Button>
          </Card.Footer>
        </Card.Root>

        <Card.Root width={"full"}>
          <Card.Header
            display={"flex"}
            flexDirection={"row"}
            gap={6}
            justifyContent={"space-between"}
          >
            <Box gap={0}>
              <Card.Title as={"h1"} textStyle={"3xl"}>
                Task #2
              </Card.Title>
              <Card.Description>
                Priority: High, Mid, Low | Recurring Daily, or Monthly or Weekly
              </Card.Description>
            </Box>

            {/* <Badge
              colorPalette="green"
              variant={"surface"}
              height={"fit"}
              padding={2}
              textStyle={"sm"}
              fontWeight={600}
            >
              <LiaCheckCircle />
              Completed
            </Badge> */}
            <Badge
              colorPalette="yellow"
              variant={"surface"}
              height={"fit"}
              padding={2}
              textStyle={"sm"}
              fontWeight={600}
            >
              <LiaCircle />
              Not Completed
            </Badge>
          </Card.Header>

          <Card.Body gap={4}>
            <Text>
              Description: Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Similique fugiat hic harum officia fugit dicta!
            </Text>
            <Text>Deadline: Lorem, ipsum.</Text>
            <Text>For: (Person or Organization)</Text>
          </Card.Body>

          <Card.Footer
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            gap={6}
          >
            <ButtonGroup variant={"subtle"}>
              <Button>Edit Task</Button>
              <Button>Remove Task</Button>
            </ButtonGroup>

            <Button variant={"solid"} fontWeight={600}>
              Mark as Completed
            </Button>
          </Card.Footer>
        </Card.Root>
      </VStack>
    </Box>
  );
};

export default Task;

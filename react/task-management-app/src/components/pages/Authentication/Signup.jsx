import { PasswordInput } from "@/components/ui/password-input";
import {
  Button,
  Field,
  Fieldset,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
  Link,
  Card,
  Box,
  Steps,
  ButtonGroup,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import { LiaArrowLeftSolid } from "react-icons/lia";
import { Form } from "react-router-dom";

const Signup = () => {
  return (
    <Form>
      <Steps.Root variant={"solid"} count={2}>
        <Steps.List>
          <Steps.Item key={0} index={0} title={"User Information"}>
            <Steps.Indicator />
            <Steps.Title>User Information</Steps.Title>
            <Steps.Separator />
          </Steps.Item>
          <Steps.Item key={1} index={1} title={"Security Question"}>
            <Steps.Indicator />
            <Steps.Title>Security Question</Steps.Title>
            <Steps.Separator />
          </Steps.Item>
        </Steps.List>

        <Steps.Content key={0} index={0}>
          <Card.Root
            width={"26rem"}
            padding={2}
            border={"1px solid #ffffff22"}
            borderRadius={"md"}
            variant={"elevated"}
          >
            <Card.Header gap={0}>
              <Card.Title as={"h1"} textStyle={"3xl"}>
                Register Account
              </Card.Title>
              <Card.Description>
                Create your new account via the form down below
              </Card.Description>
            </Card.Header>

            <Card.Body gap={6}>
              <Field.Root required>
                <Field.Label>
                  Username
                  <Field.RequiredIndicator />
                </Field.Label>
                <Input name="username" placeholder="Enter your Username" />
              </Field.Root>
              <Field.Root required>
                <Field.Label>
                  Password
                  <Field.RequiredIndicator />
                </Field.Label>
                <PasswordInput placeholder="Enter your Password" />
              </Field.Root>
              <Field.Root required>
                <Field.Label>
                  Confirm Password
                  <Field.RequiredIndicator />
                </Field.Label>
                <PasswordInput placeholder="Confirm your Password" />
              </Field.Root>

              <Field.Root>
                <Steps.NextTrigger width={"full"} as={"div"}>
                  <Button
                    fontWeight={"700"}
                    colorPalette={"cyan"}
                    width={"full"}
                  >
                    Next
                  </Button>
                </Steps.NextTrigger>
                <Text textAlign={"center"} width={"full"}>
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    textDecoration={"underline"}
                    fontWeight={"500"}
                    _hover={{ textDecoration: "none" }}
                  >
                    Login here
                  </Link>
                </Text>
              </Field.Root>
            </Card.Body>
          </Card.Root>
        </Steps.Content>

        <Steps.Content key={1} index={1}>
          <Card.Root
            width={"26rem"}
            padding={2}
            border={"1px solid #ffffff22"}
            borderRadius={"md"}
            variant={"elevated"}
          >
            <Card.Header gap={0}>
              <Steps.PrevTrigger
                display={"flex"}
                justifyContent={"start"}
                width={"full"}
                as={"div"}
                marginBottom={3}
              >
                <Button color={"gray.500"} variant={"subtle"} paddingStart={3}>
                  <LiaArrowLeftSolid />
                  Back
                </Button>
              </Steps.PrevTrigger>

              <Card.Title as={"h1"} textStyle={"3xl"}>
                Security Question
              </Card.Title>
              <Card.Description>
                Provide your password challenge, in case of you choose to forgot
                password
              </Card.Description>
            </Card.Header>

            <Card.Body gap={6}>
              <Field.Root required>
                <Field.Label>
                  Forgot Password Question Challenge
                  <Field.RequiredIndicator />
                </Field.Label>
                <Input name="qChallenge" placeholder="Enter your Question" />
              </Field.Root>
              <Field.Root required>
                <Field.Label>
                  Forgot Password Answer Challenge
                  <Field.RequiredIndicator />
                </Field.Label>
                <Input
                  name="aChallenge"
                  placeholder="Enter your Answer from the question above"
                />
              </Field.Root>
              <Field.Root>
                <Button fontWeight={"700"} colorPalette={"cyan"} width={"full"}>
                  Signup
                </Button>
                <Text textAlign={"center"} width={"full"}>
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    textDecoration={"underline"}
                    fontWeight={"500"}
                    _hover={{ textDecoration: "none" }}
                  >
                    Login here
                  </Link>
                </Text>
              </Field.Root>
            </Card.Body>
          </Card.Root>
        </Steps.Content>
      </Steps.Root>
    </Form>
  );
};

export default Signup;

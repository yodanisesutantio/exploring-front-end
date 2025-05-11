import { PasswordInput } from "@/components/ui/password-input";
import {
  Button,
  Field,
  Fieldset,
  Card,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
  Link,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { Form } from "react-router-dom";

const Login = () => {
  return (
    <Form>
      <Card.Root
        width={"26rem"}
        padding={2}
        border={"1px solid #ffffff22"}
        borderRadius={"md"}
        variant={"elevated"}
      >
        <Card.Header gap={0}>
          <Card.Title as={"h1"} textStyle={"3xl"}>
            Login to the App
          </Card.Title>
          <Card.Description>
            Please enter your account credentials
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
            <Box display={"flex"} justifyContent={"end"} width={"full"}>
              <Link
                href="/forgot"
                textDecoration={"underline"}
                fontWeight={"500"}
                _hover={{ textDecoration: "none" }}
              >
                Forgot Password
              </Link>
            </Box>
          </Field.Root>
          <Field.Root>
            <Button fontWeight={"700"} colorPalette={"cyan"} width={"full"}>
              Login
            </Button>
            <Text textAlign={"center"} width={"full"}>
              Don't have an account?{" "}
              <Link
                href="/signup"
                textDecoration={"underline"}
                fontWeight={"500"}
                _hover={{ textDecoration: "none" }}
              >
                Register Instead
              </Link>
            </Text>
          </Field.Root>
        </Card.Body>
      </Card.Root>
    </Form>
  );
};

export default Login;

import { PasswordInput } from "@/components/ui/password-input";
import {
  Button,
  Field,
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
    // Form component is using react-router-dom instead of chakraUI component
    <Form>
      <Card.Root
        width={"26rem"}
        padding={2}
        border={"1px solid #00000022"}
        borderRadius={"md"}
        variant={"elevated"}
        // Animation props
        data-state="open"
        opacity={0}
        _open={{
          animation: "fade-in 500ms ease 300ms forwards",
        }}
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
          {/* Username Entry Field */}
          <Field.Root required>
            <Field.Label>
              Username
              <Field.RequiredIndicator />
            </Field.Label>
            <Input name="username" placeholder="Enter your Username" />
          </Field.Root>

          {/* Password Entry Field */}
          <Field.Root required>
            <Field.Label>
              Password
              <Field.RequiredIndicator />
            </Field.Label>
            <PasswordInput placeholder="Enter your Password" />

            {/* Forgot Password button */}
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

          {/* CTA Button and Redirect to Register Link */}
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

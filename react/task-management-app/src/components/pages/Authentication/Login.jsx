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
} from "@chakra-ui/react";
import React from "react";
import { Form } from "react-router-dom";

const Login = () => {
  return (
    <VStack
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      textAlign={"center"}
      width={"100vw"}
      height={"100vh"}
    >
      <Form>
        <Fieldset.Root
          width={"24rem"}
          padding={6}
          border={"1px solid #ffffff22"}
          borderRadius={"md"}
        >
          <Stack gap={0}>
            <Fieldset.Legend>
              <Heading as={"h1"} textStyle={"3xl"}>
                Login to the App
              </Heading>
            </Fieldset.Legend>
            <Fieldset.HelperText>
              Please enter your account credentials
            </Fieldset.HelperText>
          </Stack>

          <Fieldset.Content>
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
            <Button fontWeight={"700"} colorPalette={"orange"}>
              Login
            </Button>
            <Text>
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
          </Fieldset.Content>
        </Fieldset.Root>
      </Form>
    </VStack>
  );
};

export default Login;

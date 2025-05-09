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

const Signup = () => {
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
                Register Account
              </Heading>
            </Fieldset.Legend>
            <Fieldset.HelperText>
              Create your new account via the form down below
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
            <Field.Root required>
              <Field.Label>
                Confirm Password
                <Field.RequiredIndicator />
              </Field.Label>
              <PasswordInput placeholder="Confirm your Password" />
            </Field.Root>
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
            <Button fontWeight={"700"} colorPalette={"orange"}>
              Signup
            </Button>
            <Text>
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
          </Fieldset.Content>
        </Fieldset.Root>
      </Form>
    </VStack>
  );
};

export default Signup;

import {
  Box,
  Button,
  createListCollection,
  defineStyle,
  Field,
  Fieldset,
  Heading,
  Input,
  Portal,
  Select,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { Form, redirect } from "react-router-dom";

const Create = () => {
  return (
    <Stack maxWidth={"360px"} gap={6}>
      <Heading>Add New Pokemon</Heading>

      <Form method="post" action="/create">
        <Fieldset.Root>
          <Field.Root>
            <Box pos="relative" w="full">
              <Input className="peer" name="name" placeholder="" />
              <Field.Label css={floatingStyles}>Pokemon Name</Field.Label>
            </Box>
          </Field.Root>

          <Select.Root required variant={"outline"} collection={pokemonType}>
            <Select.HiddenSelect name="pType" />
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText placeholder="-- Choose Primary Type --" />
              </Select.Trigger>
              <Select.IndicatorGroup>
                <Select.Indicator />
              </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
              <Select.Positioner>
                <Select.Content>
                  {pokemonType.items.map((type) => (
                    <Select.Item item={type} key={type.value}>
                      {type.label}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>

          <Select.Root variant={"outline"} collection={pokemonType}>
            <Select.HiddenSelect name="sType" />
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText placeholder="-- Choose Secondary Type --" />
              </Select.Trigger>
              <Select.IndicatorGroup>
                <Select.Indicator />
              </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
              <Select.Positioner>
                <Select.Content>
                  {pokemonType.items.map((type) => (
                    <Select.Item item={type} key={type.value}>
                      {type.label}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>

          <Field.Root>
            <Textarea
              placeholder="Enter Pokemon Description"
              name="description"
            />
          </Field.Root>

          <Field.Root>
            <Textarea placeholder="Enter Pokemon Thumbnail URL" name="thumb" />
          </Field.Root>

          <Button type="submit" colorPalette={"red"} fontWeight={600}>
            Add Pokemon
          </Button>
        </Fieldset.Root>
      </Form>
    </Stack>
  );
};

const pokemonType = createListCollection({
  items: [
    { label: "Normal", value: "Normal" },
    { label: "Fire", value: "Fire" },
    { label: "Water", value: "Water" },
    { label: "Grass", value: "Grass" },
    { label: "Electric", value: "Electric" },
    { label: "Ice", value: "Ice" },
    { label: "Fighting", value: "Fighting" },
    { label: "Poison", value: "Poison" },
    { label: "Ground", value: "Ground" },
    { label: "Flying", value: "Flying" },
    { label: "Psychic", value: "Psychic" },
    { label: "Dark", value: "Dark" },
    { label: "Bug", value: "Bug" },
    { label: "Rock", value: "Rock" },
    { label: "Ghost", value: "Ghost" },
    { label: "Dragon", value: "Dragon" },
  ],
});

const floatingStyles = defineStyle({
  pos: "absolute",
  bg: "#111",
  px: "0.5",
  top: "-3",
  insetStart: "2",
  fontWeight: "normal",
  pointerEvents: "none",
  transition: "position",
  _peerPlaceholderShown: {
    color: "fg.muted",
    top: "2.5",
    insetStart: "3",
  },
  _peerFocusVisible: {
    color: "fg",
    top: "-3",
    insetStart: "2",
  },
});

export const createAction = async ({ request }) => {
  const data = await request.formData();

  const newPokemon = {
    name: data.get("name"),
    pType: data.get("pType"),
    sType: data.get("sType"),
    description: data.get("description"),
    thumb: data.get("thumb"),
  };

  console.log(newPokemon);

  return redirect("/");
};

export default Create;

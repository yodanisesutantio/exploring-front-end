import { Heading, List, Tabs } from "@chakra-ui/react";
import React from "react";
import { LiaEnvelope, LiaHeart, LiaUser } from "react-icons/lia";

const Profile = () => {
  return (
    <Tabs.Root
      variant={"line"}
      padding={"5"}
      defaultValue={"account"}
      colorPalette={"red"}
      size={"lg"}
    >
      <Tabs.List>
        <Tabs.Trigger value="account" _selected={{ color: "red.600" }}>
          <LiaUser /> Account Info
        </Tabs.Trigger>

        <Tabs.Trigger value="favorites" _selected={{ color: "red.600" }}>
          <LiaHeart /> Favorites
        </Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="account">
        <Heading>Account Info</Heading>

        <List.Root gap={"2"} marginTop={"6"} variant={"plain"}>
          <List.Item>
            <List.Indicator asChild>
              <LiaEnvelope />
            </List.Indicator>
            : trainer@pokemon.com
          </List.Item>
        </List.Root>
      </Tabs.Content>
      <Tabs.Content value="favorites">
        <Heading>Favorites</Heading>
      </Tabs.Content>
    </Tabs.Root>
  );
};

export default Profile;

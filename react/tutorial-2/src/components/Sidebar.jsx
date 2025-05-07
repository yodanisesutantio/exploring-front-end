import { List } from "@chakra-ui/react";
import React from "react";
import { LiaHomeSolid, LiaPlusSolid, LiaUser } from "react-icons/lia";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <List.Root
      color={"white"}
      fontSize={"1"}
      listStyle={"none"}
      gap={"5"}
      fontWeight={500}
    >
      <List.Item>
        <NavLink to={"/"}>
          <List.Indicator asChild color={"white"}>
            <LiaHomeSolid />
          </List.Indicator>
          Dashboard
        </NavLink>
      </List.Item>
      <List.Item>
        <NavLink to={"/create"}>
          <List.Indicator asChild color={"white"}>
            <LiaPlusSolid />
          </List.Indicator>
          Add Pokemon
        </NavLink>
      </List.Item>
      <List.Item>
        <NavLink to={"/profile"}>
          <List.Indicator asChild color={"white"}>
            <LiaUser />
          </List.Indicator>
          Profile
        </NavLink>
      </List.Item>
    </List.Root>
  );
};

export default Sidebar;

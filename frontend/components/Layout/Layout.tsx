import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { ColorModeSwitch } from "../common/ColorModeSwitch";
import { NavBar } from "./NavBar";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <NavBar />
      <Box px={"14px"} mx={"auto"} maxW={"1740px"}>
        <Flex justify={"flex-end"}>
          <ColorModeSwitch />
        </Flex>
        {children}
      </Box>
    </>
  );
};

export default Layout;

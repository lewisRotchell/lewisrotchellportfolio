import { Box } from "@chakra-ui/react";
import React from "react";
import { NavBar } from "./NavBar";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <NavBar />
      <Box maxW={"1920px"}>{children}</Box>
    </>
  );
};

export default Layout;

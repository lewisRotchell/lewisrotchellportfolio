import React from "react";
import { useMediaQuery } from "@chakra-ui/react";
import { MobileNav } from "./MobileNav";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const [isLargerThan768] = useMediaQuery("(min-width: 48em)");
  if (isLargerThan768) {
    return <p>hello</p>;
  } else {
    return <MobileNav />;
  }
};

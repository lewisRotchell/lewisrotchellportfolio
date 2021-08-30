import { Flex, Stack, Link as UiLink } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface LargeNavProps {}

const LargeNav: React.FC<LargeNavProps> = ({}) => {
  return (
    <header>
      <nav>
        <Flex py="40px" justify={"center"}>
          <Stack
            fontSize={"lg"}
            fontWeight={"medium"}
            spacing="120px"
            direction={"row"}
          >
            <Link href="/">
              <UiLink>Home</UiLink>
            </Link>
            <Link href="/about">
              <UiLink>About</UiLink>
            </Link>
            <Link href="/projects">
              <UiLink>Projects</UiLink>
            </Link>
            <Link href="/contact">
              <UiLink>Contact</UiLink>
            </Link>
          </Stack>
        </Flex>
      </nav>
    </header>
  );
};

export default LargeNav;

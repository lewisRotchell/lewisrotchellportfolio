import React, { useRef } from "react";
import { Box, useMediaQuery } from "@chakra-ui/react";
import { Flex, Stack, Link as UiLink } from "@chakra-ui/react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const [isLargerThan768] = useMediaQuery("(min-width: 48em)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <header>
      <Flex
        as="nav"
        pt={{ base: "20px", md: "40px" }}
        pb={"10px"}
        justify={{ base: "flex-end", md: "center" }}
      >
        <Stack
          fontSize={"lg"}
          fontWeight={"medium"}
          spacing="140px"
          direction={"row"}
          display={{ base: "none", md: "flex" }}
        >
          <UiLink as={Link} href="/">
            Home
          </UiLink>
          <UiLink as={Link} href="/about">
            About
          </UiLink>
          <UiLink as={Link} href="/projects">
            Projects
          </UiLink>
          <UiLink as={Link} href="/contact">
            Contact
          </UiLink>
        </Stack>
        <Button
          aria-label="Open Menu"
          display={{ md: "none" }}
          mr={2}
          ref={btnRef}
          onClick={onOpen}
          variant="ghost"
        >
          <HamburgerIcon w={6} h={6} />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton aria-label="Close Menu" />

            <DrawerBody>
              <Stack
                mt={"80px"}
                spacing={"60px"}
                alignItems="center"
                justify="center"
                fontSize={"lg"}
              >
                <UiLink as={Link} href="/">
                  <a onClick={onClose}>Home</a>
                </UiLink>
                <UiLink as={Link} href="/about">
                  <a onClick={onClose}>About</a>
                </UiLink>
                <UiLink as={Link} href="/projects">
                  <a onClick={onClose}>Projects</a>
                </UiLink>
                <UiLink as={Link} href="/contact">
                  <a onClick={onClose}>Contact</a>
                </UiLink>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </header>
  );
};

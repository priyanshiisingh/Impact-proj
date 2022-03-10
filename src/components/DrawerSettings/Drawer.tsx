import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { useRef, useState } from "react";
import "./drawer.css";

import Menu from "../Drawer-Menu/Menu";

function DrawerComp() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  //   const btnRef = React.useRef(0);
  //onClick={onOpen}

  return (
    <>
      <Button onClick={onOpen} variant="unstyled" className="hbtn">
        <HamburgerIcon w={10} h={10} />
      </Button>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerContent>
          <DrawerCloseButton className="cbtn" variant="unstyled" size="lg" />

          <DrawerBody>
            <Menu />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerComp;

//ref={btnRef}
//finalFocusRef={btnRef}

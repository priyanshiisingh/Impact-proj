import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Stack,
  ModalCloseButton,
  Button,
  IconButton,
  createIcon,
  useDisclosure,
} from "@chakra-ui/react";
import Icon from "./Icons/playIcon";
import { CloseButton } from "@chakra-ui/react";
import { AspectRatio } from "@chakra-ui/react";
import React, { useState } from "react";

function Modalex() {
  const OverlayBg = () => <ModalOverlay bg="blackAlpha.900" />;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayBg />);
  return (
    <>
      <Button
        // variant={"solid"}
        // colorScheme={"white"}
        width={"80px"}
        height={"80px"}
        position={"absolute"}
        left={"50%"}
        top={"50%"}
        transform={"translateX(-50%) translateY(-50%)"}
        borderRadius={"100%"}
        onClick={() => {
          setOverlay(<OverlayBg />);
          onOpen();
        }}
        border={"none"}>
        <Icon icon="play3" size={"17px"} color="black" />
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} motionPreset="slideInBottom">
        {overlay}
        <ModalContent background="transparent">
          <Stack justify={"center"} align={"center"}>
            <AspectRatio
              minW={{
                base: "400px",
                sm: "500px",
                md: "700px",
                lg: "850px",
                xl: "962px",
              }}
              ratio={2}>
              <iframe
                src="https://www.youtube.com/embed/KI2lsdXJQ40"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </AspectRatio>
          </Stack>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Modalex;

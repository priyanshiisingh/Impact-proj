import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Link,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
} from "@chakra-ui/react";
import "./videosec.css";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

import Modalex from "./Modal";

export default function VideoSec() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Container maxW={"100%"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        justify={"center"}
        direction={{ base: "column-reverse", lg: "row" }}>
        <Box
          position={"relative"}
          height={"100%"}
          p={{ lg: "30px" }}
          width={{ md: "75%", lg: "50%" }}
          // ml={{ lg: "50px" }}
        >
          <Link
            textDecoration="none"
            _hover={{ textDecoration: "none" }}
            href="https://www.youtube.com/embed/KI2lsdXJQ40">
            <Stack background={"black"}>
              <Image
                opacity={"0.5"}
                alt={"Hero Image"}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={"100%"}
                src={"https://untree.co/demos/impact/images/hero-min.jpg"}
              />
            </Stack>
          </Link>
          <Modalex />
        </Box>
        <Stack
          mr={{ lg: "50px" }}
          maxW={{ lg: "fit-content" }}
          flex={1}
          height={{ lg: "500px" }}
          align={{ lg: "center" }}
          justify={{ md: "flex-start", lg: "start" }}
          spacing={{ base: 5, md: 10 }}>
          <Stack
            align="start"
            justify={"center"}
            minH={{ lg: "100%" }}
            maxW={{ lg: "75%" }}>
            <Heading className="heading4">Get Started with Impact</Heading>
            <Text mb={"20px"}>
              Labore id odit sit optio, voluptas sequi nobis aliquid dignissimos
              iure recusandae
            </Text>
            <Text>
              <List>
                <ListItem>
                  <ListIcon as={CheckIcon} color="#f85a40" mr="20px" />
                  Lorem ipsum dolor sit amet
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="#f85a40" mr="20px" />
                  Consectetur adipiscing elit
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="#f85a40" mr="20px" />
                  Integer molestie lorem at massa
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="#f85a40" mr="20px" />
                  Facilisis in pretium nisl aliquet
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckIcon} color="#f85a40" mr="20px" />
                  Facilisis in pretium nisl aliquet
                </ListItem>
              </List>
            </Text>
            <Button
              rounded={"4px"}
              px={"30px"}
              py={"25px"}
              colorScheme={"teal"}
              fontWeight={"400"}
              font-family={"Open Sans"}
              bg={"#f85a40"}
              _hover={{ bg: "#f85a40" }}
              mb={"150px"}
              maxW={"fit-content"}>
              Learn More
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}

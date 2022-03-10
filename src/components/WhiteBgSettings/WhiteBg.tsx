import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  Button,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import "./whitebg.css";
import WhiteBgFeature from "./WhiteBgFeature";

export default function WhiteBg() {
  return (
    <Container
      maxW={"100%"}
      pt={"120px"}
      px={{ base: "30px", md: "120px", lg: "80px", xl: "150px" }}
      pb="50px">
      <Stack align={"center"} justify={"center"}>
        <SimpleGrid columns={{ base: 1, lg: 2 }}>
          <Stack width={{ lg: "70%" }} justify="center">
            <Heading className="heading3">
              Why Growing Your Business is Important
            </Heading>
            <Text fontSize={"sm"}>
              Labore id odit sit optio, voluptas sequi nobis aliquid dignissimos
              iure recusandae vitae nam facere hic quis voluptate cum quae.
              Deserunt, harum, incidunt ex nesciunt est temporibus ipsum, vel
              rem eveniet facere et velit sunt aspernatur eaque quis, dolorem
              magnam quisquam? Facere?
            </Text>
            <Button
              rounded={"4px"}
              px={"30px"}
              py={"25px"}
              colorScheme={"teal"}
              fontWeight={"400"}
              bg={"#f85a40"}
              _hover={{ bg: "#f85a40" }}
              mb={"150px"}
              maxW={"fit-content"}>
              Learn More
            </Button>
          </Stack>
          <Stack justify="center">
            <Image
              alt={"feature image"}
              src={"https://untree.co/demos/impact/images/illustration-1.jpg"}
              width={"100%"}
            />
          </Stack>
        </SimpleGrid>
        <WhiteBgFeature />
      </Stack>
    </Container>
  );
}

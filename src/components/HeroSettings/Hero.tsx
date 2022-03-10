import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Image,
  Button,
  Icon,
  IconProps,
} from "@chakra-ui/react";
import "./hero.css";
import HeroFeature from "../Feature/HeroFeature";

export default function Hero() {
  return (
    <Container maxW={"100%"} bg={"#008374"} pt={"15rem"}>
      <Stack textAlign={"center"} align={"center"}>
        <Heading
          className="heading1"
          fontSize={{ base: "3xl", md: "4xl", lg: "40px" }}
          color={"white"}
          maxW={{ lg: "500px", xl: "600px" }}>
          Let's growth your business with us
        </Heading>
        <Text maxW={"525px"} className="master">
          Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti
          iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam
          minima quo, consequuntur
        </Text>
        <Stack spacing={6} direction={"column"} pb={"100px"}>
          <Button
            rounded={"4px"}
            px={"30px"}
            py={"25px"}
            colorScheme={"teal"}
            fontWeight={"500"}
            bg={"#f85a40"}
            _hover={{
              bg: "transparent",
              border: "2px solid white",
            }}
            mt={"35px"}
            mb={"150px"}
            maxW={"fit-content"}>
            Get In Touch
          </Button>
        </Stack>
        <HeroFeature />
      </Stack>
      <Image
        src="https://untree.co/demos/impact/images/persons-group-1.png"
        alt="image1"
        className="person1"
      />
      <Image
        src="https://untree.co/demos/impact/images/persons-group-2.png"
        alt="image2"
        className="person2"
      />
    </Container>
  );
}

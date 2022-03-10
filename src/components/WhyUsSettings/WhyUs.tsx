import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import "./whyus.css";

interface FeatureProps {
  text: string;
  icon: any;
  content: string;
}

const Feature = ({ text, icon, content }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Stack className="whyusimage">
        <Image
          src={icon}
          alt="image"
          maxW={{ base: "50px", lg: "50px", xl: "50px" }}
        />
      </Stack>
      <Stack className="whyusContent">
        <Text className="sub2">{text}</Text>
        <Text maxW={{ xl: "430px" }}>{content}</Text>
      </Stack>
    </Stack>
  );
};

export default function WhyUsFeature() {
  return (
    <Container
      maxW={"100%"}
      pt={"120px"}
      px={{ base: "30px", md: "120px", lg: "80px", xl: "130px" }}
      pb="50px"
      background={"#fafafa"}>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ lg: "5" }}>
        <Stack spacing={2}>
          <Heading className="heading2">Why you should choose us</Heading>
          <Stack spacing={8}>
            <Feature
              icon={
                "https://untree.co/demos/impact/images/svg/24-hours-support.svg"
              }
              text={"Professional"}
              content={
                "Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur."
              }
            />
            <Feature
              icon={"https://untree.co/demos/impact/images/svg/good-review.svg"}
              text={"Good Review"}
              content={
                "Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur."
              }
            />
          </Stack>
        </Stack>
        <Flex width={{ lg: "120%", xl: "100%" }} mt={{ base: "50px", lg: "0" }}>
          <Image
            alt={"feature image"}
            src={"https://untree.co/demos/impact/images/about-us-min.png"}
            width={"100%"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}

import { ReactElement } from "react";
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Image,
} from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";
// import "./heroFeature.css";

interface FeatureProps {
  title: string;
  text: string;
  icon: any;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack direction="row" mt={"70px"}>
      <Stack className="whitebfimage">
        <Image
          src={icon}
          alt={"image"}
          maxW={{ base: "50px", lg: "50px", xl: "50px" }}
        />
      </Stack>
      <Stack align="flex-start" className="whitebfContent">
        <Text className="sub3" color={"black"}>
          {title}
        </Text>
        <Text>{text}</Text>
      </Stack>
    </Stack>
  );
};

export default function WhiteBgFeature() {
  return (
    <Box width={{ lg: "100%" }}>
      <SimpleGrid columns={{ base: 1, md: 1, lg: 3 }}>
        <Feature
          icon={
            "https://untree.co/demos/impact/images/svg/24-hours-support.svg"
          }
          title={"Professional"}
          text={
            "Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur."
          }
        />
        <Feature
          icon={"https://untree.co/demos/impact/images/svg/good-review.svg"}
          title={"Good Reviews"}
          text={
            "Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur."
          }
        />
        <Feature
          icon={"https://untree.co/demos/impact/images/svg/quotation.svg"}
          title={"24-7 Support"}
          text={
            "Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam minima quo, consequuntur."
          }
        />
      </SimpleGrid>
    </Box>
  );
}

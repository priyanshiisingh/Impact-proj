import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Stack,
  Divider,
  Button,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import "./posts.css";

export const Posts = () => {
  const cards = [
    {
      imageSrc: "https://untree.co/demos/impact/images/post_2.jpg",
      postDate: "May 27, 2021",
      likes: "12 comments",
      heading: "Important of getting a notifications",
      content:
        "Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur",
    },
    {
      imageSrc: "https://untree.co/demos/impact/images/post_3.jpg",
      postDate: "May 27, 2021",
      likes: "12 comments",
      heading: "Important of getting a notifications",
      content:
        "Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur",
    },
    {
      imageSrc: "https://untree.co/demos/impact/images/post_4.jpg",
      postDate: "May 27, 2021",
      likes: "12 comments",
      heading: "Important of getting a notifications",
      content:
        "Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur",
    },
  ];
  return (
    <Stack
      direction={{ base: "column", md: "row", xl: "row" }}
      justify={{ lg: "space-evenly" }}
      align={"center"}
      p={{ base: "35px", lg: "100px" }}>
      {cards.map((card, index) => (
        <Wrap width={{ lg: "28.5%" }}>
          <WrapItem>
            <Box mb={{ base: "60px", lg: "0" }}>
              <Box borderRadius="lg" overflow="hidden" width="100%">
                <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                  <Image src={card.imageSrc} alt="some text" width="100%" />
                </Link>
              </Box>

              <HStack
                marginTop="2"
                display="flex"
                alignItems="center"
                color={"grey"}>
                <Text>{card.postDate}</Text>
                <Text>•</Text>
                <Text>{card.likes}</Text>
              </HStack>

              <Heading fontSize="lg" marginTop="2" className="heading7">
                <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                  {card.heading}
                </Link>
              </Heading>
              <Text as="p" fontSize="md" marginTop="2">
                {card.content}
              </Text>
              <Stack mt="15px">
                <Link
                  className="link"
                  color="#f85a40"
                  _hover={{ textDecoration: "none" }}>
                  Read More <ChevronRightIcon />
                </Link>
              </Stack>
            </Box>
          </WrapItem>
        </Wrap>
      ))}
    </Stack>
  );
};

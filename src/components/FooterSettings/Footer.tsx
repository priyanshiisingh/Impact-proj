import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaPinterest,
  FaPinterestP,
  FaDribbble,
} from "react-icons/fa";

import { LinkS, LinkheadS, Span, LHeader } from "./footerStyles";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={"#f85a40"}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        opacity: "0.2",
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box bg={"black"} color={"white"}>
      <Box
        bg={"black"}
        color={"white"}
        pt={"60px"}
        pl={{ base: "10px", md: "30px", lg: "50px", xl: "135px" }}
        pr={{ base: "10px", md: "30px", xl: "0" }}>
        <Container as={Stack} maxW={"100%"}>
          <SimpleGrid
            templateColumns={{
              md: "1fr ",
              lg: "2fr 1fr 1fr 2fr",
              xl: "2fr 1fr 1fr 2fr",
            }}>
            <Stack
              spacing={6}
              pr={{ lg: "160px", xl: "80px" }}
              width={{
                base: "300px",
                xs: "200px",
                md: "610px",
                lg: "430px",
              }}>
              <Box>
                <LHeader>
                  <Text fontWeight={"700"} fontSize={"16px"}>
                    About Impact
                    <Span>.</Span>
                  </Text>
                </LHeader>
              </Box>
              <Text fontSize={"sm"} color={"rgba(255, 255, 255, 0.5)"}>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </Text>
              <Stack direction={"row"}>
                <SocialButton label={"Instagram"} href={"#"}>
                  <FaInstagram />
                </SocialButton>
                <SocialButton label={"Twitter"} href={"#"}>
                  <FaTwitter />
                </SocialButton>
                <SocialButton label={"Facebook"} href={"#"}>
                  <FaFacebookF />
                </SocialButton>
                <SocialButton label={"LinkdIn"} href={"#"}>
                  <FaLinkedin />
                </SocialButton>
                <SocialButton label={"Pintrest"} href={"#"}>
                  <FaPinterest />
                </SocialButton>
                <SocialButton label={"Dribbble"} href={"#"}>
                  <FaDribbble />
                </SocialButton>
              </Stack>
            </Stack>
            <Stack align={"flex-start"}>
              <Stack mt={{ base: "40px", xl: "0" }}>
                <LHeader>
                  <ListHeader>Links</ListHeader>
                </LHeader>
              </Stack>

              <Link href={"#"} _hover={{ textDecoration: "none" }}>
                <LinkS>About us</LinkS>
              </Link>
              <Link href={"#"} _hover={{ textDecoration: "none" }}>
                <LinkS>Services</LinkS>
              </Link>
              <Link href={"#"} _hover={{ textDecoration: "none" }}>
                <LinkS>News</LinkS>
              </Link>
              <Link href={"#"} _hover={{ textDecoration: "none" }}>
                <LinkS>Careers</LinkS>
              </Link>
              <Link href={"#"} _hover={{ textDecoration: "none" }}>
                <LinkS>Contact</LinkS>
              </Link>
            </Stack>
            <Stack align={"flex-start"}>
              <Stack mt={{ base: "30px", xl: "0" }}>
                <LHeader>
                  <ListHeader>Company</ListHeader>
                </LHeader>
              </Stack>
              <Link href={"#"} _hover={{ textDecoration: "none" }}>
                <LinkS>About us</LinkS>
              </Link>
              <Link href={"#"} _hover={{ textDecoration: "none" }}>
                <LinkS>Service</LinkS>
              </Link>
              <Link href={"#"} _hover={{ textDecoration: "none" }}>
                <LinkS>News</LinkS>
              </Link>
              <Link href={"#"} _hover={{ textDecoration: "none" }}>
                <LinkS>Career</LinkS>
              </Link>
              <Link href={"#"} _hover={{ textDecoration: "none" }}>
                <LinkS>Contact</LinkS>
              </Link>
            </Stack>
            <Stack align={"flex-start"}>
              <Stack mt={{ base: "30px", xl: "0" }}>
                <LHeader>
                  <ListHeader>Contact</ListHeader>
                </LHeader>
              </Stack>
              <Text>
                <LinkS>43 Raymouth Rd. Baltemoer, London 3910</LinkS>
              </Text>
              <Link href={"#"} _hover={{ textDecoration: "none" }}>
                <LinkS>+1(123)-456-789</LinkS>
              </Link>
              <Link href={"#"} _hover={{ textDecoration: "none" }}>
                <LinkS>+1(123)-456-789</LinkS>
              </Link>
              <Link href={"#"} _hover={{ textDecoration: "none" }}>
                <LinkS>info@mydomain.com</LinkS>
              </Link>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
      <Stack mt={"70px"} pb={"85px"} px={{ base: "30px", lg: "0", xl: "0" }}>
        <Text textAlign={"center"}>
          <LinkS>
            Copyright ©2022. All Rights Reserved. — Designed with love by
          </LinkS>
          Untree.co • License
        </Text>
      </Stack>
    </Box>
  );
}

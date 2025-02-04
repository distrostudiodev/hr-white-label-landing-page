import BButton from "@/components/ui-custom/BButton";
import CContainer from "@/components/ui-custom/CContainer";
import Heading1 from "@/components/ui-custom/Heading1";
import LangSwitcher from "@/components/ui-custom/LangSwitcher";
import { ColorModeButton } from "@/components/ui/color-mode";
import contents from "@/constant/contents";
import { ASSETS_PATH, SVGS_PATH } from "@/constant/path";
import { responsiveSpacing2, responsiveSpacing3 } from "@/constant/sizes";
import { useLang } from "@/hooks/useLang";
import { HStack, Icon, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import Container from "../../components/ui-custom/Container";

const Footer = () => {
  const { lang } = useLang();

  return (
    <CContainer>
      <Container mb={responsiveSpacing2}>
        <CContainer
          bg={"p.500"}
          color={"light"}
          py={16}
          position={"relative"}
          overflow={"clip"}
          borderRadius={20}
        >
          <Container position={"relative"}>
            <HStack wrap={"wrap"} gap={responsiveSpacing3}>
              <CContainer flex={"1 1 400px"} gap={5}>
                <Text fontSize={"2rem"} fontWeight={"semibold"}>
                  {contents.footer.cta.title[lang]}
                </Text>

                <Text>{contents.footer.cta.desc[lang]}</Text>

                <BButton
                  w={"fit"}
                  variant={"plain"}
                  color={"light"}
                  px={0}
                  fontSize={"1rem !important"}
                  textDecor={"underline"}
                >
                  {contents.footer.cta.buttonLabel[lang]}
                  <Icon fontSize={"lg"}>
                    <ArrowUpRight />
                  </Icon>
                </BButton>
              </CContainer>

              <CContainer flex={"1 1 150px"} mt={"auto"} position={"relative"}>
                <Image
                  src={`${SVGS_PATH}/ubur_light.svg`}
                  opacity={0.2}
                  position={"absolute"}
                  bottom={-16}
                  right={-16}
                  w={"100%"}
                />
              </CContainer>
            </HStack>
          </Container>
        </CContainer>
      </Container>

      {/* Footer content */}

      <CContainer bg={"dark"} color={"light"}>
        <CContainer position={"relative"} overflow={"clip"}>
          <CContainer py={20}>
            <Container>
              <HStack justify={"space-between"} wrap={"wrap"} align={"start"}>
                <HStack gap={4}>
                  <Image
                    alt="Logo Exium"
                    src={`${ASSETS_PATH}/svgs/logo_light.svg`}
                    w={"40px"}
                  />
                  <HStack gap={0}>
                    <Heading1 fontWeight={"bold"}>Exium</Heading1>
                    <Text fontSize={"2rem"}>™</Text>
                  </HStack>
                </HStack>

                <CContainer minW={"200px"} w={"fit"} align={"start"} gap={2}>
                  <Text fontSize={"1rem"} color={"var(--divider-text)"}>
                    {contents.sosmeds.label[lang]}
                  </Text>

                  {contents.sosmeds.list.map((nav, i) => (
                    <Link key={i} to={nav.disabled ? "" : nav.link}>
                      <Text
                        fontSize={"1.25rem"}
                        w={"fit"}
                        opacity={nav.disabled ? 0.4 : 0.8}
                        transition={"200ms"}
                        _hover={{ color: nav.disabled ? "" : "p.500" }}
                        cursor={nav.disabled ? "disabled" : "pointer"}
                      >
                        {nav.name}
                      </Text>
                    </Link>
                  ))}
                </CContainer>
              </HStack>
            </Container>
          </CContainer>

          <CContainer>
            <Container
              borderTop={"2px solid"}
              borderBottom={"2px solid"}
              borderColor={"var(--divider3)"}
              py={20}
            >
              <SimpleGrid columns={[1, null, 3]} gap={responsiveSpacing3}>
                <CContainer gap={2}>
                  <Text fontSize={"1.25rem"}>{contents.contact.email}</Text>
                  <Text fontSize={"1.25rem"}>{contents.contact.phone}</Text>
                </CContainer>

                <CContainer justify={"center"}>
                  <Text fontSize={"1.25rem"} opacity={0.4}>
                    {contents.contact.address}
                  </Text>
                </CContainer>

                <CContainer align={["start", null, "end"]} justify={"center"}>
                  <Link
                    to={
                      "https://www.google.com/maps/place/Semarang,+Semarang+City,+Central+Java/@-7.0247298,110.4170652,12z/data=!3m1!4b1!4m6!3m5!1s0x2e708b4d3f0d024d:0x1e0432b9da5cb9f2!8m2!3d-6.9818006!4d110.4120729!16zL20vMDQ5Nm1o?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
                    }
                    target="_blank"
                  >
                    <HStack>
                      <Text
                        fontSize={"1.25rem"}
                        textDecor={"underline !important"}
                      >
                        {contents.footer.viewMapsLabel[lang]}
                      </Text>
                      <Icon fontSize={"lg"}>
                        <ArrowUpRight />
                      </Icon>
                    </HStack>
                  </Link>
                </CContainer>
              </SimpleGrid>
            </Container>
          </CContainer>

          <CContainer py={8}>
            <Container>
              <SimpleGrid columns={[1, null, 2]} gap={responsiveSpacing3}>
                <Text fontSize={"1rem"} opacity={0.4} my={"auto"}>
                  Copyright {new Date().getFullYear()} © Exium. All right
                  reserved.
                </Text>

                <HStack gap={8} justify={["start", null, "end"]}>
                  {/* <Text fontSize={"1rem"} opacity={0.4}>
                  Privacy Policy
                </Text>

                <Text fontSize={"1rem"} opacity={0.4}>
                  Term and Conditions
                </Text> */}

                  <HStack>
                    <ColorModeButton
                      color={"white"}
                      borderRadius={"full"}
                      className={"btn"}
                      size={"lg"}
                    />

                    <LangSwitcher
                      color={"white"}
                      borderRadius={"full"}
                      size={"lg"}
                      fontSize={"1rem !important"}
                    />
                  </HStack>
                </HStack>
              </SimpleGrid>
            </Container>
          </CContainer>
        </CContainer>
      </CContainer>
    </CContainer>
  );
};

export default Footer;

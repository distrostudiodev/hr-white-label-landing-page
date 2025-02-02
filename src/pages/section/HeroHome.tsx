import BButton from "@/components/ui-custom/BButton";
import CContainer from "@/components/ui-custom/CContainer";
import Heading1 from "@/components/ui-custom/Heading1";
import Heading5 from "@/components/ui-custom/Heading5";
import Logo from "@/components/widget/Logo";
import { BRAND_NAME } from "@/constant/brands";
import contents from "@/constant/contents";
import { PRIMARY_COLOR_PALETTE } from "@/constant/paletteConfig";
import { IMAGES_PATH } from "@/constant/path";
import { responsiveSpacing2 } from "@/constant/sizes";
import useIsSmScreenWidth from "@/hooks/useIsSmScreenWidth";
import { useLang } from "@/hooks/useLang";
import { HStack, Icon, Image, Stack } from "@chakra-ui/react";
import Container from "./Container";
import useScreen from "@/hooks/useScreen";
import { IconArrowUpRight } from "@tabler/icons-react";

const Hero = () => {
  const { lang } = useLang();
  const content = contents.home.hero;
  const iss = useIsSmScreenWidth();
  const { sw } = useScreen();

  return (
    <CContainer
      h={["", null, null, "calc(100vh - 56px)"]}
      maxH={["", null, null, "720px"]}
    >
      <Container
        flex={1}
        px={0}
        position={"relative"}
        overflow={"clip"}
        mt={"-56px"}
        // bg={"bg.subtle"}
        borderBottomLeftRadius={sw > 1280 ? "100px" : ""}
        borderBottomRightRadius={sw > 1280 ? "200px" : ""}
      >
        <Stack h={"full"} flexDir={["column", null, "row"]}>
          <CContainer w={"full"} zIndex={2} pt={"56px"}>
            <CContainer
              w={["100%", null, "60%"]}
              justify={"center"}
              px={responsiveSpacing2}
              py={28}
              my={"auto"}
              align={"start"}
            >
              <HStack mb={4} gap={4}>
                <Logo h={"16px"} />
                <Heading5 fontWeight={"semibold"}>
                  HRMS by {BRAND_NAME}
                </Heading5>
              </HStack>
              <Heading1 fontWeight={"bold"} mb={4}>
                {content.title[lang]}
              </Heading1>
              <Heading5 fontWeight={"medium"} mb={8}>
                {content.subTitle[lang]}
              </Heading5>

              <BButton
                px={"40px"}
                colorPalette={PRIMARY_COLOR_PALETTE}
                size={"2xl"}
                fontSize={"xl !important"}
              >
                {content.cta[lang]}
                <Icon>
                  <IconArrowUpRight />
                </Icon>
              </BButton>
            </CContainer>
          </CContainer>

          <Image
            alt="HRMS by Exium"
            src={
              iss
                ? `${IMAGES_PATH}/hero.jpg`
                : `${IMAGES_PATH}/hero_lg_screen.webp`
            }
            h={"full"}
            position={["", null, "absolute"]}
            right={0}
            objectFit={"cover"}
            objectPosition="right"
            borderTopLeftRadius={["100px", null, 0]}
            zIndex={1}
          />
        </Stack>
      </Container>
    </CContainer>
  );
};

export default Hero;

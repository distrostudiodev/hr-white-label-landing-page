import CContainer from "@/components/ui-custom/CContainer";
import Container from "@/components/ui-custom/Container";
import Heading1 from "@/components/ui-custom/Heading1";
import Heading5 from "@/components/ui-custom/Heading5";
import CtaButton from "@/components/widget/CtaButton";
import Logo from "@/components/widget/Logo";
import { BRAND_NAME } from "@/constant/brands";
import contents from "@/constant/contents";
import { IMAGES_PATH } from "@/constant/path";
import { useLang } from "@/hooks/useLang";
import { HStack, Icon, Image, Text } from "@chakra-ui/react";
import { IconCheck } from "@tabler/icons-react";

const Hero = () => {
  const { lang } = useLang();
  const content = contents.home.hero;

  return (
    <CContainer
    // h={["", null, null, "calc(100vh - 56px)"]}
    // maxH={["", null, null, "720px"]}
    >
      <Container>
        <HStack wrap={"wrap"} py={20}>
          <CContainer flex={"1 1 500px"}>
            <HStack mb={4} gap={4}>
              <Logo h={"16px"} />
              <Heading5 fontWeight={"semibold"}>HRMS by {BRAND_NAME}</Heading5>
            </HStack>

            <Heading1 fontWeight={"bold"} mb={8}>
              {content.title[lang]}
            </Heading1>
          </CContainer>

          <CContainer flex={"1 1 350px"}>
            <CContainer mb={8} gap={2}>
              {content.sellingPoints.list.map((item, i) => {
                return (
                  <HStack key={i}>
                    <Icon color={"green.500"}>
                      <IconCheck />
                    </Icon>
                    <Text>{item[lang]}</Text>
                  </HStack>
                );
              })}
            </CContainer>

            <CtaButton size={"xl"} fontSize={"1.15rem !important"} />
          </CContainer>
        </HStack>

        <Image
          alt="HRMS by Exium"
          h={"100%"}
          flex={1}
          src={`${IMAGES_PATH}/hero.jpg`}
          borderRadius={20}
        />
      </Container>
    </CContainer>

    //  <Container
    //     flex={1}
    //     px={0}
    //     position={"relative"}
    //     overflow={"clip"}
    //     mt={"-56px"}
    //     // bg={"bg.subtle"}
    //     borderBottomLeftRadius={sw > 1280 ? "100px" : ""}
    //     borderBottomRightRadius={sw > 1280 ? "200px" : ""}
    //   >
    //     <Stack h={"full"} flexDir={["column", null, "row"]}>
    //       <CContainer w={"full"} zIndex={2} pt={"56px"}>
    //         <CContainer
    //           w={["100%", null, "60%"]}
    //           justify={"center"}
    //           px={responsiveSpacing2}
    //           py={28}
    //           my={"auto"}
    //           align={"start"}
    //         >
    //           <HStack mb={4} gap={4}>
    //             <Logo h={"16px"} />
    //             <Heading5 fontWeight={"semibold"}>
    //               HRMS by {BRAND_NAME}
    //             </Heading5>
    //           </HStack>
    //           <Heading1 fontWeight={"bold"} mb={8}>
    //             {content.title[lang]}
    //           </Heading1>
    //           {/* <Heading5 fontWeight={"medium"} mb={8}>
    //             {content.subTitle[lang]}
    //           </Heading5> */}

    //           <CtaButton size={"2xl"} fontSize={"xl !important"} />
    //         </CContainer>
    //       </CContainer>

    //       <Image
    //         alt="HRMS by Exium"
    //         src={
    //           iss
    //             ? `${IMAGES_PATH}/hero.jpg`
    //             : `${IMAGES_PATH}/hero_lg_screen.webp`
    //         }
    //         h={"full"}
    //         position={["", null, "absolute"]}
    //         right={0}
    //         objectFit={"cover"}
    //         objectPosition="right"
    //         borderTopLeftRadius={["100px", null, 0]}
    //         zIndex={1}
    //       />
    //     </Stack>
    //   </Container>
  );
};

export default Hero;

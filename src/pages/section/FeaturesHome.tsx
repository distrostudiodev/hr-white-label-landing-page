import CContainer from "@/components/ui-custom/CContainer";
import Heading3 from "@/components/ui-custom/Heading3";
import contents from "@/constant/contents";
import useIsSmScreenWidth from "@/hooks/useIsSmScreenWidth";
import { useLang } from "@/hooks/useLang";
import { HStack, Icon, Image, Text } from "@chakra-ui/react";
import Container from "./Container";
import { useState } from "react";
import BButton from "@/components/ui-custom/BButton";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion";
import CtaButton from "@/components/widget/CtaButton";

const FeaturesHome = () => {
  const { lang } = useLang();
  const content = contents.home.features;

  // States, Refs
  const [activeIndex, setActiveIndex] = useState(0);
  const activeitem = content.list[activeIndex];

  // Utils
  const iss = useIsSmScreenWidth();

  return (
    <CContainer pb={20}>
      <Container maxW={"1080px"}>
        <Heading3 fontWeight={"bold"} textAlign={"center"} mb={2}>
          {content.title[lang]}
        </Heading3>
        <Text textAlign={"center"} mb={5} color={"fg.muted"}>
          {content.subTitle[lang]}
        </Text>

        {!iss && (
          <HStack borderRadius={8} align={"stretch"} gap={4}>
            <CContainer w={"40%"} gap={2} p={4} justify={"center"}>
              {content.list.map((item, i) => {
                const active = activeIndex === i;

                return (
                  <BButton
                    key={i}
                    unclicky
                    justifyContent={"start"}
                    variant={active ? "outline" : "ghost"}
                    colorPalette={active ? "p" : ""}
                    onClick={() => {
                      setActiveIndex(i);
                    }}
                    size={"xl"}
                    fontSize={"md !important"}
                  >
                    <Icon>
                      <item.icon />
                    </Icon>
                    {item.label[lang]}
                  </BButton>
                );
              })}
            </CContainer>

            <CContainer w={"60%"} bg={"bg.subtle"} borderRadius={8} p={4}>
              <Image src={activeitem.img} borderRadius={6} mb={6} />

              <Text>{activeitem.description[lang]}</Text>
            </CContainer>
          </HStack>
        )}

        {iss && (
          <CContainer>
            <AccordionRoot collapsible defaultValue={["b"]}>
              {content.list.map((item, i) => (
                <AccordionItem key={i} value={item.label[lang]}>
                  <AccordionItemTrigger>
                    <Icon>
                      <item.icon size={"16px"} />
                    </Icon>
                    {item.label[lang]}
                  </AccordionItemTrigger>
                  <AccordionItemContent>
                    <Image src={item.img} borderRadius={6} mb={4} />
                    <CContainer px={2}>
                      <Text>{item.description[lang]}</Text>
                    </CContainer>
                  </AccordionItemContent>
                </AccordionItem>
              ))}
            </AccordionRoot>
          </CContainer>
        )}

        <CtaButton w={"fit"} mx={"auto"} mt={12} />
      </Container>
    </CContainer>
  );
};

export default FeaturesHome;

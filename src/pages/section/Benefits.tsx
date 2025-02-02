import CContainer from "@/components/ui-custom/CContainer";
import Container from "@/components/ui-custom/Container";
import Heading3 from "@/components/ui-custom/Heading3";
import CtaButton from "@/components/widget/CtaButton";
import contents from "@/constant/contents";
import { useLang } from "@/hooks/useLang";
import { Center, Circle, Image, SimpleGrid, Text } from "@chakra-ui/react";

const Clients = () => {
  const { lang } = useLang();
  const content = contents.home.clients;

  return (
    <CContainer>
      <Text fontSize={"md"} textAlign={"center"} mb={12}>
        {content.intro[lang]}
      </Text>

      <SimpleGrid columns={[2, null, 4]} gap={4}>
        {content.list.map((item, i) => {
          return (
            <Center key={i}>
              <Image alt={item.name} src={item.img} />
            </Center>
          );
        })}
      </SimpleGrid>
    </CContainer>
  );
};
const Benefits = () => {
  const { lang } = useLang();
  const content = contents.home.benefits;

  return (
    <CContainer bg={"bg.subtle"} py={20}>
      <Container>
        <Heading3 fontWeight={"bold"} textAlign={"center"} mb={12}>
          {content.title[lang]}
        </Heading3>

        <SimpleGrid columns={[2, null, 4]} gap={4} mb={12}>
          {content.list.map((item, i) => {
            return (
              <CContainer key={i} p={4} borderRadius={8} gap={2} bg={"body"}>
                <Circle bg={"p.500a"} w={"fit"} p={2} mb={2}>
                  <item.icon />
                </Circle>

                <Text fontSize={"md"} fontWeight={"bold"}>
                  {item.label[lang]}
                </Text>
                <Text>{item.description[lang]}</Text>
              </CContainer>
            );
          })}
        </SimpleGrid>

        <Clients />
      </Container>

      <CtaButton w={"fit"} mx={"auto"} mt={12} />
    </CContainer>
  );
};

export default Benefits;

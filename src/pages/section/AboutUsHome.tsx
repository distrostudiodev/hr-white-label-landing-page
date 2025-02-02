import CContainer from "@/components/ui-custom/CContainer";
import contents from "@/constant/contents";
import { useLang } from "@/hooks/useLang";
import { Text } from "@chakra-ui/react";
import Container from "./Container";

const AboutUsHome = () => {
  const { lang } = useLang();
  const content = contents.home.aboutUs;

  return (
    <CContainer py={32}>
      <Container>
        <Text
          textAlign={"center"}
          fontSize={"1.1rem"}
          maxW={"600px"}
          mx={"auto"}
          lineHeight={"tall"}
        >
          {content.intro[lang]}
        </Text>
      </Container>

      {/* <Container mb={20}>
        <Grid
          gap={responsiveSpacing3}
          templateColumns={["repeat(1, 1fr)", null, "repeat(4, 1fr)"]}
        >
          <GridItem>
            <Heading5 color={"fg.subtle"}>
              {contents.home.aboutUs.title[lang]}
            </Heading5>
          </GridItem>

          <GridItem colSpan={3}>
            <Text fontSize={"1.5rem"} mb={20}>
              {contents.home.aboutUs.intro[lang]}
            </Text>

            <SimpleGrid columns={[2, null, 4]} gap={responsiveSpacing2}>
              {contents.stats.map((stat, i) => (
                <CContainer key={i}>
                  <Text fontSize={"2rem"}>{stat.value[lang]}</Text>
                  <Text fontSize={"1rem"} color={"fg.muted"}>
                    {stat.label[lang]}
                  </Text>
                </CContainer>
              ))}
            </SimpleGrid>
          </GridItem>
        </Grid>
      </Container> */}
    </CContainer>
  );
};

export default AboutUsHome;

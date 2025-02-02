import CContainer from "@/components/ui-custom/CContainer";
import Container from "@/components/ui-custom/Container";
import Heading3 from "@/components/ui-custom/Heading3";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion";
import CtaButton from "@/components/widget/CtaButton";
import contents from "@/constant/contents";
import { useLang } from "@/hooks/useLang";
import { HStack, Text } from "@chakra-ui/react";

const Faqs = () => {
  const { lang } = useLang();

  return (
    <CContainer py={20}>
      <Container maxW={"600px"}>
        <Heading3 fontWeight={"bold"} textAlign={"center"} mb={12}>
          FAQs
        </Heading3>

        <AccordionRoot collapsible defaultValue={["b"]} size={"lg"}>
          {contents.faqs.list.map((item, i) => (
            <AccordionItem key={i} value={item.q[lang]}>
              <AccordionItemTrigger>
                <Text fontSize={"1rem"}>{item.q[lang]}</Text>
              </AccordionItemTrigger>
              <AccordionItemContent>
                <HStack wrap={"wrap"}>
                  <Text color={"fg.muted"}>{item.a[lang]}</Text>
                  {i === 0 && <CtaButton size={"xs"} />}
                </HStack>
              </AccordionItemContent>
            </AccordionItem>
          ))}
        </AccordionRoot>
      </Container>
    </CContainer>
  );
};

export default Faqs;

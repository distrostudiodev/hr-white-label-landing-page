import contents from "@/constant/contents";
import { MAIN_BUTTON_SIZE } from "@/constant/sizes";
import { useLang } from "@/hooks/useLang";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconArrowUpRight, IconBrandWhatsapp } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import BackButton from "../ui-custom/BackButton";
import BButton from "../ui-custom/BButton";
import CContainer from "../ui-custom/CContainer";
import {
  DisclosureBody,
  DisclosureContent,
  DisclosureFooter,
  DisclosureHeader,
  DisclosureRoot,
} from "../ui-custom/Disclosure";
import DisclosureHeaderContent from "../ui-custom/DisclosureHeaderContent";
import useBackOnClose from "@/hooks/useBackOnClose";
import useCta from "@/context/useCta";

const Item = ({ icon, title, description, link, username, password }: any) => {
  return (
    <CContainer>
      <Link to={link} target="_blank">
        <HStack
          align={"start"}
          border={"1px solid"}
          borderColor={"border.muted"}
          borderRadius={6}
          p={4}
          gap={4}
          role="group"
          _hover={{ bg: "bg.muted" }}
          transition={"200ms"}
        >
          <HStack>
            <Icon>{icon}</Icon>
          </HStack>

          <CContainer>
            <HStack mb={2}>
              <Text fontSize={"md"} fontWeight={"semibold"}>
                {title}
              </Text>

              <Icon ml={"auto"} color={"p.500"}>
                <IconArrowUpRight size={"20px"} />
              </Icon>
            </HStack>

            <Text mb={2}>{description}</Text>
          </CContainer>
        </HStack>
      </Link>

      <CContainer mt={2} px={4}>
        <Text>Akun {title}</Text>
        <Text color={"fg.muted"}>username : {username}</Text>
        <Text color={"fg.muted"}>password : {password}</Text>
      </CContainer>
    </CContainer>
  );
};

const CtaIndependentDisclosure = () => {
  const { lang } = useLang();
  const { ctaOpen, ctaOnOpen, ctaOnClose } = useCta();
  useBackOnClose("demo-disclosure", ctaOpen, ctaOnOpen, ctaOnClose);

  return (
    <DisclosureRoot open={ctaOpen} size={"sm"}>
      <DisclosureContent>
        <DisclosureHeader>
          <DisclosureHeaderContent title={`Demo HRMS`} />
        </DisclosureHeader>

        <DisclosureBody>
          <CContainer gap={2}>
            <Item
              icon={<contents.links.personalia.icon />}
              link={contents.links.personalia.link}
              title={contents.links.personalia.title}
              description={contents.links.personalia.description[lang]}
              username={contents.links.personalia.username}
              password={contents.links.personalia.password}
            />
            <Item
              icon={<contents.links.employee.icon />}
              link={contents.links.employee.link}
              title={contents.links.employee.title}
              description={contents.links.employee.description[lang]}
              username={contents.links.employee.username}
              password={contents.links.employee.password}
            />
          </CContainer>
        </DisclosureBody>

        <DisclosureFooter>
          <BackButton />

          <Link to={contents.contact.wa} target="_blank">
            <BButton w={"full"} size={MAIN_BUTTON_SIZE} colorPalette={"p"}>
              <Icon>
                <IconBrandWhatsapp />
              </Icon>
              Whatsapp
            </BButton>
          </Link>
        </DisclosureFooter>
      </DisclosureContent>
    </DisclosureRoot>
  );
};

export default CtaIndependentDisclosure;

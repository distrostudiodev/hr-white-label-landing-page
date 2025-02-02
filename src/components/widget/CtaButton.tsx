import contents from "@/constant/contents";
import { PRIMARY_COLOR_PALETTE } from "@/constant/paletteConfig";
import { MAIN_BUTTON_SIZE } from "@/constant/sizes";
import useBackOnClose from "@/hooks/useBackOnClose";
import { useLang } from "@/hooks/useLang";
import { HStack, Icon, Text, useDisclosure } from "@chakra-ui/react";
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
import { ButtonProps } from "../ui/button";

const Item = ({ icon, title, description, link }: any) => {
  return (
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

          <Text>{description}</Text>
        </CContainer>
      </HStack>
    </Link>
  );
};

interface Props extends ButtonProps {}
const CtaButton = ({ ...props }: Props) => {
  const { lang } = useLang();
  const { open, onOpen, onClose } = useDisclosure();
  useBackOnClose("demo-disclosure", open, onOpen, onClose);

  return (
    <>
      <BButton colorPalette={PRIMARY_COLOR_PALETTE} onClick={onOpen} {...props}>
        {contents.home.hero.cta[lang]}
        <Icon>
          <IconArrowUpRight />
        </Icon>
      </BButton>

      <DisclosureRoot open={open} size={"sm"}>
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
              />
              <Item
                icon={<contents.links.employee.icon />}
                link={contents.links.employee.link}
                title={contents.links.employee.title}
                description={contents.links.employee.description[lang]}
              />
            </CContainer>
          </DisclosureBody>

          <DisclosureFooter>
            <BackButton />
            <BButton size={MAIN_BUTTON_SIZE} colorPalette={"p"}>
              <Icon>
                <IconBrandWhatsapp />
              </Icon>
              Whatsapp Kami
            </BButton>
          </DisclosureFooter>
        </DisclosureContent>
      </DisclosureRoot>
    </>
  );
};

export default CtaButton;

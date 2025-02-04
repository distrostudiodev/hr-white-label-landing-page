import contents from "@/constant/contents";
import { PRIMARY_COLOR_PALETTE } from "@/constant/paletteConfig";
import useCta from "@/context/useCta";
import { Icon } from "@chakra-ui/react";
import { IconArrowUpRight } from "@tabler/icons-react";
import BButton from "../ui-custom/BButton";
import { ButtonProps } from "../ui/button";
import { useLang } from "@/hooks/useLang";

interface Props extends ButtonProps {}
const CtaButton = ({ ...props }: Props) => {
  const { ctaOnOpen } = useCta();
  const { lang } = useLang();

  return (
    <BButton
      colorPalette={PRIMARY_COLOR_PALETTE}
      onClick={ctaOnOpen}
      fontWeight={"semibold"}
      {...props}
    >
      {contents.home.hero.cta[lang]}
      <Icon>
        <IconArrowUpRight />
      </Icon>
    </BButton>
  );
};

export default CtaButton;

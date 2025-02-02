import contents from "@/constant/contents";
import { PRIMARY_COLOR_PALETTE } from "@/constant/paletteConfig";
import { useLang } from "@/hooks/useLang";
import { Icon } from "@chakra-ui/react";
import { IconArrowUpRight } from "@tabler/icons-react";
import BButton from "../ui-custom/BButton";
import { ButtonProps } from "../ui/button";

interface Props extends ButtonProps {}
const CtaButton = ({ ...props }: Props) => {
  const { lang } = useLang();

  return (
    <BButton colorPalette={PRIMARY_COLOR_PALETTE} {...props}>
      {contents.home.hero.cta[lang]}
      <Icon>
        <IconArrowUpRight />
      </Icon>
    </BButton>
  );
};

export default CtaButton;

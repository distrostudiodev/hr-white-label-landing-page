import { Image, ImageProps } from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";

interface Props extends ImageProps {}
const Logo = ({ ...props }: Props) => {
  const src = useColorModeValue(
    `/assets/svgs/logo_dark.svg`,
    "/assets/svgs/logo_light.svg"
  );

  return (
    <Image
      loading={"lazy"}
      src={src}
      h={"20px"}
      borderRadius={"0 !important"}
      {...props}
    />
  );
};

export default Logo;

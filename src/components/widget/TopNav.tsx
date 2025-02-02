import CtaButton from "@/components/widget/CtaButton";
import useNavs from "@/context/useNavs";
import { Box, BoxProps, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Container from "../ui-custom/Container";
import LangSwitcher from "../ui-custom/LangSwitcher";
import { ColorModeButton } from "../ui/color-mode";

type Props = {
  activeNavIndex?: number;
} & BoxProps;
const TopNav = ({ activeNavIndex, ...props }: Props) => {
  const { pathname } = useLocation();

  const [scrollYPos, setScrollYPos] = useState<number>(window.scrollY);
  const { navTrigger, setNavTrigger } = useNavs();
  // const [navTop, setNavTop] = useState<number>(0);
  const scrollTop = scrollYPos === 0;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    setNavTrigger(currentScrollY <= 10);

    // if (currentScrollY > scrollYPos) {
    //   setNavTop(-56);
    // } else {
    //   setNavTop(0);
    // }

    setScrollYPos(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollYPos, pathname]);

  return (
    <Box
      id="topNav"
      w={"100%"}
      zIndex={99}
      position={"fixed"}
      // top={`${navTop}px`}
      left={0}
      transition={"400ms"}
      color={"ibody"}
      animation={"flyInFromTop 1s"}
      bg={!navTrigger ? "#303030df" : ""}
      backdropFilter={!navTrigger ? "blur(5px)" : ""}
      {...props}
    >
      <Container>
        <HStack
          justify={"space-between"}
          py={2}
          w={"100%"}
          h={scrollTop ? "80px" : "60px"}
          transition={"200ms"}
        >
          <HStack flexShrink={0} w={"100px"}>
            {/* <NavDrawer
              activeNavIndex={activeNavIndex}
              aria-label="Drawer Navs"
              color={!navTrigger ? "white" : "current"}
            /> */}
            <HStack mx={"auto"}>
              <ColorModeButton
                color={!navTrigger ? "white" : "ibody"}
                borderRadius={"full"}
                className={"btn"}
                size={"lg"}
              />

              <LangSwitcher
                color={!navTrigger ? "white" : "ibody"}
                borderRadius={"full"}
                size={"lg"}
                fontSize={"1rem !important"}
              />
            </HStack>
          </HStack>
          {/* 
          {sw > 900 ? (
            <HStack gap={5}>
              {navs?.map((nav, i) => {
                return (
                  <Link key={i} to={nav.link}>
                    <Button
                      flexShrink={0}
                      className="btn-clear"
                      borderRadius={0}
                      h={"32px !important"}
                      border={"none"}
                      _hover={{
                        color: "p.500",
                      }}
                      transition={"200ms"}
                      color={!navTrigger ? "white" : "current"}
                      fontWeight={"500 !important"}
                      fontSize={"1rem !important"}
                    >
                      {nav.label[lang]}
                    </Button>
                  </Link>
                );
              })}
            </HStack>
          ) : (
            ""
          )} */}

          <HStack flexShrink={0} w={[null, null, "100px"]} justify={"flex-end"}>
            <CtaButton />
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default TopNav;

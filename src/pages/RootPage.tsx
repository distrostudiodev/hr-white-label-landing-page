import CContainer from "@/components/ui-custom/CContainer";
import useScrollToTop from "@/hooks/useScrollToTop";
import HeroHome from "@/pages/section/HeroHome";
import AboutUsHome from "./section/AboutUsHome";
import Footer from "./section/Footer";
import FeaturesHome from "./section/FeaturesHome";
import LastCta from "./section/LastCta";

const RootPage = () => {
  useScrollToTop();

  return (
    <CContainer>
      <HeroHome />
      <AboutUsHome />
      <FeaturesHome />
      <LastCta />
      <Footer />
    </CContainer>
  );
};

export default RootPage;

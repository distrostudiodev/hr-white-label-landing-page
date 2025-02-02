import CContainer from "@/components/ui-custom/CContainer";
import useScrollToTop from "@/hooks/useScrollToTop";
import HeroHome from "@/pages/section/HeroHome";
import AboutUsHome from "./section/AboutUsHome";
import Benefits from "./section/Benefits";
import FeaturesHome from "./section/FeaturesHome";
import Footer from "./section/Footer";

const RootPage = () => {
  useScrollToTop();

  return (
    <CContainer>
      <HeroHome />
      <AboutUsHome />
      <FeaturesHome />
      <Benefits />
      <Footer />
    </CContainer>
  );
};

export default RootPage;

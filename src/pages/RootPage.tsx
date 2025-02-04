import CContainer from "@/components/ui-custom/CContainer";
import useScrollToTop from "@/hooks/useScrollToTop";
import HeroHome from "@/pages/section/HeroHome";
import AboutUsHome from "./section/AboutUsHome";
import Benefits from "./section/Benefits";
import FeaturesHome from "./section/FeaturesHome";
import Footer from "./section/Footer";
import WAWidget from "@/components/widget/WAWidget";
import Faqs from "./section/Faqs";
import CtaIndependentDisclosure from "@/components/widget/CtaIndependentDisclosure";

const RootPage = () => {
  useScrollToTop();

  return (
    <CContainer>
      <HeroHome />
      <AboutUsHome />
      <FeaturesHome />
      <Benefits />
      <Faqs />

      <Footer />

      <CtaIndependentDisclosure />
      <WAWidget />
    </CContainer>
  );
};

export default RootPage;

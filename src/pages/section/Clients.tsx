import CContainer from "@/components/ui-custom/CContainer";
import contents from "@/constant/contents";
import { useLang } from "@/hooks/useLang";

const Clients = () => {
  const { lang } = useLang();
  const content = contents.home.clients;

  return <CContainer bg={"bg.subtle"} py={20}></CContainer>;
};

export default Clients;

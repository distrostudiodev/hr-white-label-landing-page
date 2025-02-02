import { Interface__Nav } from "./interfaces";

const navs: Interface__Nav[] = [
  {
    label: {
      id: "Beranda",
      en: "Home",
    },
    link: "/",
  },
  {
    label: {
      id: "Karya",
      en: "Works",
    },
    link: "/works",
  },
  {
    label: {
      id: "Tentang Kami",
      en: "About Us",
    },
    link: "/about-us",
  },
  {
    label: {
      id: "Layanan",
      en: "Services",
    },
    link: "/services",
  },
  {
    label: {
      id: "Produk",
      en: "Products",
    },
    link: "/products",
  },
  // {
  //   label: {
  //     id: "FAQs",
  //     en: "FAQs",
  //   },
  //   link: "/faqs",
  // },
];

export default navs;

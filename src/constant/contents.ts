import {
  Globe,
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { BiLogoInstagram, BiLogoLinkedin } from "react-icons/bi";
import { IMAGES_PATH } from "./path";
import {
  IconBolt,
  IconCalendar,
  IconChartLine,
  IconClock,
  IconCoins,
  IconDatabase,
  IconHierarchy,
  IconReport,
  IconShield,
  IconThumbUp,
} from "@tabler/icons-react";

const contents = {
  headline: {
    id: "Tempat Ide Visioner Menjadi Nyata",
    en: "Where Visionary Ideas Take Shape",
  },
  tagline: "visionary engineering",
  home: {
    hero: {
      title: {
        id: "Solusi Manajemen SDM yang Efektif dan Efisien",
        en: "Effective and Efficient HR Management Solution",
      },
      subTitle: {
        id: "Optimalkan Pengelolaan SDM dengan Teknologi Modern.",
        en: "Optimize HR Management with Modern Technology.",
      },
      cta: {
        id: "Coba Gratis",
        en: "Try It Free",
      },
    },
    aboutUs: {
      title: {
        id: "Tentang HRMS",
        en: "About HRMS",
      },
      intro: {
        id: "Kelola karyawan dengan lebih mudah, cepat, dan efisien menggunakan HRMS, sistem manajemen sumber daya manusia yang dirancang untuk memenuhi kebutuhan bisnis Anda. Dari absensi hingga penggajian, semua dalam satu platform yang intuitif dan fleksibel.",
        en: "Manage employees more easily, quickly, and efficiently using HRMS, a human resource management system designed to meet your business needs. From attendance to payroll, all in one intuitive and flexible platform.",
      },
    },
    features: {
      title: {
        id: "Fitur Unggulan",
        en: "Featured Features",
      },
      subTitle: {
        id: "Semua fitur HR dalam satu platform efektif.",
        en: "All HR features in one effective platform.",
      },
      list: [
        {
          img: `${IMAGES_PATH}/hero.jpg`,
          icon: IconClock,
          label: {
            id: "Manajemen Absensi Otomatis",
            en: "Automatic Attendance Management",
          },
          description: {
            id: "Pantau kehadiran karyawan secara real-time dengan sistem absensi berbasis GPS, fingerprint, atau face recognition.",
            en: "Monitor employee attendance in real-time with a GPS, fingerprint, or face recognition-based attendance system.",
          },
        },
        {
          img: `${IMAGES_PATH}/hero.jpg`,
          icon: IconCoins,
          label: {
            id: "Penggajian Otomatis",
            en: "Automatic Payroll",
          },
          description: {
            id: "Hitung gaji, tunjangan, dan potongan dengan mudah. Terintegrasi dengan berbagai metode pembayaran untuk proses payroll yang lebih cepat dan akurat.",
            en: "Easily calculate salaries, benefits, and deductions. Integrated with various payment methods for faster and more accurate payroll processing.",
          },
        },
        {
          img: `${IMAGES_PATH}/hero.jpg`,
          icon: IconCalendar,
          label: {
            id: "Manajemen Cuti & Lembur",
            en: "Leave & Overtime Management",
          },
          description: {
            id: "Ajukan dan setujui cuti serta lembur dengan sistem otomatis yang memastikan transparansi dan efisiensi.",
            en: "Apply for and approve leave and overtime with an automated system ensuring transparency and efficiency.",
          },
        },
        {
          img: `${IMAGES_PATH}/hero.jpg`,
          icon: IconReport,
          label: {
            id: "Evaluasi Kinerja",
            en: "Performance Evaluation",
          },
          description: {
            id: "Tentukan KPI, pantau pencapaian karyawan, dan berikan feedback untuk meningkatkan produktivitas tim Anda.",
            en: "Set KPIs, monitor employee achievements, and provide feedback to improve team productivity.",
          },
        },
        {
          img: `${IMAGES_PATH}/hero.jpg`,
          icon: IconDatabase,
          label: {
            id: "Database Karyawan Terpusat",
            en: "Centralized Employee Database",
          },
          description: {
            id: "Simpan dan kelola data karyawan dalam satu tempat yang aman dan mudah diakses kapan saja.",
            en: "Store and manage employee data in a secure and easily accessible centralized location.",
          },
        },
        {
          img: `${IMAGES_PATH}/hero.jpg`,
          icon: IconChartLine,
          label: {
            id: "Laporan & Analitik",
            en: "Reports & Analytics",
          },
          description: {
            id: "Dapatkan laporan dan analisis mendalam tentang kehadiran, performa, serta produktivitas karyawan dalam satu dashboard interaktif.",
            en: "Gain in-depth reports and analysis on attendance, performance, and employee productivity in one interactive dashboard.",
          },
        },
      ],
    },
    benefits: {
      title: {
        id: "Kenapa Memilih HRMS?",
        en: "Why Choose HRMS?",
      },
      list: [
        {
          icon: IconThumbUp,
          label: {
            id: "Mudah Digunakan",
            en: "Easy to Use",
          },
          description: {
            id: "Antarmuka intuitif yang dapat digunakan oleh semua level pengguna.",
            en: "Intuitive interface that can be used by all levels of users.",
          },
        },
        {
          icon: IconShield,
          label: {
            id: "Aman & Terpercaya",
            en: "Secure & Reliable",
          },
          description: {
            id: "Sistem dengan enkripsi data tinggi untuk menjaga keamanan informasi perusahaan Anda.",
            en: "System with high-level data encryption to protect your company's information.",
          },
        },
        {
          icon: IconBolt,
          label: {
            id: "Skalabilitas Tinggi",
            en: "Highly Scalable",
          },
          description: {
            id: "Cocok untuk bisnis kecil hingga perusahaan besar dengan ribuan karyawan.",
            en: "Suitable for small businesses to large enterprises with thousands of employees.",
          },
        },
        {
          icon: IconHierarchy,
          label: {
            id: "Integrasi Fleksibel",
            en: "Flexible Integration",
          },
          description: {
            id: "Dapat dihubungkan dengan sistem lain seperti accounting, ERP, dan payroll.",
            en: "Can be connected with other systems such as accounting, ERP, and payroll.",
          },
        },
      ],
    },
    clients: {
      title: {
        id: "Fitur Unggulan",
        en: "Featured Features",
      },
      subTitle: {
        id: "Semua fitur HR dalam satu platform efektif.",
        en: "All HR features in one effective platform.",
      },
    },
    footer: {
      contact: {
        id: "Kontak",
        en: "Contact",
      },
      socialMedia: {
        id: "Media Sosial",
        en: "Social Media",
      },
      copyright: {
        id: "Hak Cipta",
        en: "Copyright",
      },
    },
  },

  stats: [
    {
      value: { id: "2M+", en: "2Jt+" },
      label: {
        id: "Pengguna aktif",
        en: "Active users",
      },
    },
    {
      value: { id: "80+", en: "80+" },
      label: {
        id: "Proyek selesai",
        en: "Project completed",
      },
    },
    {
      value: { id: "140+", en: "140+" },
      label: {
        id: "Mitra dan klien yang bahagia",
        en: "Happy partners and clients",
      },
    },
    {
      value: { id: "5+", en: "5+" },
      label: {
        id: "Tahun dalam bisnis",
        en: "Years in the business",
      },
    },
  ],
  clients: [
    {
      logo: `${IMAGES_PATH}/clients/rski.png`,
      logoGray: `${IMAGES_PATH}/clients/rski_gray.png`,
      name: "Lorem Ipsum",
    },
    {
      logo: `${IMAGES_PATH}/clients/gerindra.png`,
      logoGray: `${IMAGES_PATH}/clients/gerindra_gray.png`,
      name: "Lorem Ipsum",
    },
    {
      logo: `${IMAGES_PATH}/clients/poltekkes.png`,
      logoGray: `${IMAGES_PATH}/clients/poltekkes_gray.png`,
      name: "Lorem Ipsum",
    },
    {
      logo: `${IMAGES_PATH}/clients/bpjs.png`,
      logoGray: `${IMAGES_PATH}/clients/bpjs_gray.png`,
      name: "Lorem Ipsum",
    },
    {
      logo: `${IMAGES_PATH}/clients/poltekkes.png`,
      logoGray: `${IMAGES_PATH}/clients/poltekkes_gray.png`,
      name: "Lorem Ipsum",
    },
    {
      logo: `${IMAGES_PATH}/clients/gerindra.png`,
      logoGray: `${IMAGES_PATH}/clients/gerindra_gray.png`,
      name: "Lorem Ipsum",
    },
  ],
  iconicClients: [
    {
      logo: `${IMAGES_PATH}/clients/rski.png`,
      logoGray: `${IMAGES_PATH}/clients/rski_gray.png`,
      name: "Lorem Ipsum",
    },
    {
      logo: `${IMAGES_PATH}/clients/gerindra.png`,
      logoGray: `${IMAGES_PATH}/clients/gerindra_gray.png`,
      name: "Lorem Ipsum",
    },
    {
      logo: `${IMAGES_PATH}/clients/poltekkes.png`,
      logoGray: `${IMAGES_PATH}/clients/poltekkes_gray.png`,
      name: "Lorem Ipsum",
    },
    {
      logo: `${IMAGES_PATH}/clients/bpjs.png`,
      logoGray: `${IMAGES_PATH}/clients/bpjs_gray.png`,
      name: "Lorem Ipsum",
    },
    {
      logo: `${IMAGES_PATH}/clients/poltekkes.png`,
      logoGray: `${IMAGES_PATH}/clients/poltekkes_gray.png`,
      name: "Lorem Ipsum",
    },
    {
      logo: `${IMAGES_PATH}/clients/gerindra.png`,
      logoGray: `${IMAGES_PATH}/clients/gerindra_gray.png`,
      name: "Lorem Ipsum",
    },
  ],
  clientStories: [
    {
      image: `${IMAGES_PATH}/reza.jpg`,
      name: "Haji Reza Harawi",
      title: "Haji Mabrur 7x dalam Setahun",
      rating: 5,
      quote: {
        id: "Nulla magna enim amet in culpa. Aliquip veniam consectetur esse laborum. Incididunt aute eu consectetur velit cupidatat veniam proident culpa magna. Aute tempor ad reprehenderit nisi anim velit sunt dolore qui irure irure exercitation proident. Ex sint sint do laborum ea. Non cupidatat labore occaecat laboris aute amet occaecat labore amet culpa occaecat.",
        en: "",
      },
    },
    {
      image: `${IMAGES_PATH}/reza.jpg`,
      name: "Haji Reza Harawi",
      title: "Haji Mabrur 7x dalam Setahun",
      rating: 5,
      quote: {
        id: "Nulla magna enim amet in culpa. Aliquip veniam consectetur esse laborum. Incididunt aute eu consectetur velit cupidatat veniam proident culpa magna. Aute tempor ad reprehenderit nisi anim velit sunt dolore qui irure irure exercitation proident. Ex sint sint do laborum ea. Non cupidatat labore occaecat laboris aute amet occaecat labore amet culpa occaecat.",
        en: "",
      },
    },
    {
      image: `${IMAGES_PATH}/reza.jpg`,
      name: "Haji Reza Harawi",
      title: "Haji Mabrur 7x dalam Setahun",
      rating: 5,
      quote: {
        id: "Nulla magna enim amet in culpa. Aliquip veniam consectetur esse laborum. Incididunt aute eu consectetur velit cupidatat veniam proident culpa magna. Aute tempor ad reprehenderit nisi anim velit sunt dolore qui irure irure exercitation proident. Ex sint sint do laborum ea. Non cupidatat labore occaecat laboris aute amet occaecat labore amet culpa occaecat.",
        en: "",
      },
    },
    {
      image: `${IMAGES_PATH}/reza.jpg`,
      name: "Haji Reza Harawi",
      title: "Haji Mabrur 7x dalam Setahun",
      rating: 5,
      quote: {
        id: "Nulla magna enim amet in culpa. Aliquip veniam consectetur esse laborum. Incididunt aute eu consectetur velit cupidatat veniam proident culpa magna. Aute tempor ad reprehenderit nisi anim velit sunt dolore qui irure irure exercitation proident. Ex sint sint do laborum ea. Non cupidatat labore occaecat laboris aute amet occaecat labore amet culpa occaecat.",
        en: "",
      },
    },
    {
      image: `${IMAGES_PATH}/reza.jpg`,
      name: "Haji Reza Harawi",
      title: "Haji Mabrur 7x dalam Setahun",
      rating: 5,
      quote: {
        id: "Nulla magna enim amet in culpa. Aliquip veniam consectetur esse laborum. Incididunt aute eu consectetur velit cupidatat veniam proident culpa magna. Aute tempor ad reprehenderit nisi anim velit sunt dolore qui irure irure exercitation proident. Ex sint sint do laborum ea. Non cupidatat labore occaecat laboris aute amet occaecat labore amet culpa occaecat.",
        en: "",
      },
    },
  ],
  teams: [
    {
      name: "Naufal Ilyas Abdul Hakim",
      image: `${IMAGES_PATH}/teams/naufal.png`,
      role: "CEO",
      sosmeds: [
        {
          label: "LinkedIn",
          icon: BiLogoLinkedin,
          link: "https://www.linkedin.com/in/bayuprasetyaadjisugiyarto/",
        },
        {
          label: "Instagram",
          icon: BiLogoInstagram,
          link: "https://www.instagram.com/prst.b.y/",
        },
      ],
      narrative:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      quote: {
        id: "Percayalah pada diri sendiri, hadapi tantangan Anda",
        en: "Believe in yourself, take on your challenges",
      },
    },
    {
      name: "Reza Hashfi Hawari",
      image: `${IMAGES_PATH}/teams/reza.png`,
      role: "President",
      sosmeds: [
        {
          label: "LinkedIn",
          icon: BiLogoLinkedin,
          link: "https://www.linkedin.com/in/reza-hashfi-hawari-b80549202/",
        },
        {
          label: "Instagram",
          icon: BiLogoInstagram,
          link: "https://www.instagram.com/rezahhawari/",
        },
      ],
      narrative:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      quote: {
        id: "Jatuh bukanlah suatu kegagalan. Kegagalan datang ketika Anda tetap berada di tempat Anda terjatuh.",
        en: "Faling down is not a failure. Failure comes when you stay where you have fallen.",
      },
    },
    {
      name: "Zaenal Abidin",
      image: `${IMAGES_PATH}/teams/zaenal.png`,
      role: "Lead Engineer",
      sosmeds: [
        {
          label: "LinkedIn",
          icon: BiLogoLinkedin,
          link: "https://www.linkedin.com/in/bayuprasetyaadjisugiyarto/",
        },
        {
          label: "Instagram",
          icon: BiLogoInstagram,
          link: "https://www.instagram.com/prst.b.y/",
        },
      ],
      narrative:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      quote: {
        id: "Percayalah pada diri sendiri, hadapi tantangan Anda",
        en: "Believe in yourself, take on your challenges",
      },
    },
    {
      name: "Azam",
      image: `${IMAGES_PATH}/teams/reza.png`,
      role: "UI/UX Designer",
      sosmeds: [
        {
          label: "LinkedIn",
          icon: BiLogoLinkedin,
          link: "https://www.linkedin.com/in/bayuprasetyaadjisugiyarto/",
        },
        {
          label: "Instagram",
          icon: BiLogoInstagram,
          link: "https://www.instagram.com/prst.b.y/",
        },
      ],
      narrative:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      quote: {
        id: "Percayalah pada diri sendiri, hadapi tantangan Anda",
        en: "Believe in yourself, take on your challenges",
      },
    },
    {
      name: "Fatwa Linovera",
      image: `${IMAGES_PATH}/teams/sulenq.png`,
      role: "Frontend Developer",
      sosmeds: [
        {
          label: "LinkedIn",
          icon: BiLogoLinkedin,
          link: "https://www.linkedin.com/in/fatwa-linovera-620672150/",
        },
        // {
        //   label: "Instagram",
        //   icon: RiInstagramFill,
        //   link: "https://www.instagram.com/_sulenq/",
        // },
        {
          label: "Website",
          icon: Globe,
          link: "https://fatwalinovera.netlify.app/",
        },
      ],
      narrative:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      quote: {
        id: "Satu-satunya kebijaksanaan sejati adalah mengetahui bahwa Anda tidak tahu apa-apa",
        en: "The only true wisdom is in knowing you know nothing",
      },
    },
  ],
  techstack: [
    {
      name: "HTML",
      logo: `${IMAGES_PATH}/techstack/html.png`,
      logoGray: `${IMAGES_PATH}/techstack/gray/html.png`,
    },
    {
      name: "CSS",
      logo: `${IMAGES_PATH}/techstack/css.png`,
      logoGray: `${IMAGES_PATH}/techstack/gray/css.png`,
    },
    {
      name: "React",
      logo: `${IMAGES_PATH}/techstack/react.png`,
      logoGray: `${IMAGES_PATH}/techstack/gray/react.png`,
    },
    {
      name: "Javascript",
      logo: `${IMAGES_PATH}/techstack/js.png`,
      logoGray: `${IMAGES_PATH}/techstack/gray/js.png`,
    },
    {
      name: "Typescript",
      logo: `${IMAGES_PATH}/techstack/ts.png`,
      logoGray: `${IMAGES_PATH}/techstack/gray/ts.png`,
    },
    {
      name: "ChakraUI",
      logo: `${IMAGES_PATH}/techstack/chakraui.png`,
      logoGray: `${IMAGES_PATH}/techstack/gray/chakraui.png`,
    },
    {
      name: "Zustand",
      logo: `${IMAGES_PATH}/techstack/zustand.png`,
      logoGray: `${IMAGES_PATH}/techstack/gray/zustand.png`,
    },
    {
      name: "Axios",
      logo: `${IMAGES_PATH}/techstack/axios.png`,
      logoGray: `${IMAGES_PATH}/techstack/gray/axios.png`,
    },
    {
      name: "GSAP",
      logo: `${IMAGES_PATH}/techstack/gsap.png`,
      logoGray: `${IMAGES_PATH}/techstack/gray/gsap.png`,
    },
    {
      name: "Laravel",
      logo: `${IMAGES_PATH}/techstack/laravel.png`,
      logoGray: `${IMAGES_PATH}/techstack/gray/laravel.png`,
    },
    {
      name: "PHP",
      logo: `${IMAGES_PATH}/techstack/php.png`,
      logoGray: `${IMAGES_PATH}/techstack/gray/php.png`,
    },
    {
      name: "MySQL",
      logo: `${IMAGES_PATH}/techstack/mysql.png`,
      logoGray: `${IMAGES_PATH}/techstack/gray/mysql.png`,
    },
    {
      name: "Postman",
      logo: `${IMAGES_PATH}/techstack/postman.png`,
      logoGray: `${IMAGES_PATH}/techstack/gray/postman.png`,
    },
    {
      name: "Figma",
      logo: `${IMAGES_PATH}/techstack/figma.png`,
      logoGray: `${IMAGES_PATH}/techstack/gray/figma.png`,
    },
    {
      name: "CorelDRAW",
      logo: `${IMAGES_PATH}/techstack/corel.png`,
      logoGray: `${IMAGES_PATH}/techstack/gray/corel.png`,
    },
    {
      name: "Phosphor Icon",
      logo: `${IMAGES_PATH}/techstack/phosphoricon.png`,
      logoGray: `${IMAGES_PATH}/techstack/gray/phosphoricon.png`,
    },
  ],
  faqs: {
    title: {
      id: "Pertanyaan yang Sering Diajukan",
      en: "Frequently Asked Questions",
    },
    summary: {
      id: "Temukan jawaban untuk pertanyaan umum tentang layanan kami, proses kerja, dan informasi penting lainnya di sini. Kami siap membantu Anda dengan semua yang Anda butuhkan.",
      en: "Find answers to common questions about our services, workflow, and other important information here. We are ready to assist you with everything you need.",
    },
    faqs: [
      {
        title: {
          id: "Lorem ipsum dolor sit amet?",
          en: "Lorem ipsum dolor sit amet?",
        },
        answer: {
          id: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit, urna vel tempor dictum, velit eros viverra mi, nec varius lorem ipsum ut lectus. Suspendisse potenti. Phasellus et volutpat elit. Maecenas vulputate semper mi, ut malesuada mi auctor in.",
          en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit, urna vel tempor dictum, velit eros viverra mi, nec varius lorem ipsum ut lectus. Suspendisse potenti. Phasellus et volutpat elit. Maecenas vulputate semper mi, ut malesuada mi auctor in.",
        },
      },
      {
        title: {
          id: "Curabitur suscipit urna vel tempor dictum?",
          en: "Curabitur suscipit urna vel tempor dictum?",
        },
        answer: {
          id: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus, tortor nec bibendum interdum, arcu urna dapibus metus, at gravida ex mi id nulla. Nullam sollicitudin libero sit amet mauris dapibus tincidunt. Integer nec volutpat sapien. Curabitur euismod fermentum urna.",
          en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus, tortor nec bibendum interdum, arcu urna dapibus metus, at gravida ex mi id nulla. Nullam sollicitudin libero sit amet mauris dapibus tincidunt. Integer nec volutpat sapien. Curabitur euismod fermentum urna.",
        },
      },
      {
        title: {
          id: "Morbi euismod nulla a neque cursus?",
          en: "Morbi euismod nulla a neque cursus?",
        },
        answer: {
          id: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod nulla a neque cursus, sed viverra augue tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer euismod, nibh ut vulputate accumsan, dui sapien maximus eros, vitae sagittis velit eros sed mauris.",
          en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod nulla a neque cursus, sed viverra augue tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer euismod, nibh ut vulputate accumsan, dui sapien maximus eros, vitae sagittis velit eros sed mauris.",
        },
      },
      {
        title: {
          id: "Vestibulum ante ipsum primis in faucibus?",
          en: "Vestibulum ante ipsum primis in faucibus?",
        },
        answer: {
          id: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. In hac habitasse platea dictumst. Praesent tincidunt, sapien nec sollicitudin feugiat, arcu sem venenatis nisi, id interdum est nunc non tortor. Ut vitae lorem eget lacus consequat auctor. Donec blandit sollicitudin ex nec aliquet.",
          en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. In hac habitasse platea dictumst. Praesent tincidunt, sapien nec sollicitudin feugiat, arcu sem venenatis nisi, id interdum est nunc non tortor. Ut vitae lorem eget lacus consequat auctor. Donec blandit sollicitudin ex nec aliquet.",
        },
      },
      {
        title: {
          id: "Nullam sollicitudin libero sit amet?",
          en: "Nullam sollicitudin libero sit amet?",
        },
        answer: {
          id: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin libero sit amet mauris dapibus tincidunt. Integer nec volutpat sapien. Maecenas id tristique ligula. Ut cursus, nisl a convallis condimentum, ligula orci suscipit odio, in tempus mauris nisl vel ligula.",
          en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin libero sit amet mauris dapibus tincidunt. Integer nec volutpat sapien. Maecenas id tristique ligula. Ut cursus, nisl a convallis condimentum, ligula orci suscipit odio, in tempus mauris nisl vel ligula.",
        },
      },
    ],
  },
  contact: {
    address: "Jl. Tampomas Dalam Raya No. 12, Semarang",
    email: "contact@exium.com",
    phone: "+62 857-2621-8466",
  },
  sosmeds: {
    label: { id: "Sosial Media", en: "Social Links" },
    list: [
      {
        name: "Whatsappp",
        icon: WhatsappLogo,
        number: "+6285726218466",
        link: "https://wa.me/+6285726218466",
        disabled: true,
      },
      {
        name: "Instagram",
        icon: InstagramLogo,
        link: "",
        disabled: true,
      },
      {
        name: "LinkedIn",
        icon: LinkedinLogo,
        link: "",
        disabled: true,
      },
    ],
  },
  footer: {
    cta: {
      title: {
        id: "Butuh Bantuan atau Ingin Konsultasi Lebih Lanjut?",
        en: "Need Help or Want Further Consultation?",
      },
      desc: {
        id: "Klik 'Hubungi Kami di WhatsApp' untuk berbicara langsung dengan tim kami yang siap memberikan solusi dan menjawab segala pertanyaan Anda dengan cepat.",
        en: "Click 'Contact Us on WhatsApp' to chat directly with our team, ready to provide solutions and answer all your questions quickly.",
      },
      buttonLabel: {
        id: "Hubungi Kami di WhatsApp",
        en: "Contact Us on WhatsApp",
      },
    },
    navigationLabel: {
      id: "Navigasi",
      en: "Navigation",
    },
    contactLabel: {
      id: "Kontak",
      en: "Contant",
    },
    viewMapsLabel: {
      id: "Lihat Alamat di Maps",
      en: "View Address on Maps",
    },
  },
};

export default contents;

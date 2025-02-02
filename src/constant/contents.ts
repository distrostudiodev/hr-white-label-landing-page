import {
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";
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
import { BRAND_NAME } from "./brands";
import { IMAGES_PATH } from "./path";

const contents = {
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
      sellingPoints: {
        list: [
          {
            id: "Hilangkan Pekerjaan HR yang Berulang",
            en: "Eliminate Repetitive HR Tasks",
          },
          {
            id: "Proses Payroll Lebih Cepat & Akurat",
            en: "Faster & More Accurate Payroll Processing",
          },
          {
            id: "Pantau Kinerja & Kehadiran dalam Satu Dashboard",
            en: "Monitor Performance & Attendance in One Dashboard",
          },
        ],
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
      intro: {
        id: `HRMS by ${BRAND_NAME} telah dipercaya oleh berbagai perusahaan dari berbagai industri.`,
        en: `HRMS by ${BRAND_NAME} has been trusted by various companies from various industries.`,
      },
      list: [
        {
          name: "Rumah Sakit Kasih Ibu Surakarta",
          img: `${IMAGES_PATH}/clients/images.jpg`,
        },
        {
          name: "Rumah Sakit Kasih Ibu Surakarta",
          img: `${IMAGES_PATH}/clients/images.jpg`,
        },
        {
          name: "Rumah Sakit Kasih Ibu Surakarta",
          img: `${IMAGES_PATH}/clients/images.jpg`,
        },
        {
          name: "Rumah Sakit Kasih Ibu Surakarta",
          img: `${IMAGES_PATH}/clients/images.jpg`,
        },
      ],
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
  faqs: {
    list: [
      {
        q: {
          id: "Bagaimana cara mencoba HRMS sebelum membeli?",
          en: "How to try HRMS before buying?",
        },
        a: { id: "", en: "" },
      },
      {
        q: {
          id: "Apakah HRMS bisa digunakan di berbagai perangkat?",
          en: "Can HRMS be used on multiple devices?",
        },
        a: {
          id: "Ya, HRMS dapat diakses melalui desktop, tablet, dan smartphone.",
          en: "Yes, HRMS can be accessed via desktop, tablet, and smartphone.",
        },
      },
      {
        q: {
          id: "Apakah HRMS mendukung multi-cabang dan multi-divisi?",
          en: "Does HRMS support multi-branch and multi-division management?",
        },
        a: {
          id: "Ya, HRMS mendukung pengelolaan multi-cabang dan multi-divisi dalam satu sistem.",
          en: "Yes, HRMS supports multi-branch and multi-division management in one system.",
        },
      },
      {
        q: {
          id: "Bagaimana sistem support dan layanan pelanggan HRMS?",
          en: "How does HRMS customer support work?",
        },
        a: {
          id: "Kami menyediakan layanan pelanggan 24/7 melalui email, chat, dan telepon.",
          en: "We provide 24/7 customer support via email, chat, and phone.",
        },
      },
      {
        q: {
          id: "Apakah HRMS dapat disesuaikan dengan kebutuhan perusahaan?",
          en: "Can HRMS be customized to fit company needs?",
        },
        a: {
          id: "Ya, HRMS memiliki fitur yang dapat dikustomisasi sesuai kebutuhan bisnis Anda.",
          en: "Yes, HRMS has features that can be customized to fit your business needs.",
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

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
  IconDeviceDesktop,
  IconDeviceMobile,
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
        id: "Solusi HRD Terbaik untuk Manajemen SDM yang Efektif",
        en: "Best HRD Solution for Effective HR Management",
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
        id: "Kelola sumber daya manusia dengan lebih mudah, cepat, dan efisien menggunakan HRMS, solusi HRD berbasis teknologi yang membantu perusahaan dalam mengelola absensi, penggajian, cuti, evaluasi kinerja, hingga laporan analitik dalam satu sistem terintegrasi. Dengan HRMS, perusahaan dapat meningkatkan produktivitas tim dan mengurangi pekerjaan administratif yang memakan waktu.",
        en: "Manage human resources more easily, quickly, and efficiently using HRMS, a technology-based HRD solution that helps companies manage attendance, payroll, leave, performance evaluation, and analytical reports in one integrated system. With HRMS, companies can increase team productivity and reduce time-consuming administrative work.",
      },
    },
    features: {
      title: {
        id: "Fitur Unggulan HRMS – Solusi HRD Lengkap untuk Bisnis",
        en: "Featured Features",
      },
      subTitle: {
        id: "Semua fitur HR dalam satu platform efektif.",
        en: "All HR features in one effective platform.",
      },
      list: [
        {
          img: `${IMAGES_PATH}/features/presensi.png`,
          icon: IconClock,
          label: {
            id: "Manajemen Absensi Otomatis",
            en: "Automatic Attendance Management",
          },
          description: {
            id: "Pantau kehadiran karyawan secara real-time dengan teknologi GPS, atau face recognition.",
            en: "Monitor employee attendance in real-time with GPS technology, or face recognition.",
          },
        },
        {
          img: `${IMAGES_PATH}/features/penggajian.png`,
          icon: IconCoins,
          label: {
            id: "Penggajian Otomatis",
            en: "Automatic Payroll",
          },
          description: {
            id: "Hitung gaji, tunjangan, dan potongan dengan akurat serta terintegrasi dengan berbagai metode pembayaran.",
            en: "Calculate salaries, allowances, and deductions accurately and integrate with various payment methods.",
          },
        },
        {
          img: `${IMAGES_PATH}/features/cuti.png`,
          icon: IconCalendar,
          label: {
            id: "Manajemen Cuti & Lembur",
            en: "Leave & Overtime Management",
          },
          description: {
            id: "Proses pengajuan dan persetujuan cuti serta lembur lebih cepat dengan sistem yang transparan.",
            en: "The process of submitting and approving leave and overtime is faster with a transparent system.",
          },
        },
        {
          img: `${IMAGES_PATH}/features/penilaian.png`,
          icon: IconReport,
          label: {
            id: "Evaluasi Kinerja Karyawan",
            en: "Employee Performance Evaluation",
          },
          description: {
            id: "Tentukan KPI, pantau pencapaian, dan berikan feedback berbasis data untuk meningkatkan produktivitas.",
            en: "Define KPIs, monitor achievements, and provide data-based feedback to improve productivity.",
          },
        },
        {
          img: `${IMAGES_PATH}/features/karyawan.png`,
          icon: IconDatabase,
          label: {
            id: "Database Karyawan Terpusat",
            en: "Centralized Employee Database",
          },
          description: {
            id: "Simpan dan kelola semua data karyawan dalam satu sistem yang aman dan mudah diakses.",
            en: "Store and manage all employee data in one secure and easily accessible system.",
          },
        },
        {
          img: `${IMAGES_PATH}/features/dashboard.png`,
          icon: IconChartLine,
          label: {
            id: "Laporan & Analitik SDM",
            en: "Reports & Analytics",
          },
          description: {
            id: "Dapatkan laporan lengkap dan analisis mendalam terkait kehadiran, performa, serta produktivitas karyawan.",
            en: "Get comprehensive reports and in-depth analysis on employee attendance, performance, and productivity.",
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
            id: "Antarmuka intuitif untuk semua level pengguna.",
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
            id: "Data perusahaan terenkripsi untuk keamanan maksimal.",
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
            id: "Cocok untuk bisnis kecil hingga perusahaan besar.",
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
            id: "Dapat dihubungkan dengan ERP, akuntansi, dan payroll lainnya.",
            en: "Can be connected with other systems such as accounting, ERP, and payroll.",
          },
        },
      ],
    },
    clients: {
      intro: {
        id: `HRMS by ${BRAND_NAME} telah dipercaya oleh berbagai perusahaan.`,
        en: `HRMS by ${BRAND_NAME} has been trusted by various companies.`,
      },
      list: [
        {
          name: "Rumah Sakit Kasih Ibu Surakarta",
          img: `${IMAGES_PATH}/clients/rski.png`,
        },
        {
          name: "PT Yohana Sentosa Pratama",
          img: `${IMAGES_PATH}/clients/yohana.png`,
        },
        {
          name: "Khalifah One",
          img: `${IMAGES_PATH}/clients/khalifah.png`,
        },
        {
          name: "Kawan Mina",
          img: `${IMAGES_PATH}/clients/kawan.png`,
        },
      ],
    },
  },
  links: {
    personalia: {
      icon: IconDeviceDesktop,
      link: "https://hrweb.distrostudio.org/",
      title: "Personalia",
      description: {
        id: "Manajemen data karyawan.",
        en: "Employee data management.",
      },
      username: "super.admin",
      password: "superadmin123",
    },
    employee: {
      icon: IconDeviceMobile,
      link: "https://hr.distrostudio.org/",
      title: "Employee (Mobile)",
      description: {
        id: "Akses mobile untuk karyawan.",
        en: "Mobile access for employees.",
      },
      username: "test1",
      password: "1234",
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
        a: {
          id: "Anda bisa mencoba gratis melalui tombol ini.",
          en: "You can try it for free via this button.",
        },
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
    address: "Remotely, based on Semarang, Central Java, Indonesia",
    email: "contact@exium.com",
    phone: "+6282352222001",
    wa: "https://wa.me/6282352222001?text=Halo%2C%20saya%20tertarik%20untuk%20mendiskusikan%20lebih%20lanjut%20mengenai%20aplikasi%20HR%20yang%20Anda%20tawarkan.%20Apakah%20saya%20bisa%20mendapatkan%20informasi%20lebih%20detail%20atau%20jadwal%20untuk%20berdiskusi%20lebih%20lanjut%3F%20Terima%20kasih%21",
  },
  sosmeds: {
    label: { id: "Sosial Media", en: "Social Links" },
    list: [
      {
        name: "Whatsappp",
        icon: WhatsappLogo,
        number: "+6285726218466",
        link: "https://wa.me/6282352222001?text=Halo%2C%20saya%20tertarik%20untuk%20mendiskusikan%20lebih%20lanjut%20mengenai%20aplikasi%20HR%20yang%20Anda%20tawarkan.%20Apakah%20saya%20bisa%20mendapatkan%20informasi%20lebih%20detail%20atau%20jadwal%20untuk%20berdiskusi%20lebih%20lanjut%3F%20Terima%20kasih%21",
        disabled: false,
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
    footerNavs: [
      {
        label: BRAND_NAME,
        link: "https://distrostudio.com",
      },
    ],
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

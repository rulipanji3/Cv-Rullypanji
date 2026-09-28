export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: 'Web App' | 'Fullstack' | 'UI/UX' | 'Mobile';
  demoUrl: string;
  githubUrl: string;
  featured?: boolean;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  credentialUrl: string;
  skills: string[];
  icon: string;
  description?: string;
  pdfUrl?: string;
}

export interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools & DevOps';
  level: number; // 0 - 100
  icon: string;
  description: string;
}

export interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  badges: string[];
}

export const PERSONAL_INFO = {
  name: "Rully",
  fullName: "Rully Panji Mustiko Pamungkas",
  tagline: "Building digital cosmic experiences through clean code and modern aesthetics.",
  roles: [
    "Junior Developer",
    "Tech Enthusiast",
    "Frontend Explorer",
    "Creative Problem Solver"
  ],
  bio: "Halo! Saya adalah seorang Junior Developer dan Tech Enthusiast dengan antusiasme tinggi pada ekosistem web modern. Senang merancang antarmuka interaktif yang mulus, estetis, dan berperforma tinggi. Memiliki fondasi kuat dalam React, TypeScript, dan Tailwind CSS, serta selalu bersemangat menjelajahi inovasi teknologi baru di galaksi digital.",
  status: "Tersedia untuk Kolaborasi & Proyek Baru",
  location: "JL Brigjen Encung no 23, Indonesia",
  email: "rulipanji474@gmail.com",
  phone: "+62 858-1040-5551",
  avatar: "/profil2.jpg",
};



export const STATS_DATA = [
  {
    label: "Projects & Karya",
    value: "3+",
    subtext: "Web Apps & Fullstack Projects",
    icon: "Rocket"
  },

  {
    label: "Sertifikasi",
    value: "4",
    subtext: "MikroTik, Cisco CCNA & BNSP",
    icon: "Award"
  },

  {
    label: "Jam Menjelajah Kode",
    value: "1,200+",
    subtext: "Komitmen belajar & praktik",
    icon: "Clock"
  },
  {
    label: "Dedikasi & Rasa Ingin Tahu",
    value: "100%",
    subtext: "Siap beradaptasi & berkembang",
    icon: "Sparkles"
  }
];

export const EDUCATION_DATA: TimelineItem[] = [
  {
    id: "edu-1",
    title: "S1  Informatika",
    organization: "Universitas Nusa Mandiri",
    period: "2026 - Sekarang",
    description: "Mempelajari algoritma pemrograman, struktur data, rekayasa perangkat lunak, sistem basis data, dan kecerdasan buatan dengan fokus konsentrasi pada pengembangan web dan aplikasi modern.",
    badges: ["Algoritma & Struktur Data", "Web Programming", "Software Engineering"]
  },
  {
    id: "edu-2",
    title: " D3 Teknologi Komputer",
    organization: "Universitas Bina Sarana Informatika",
    period: "2022 - 2025",
    description: "Mempelajari algoritma pemrograman, Flowchart, Internet of Things (IoT).",
    badges: ["Top Graduate", "Mikrokontroler", "Arduino Ide", "ESP 8266"]
  },
  {
    id: "edu-3",
    title: "Sekolah Menengah Atas (SMA)",
    organization: "SMA Negeri 3 Purwokerto",
    period: "2012 - 2015",
    description: "Jalur pendidikan yang fokus mendalami ilmu eksakta, sains, dan matematika.",
    badges: ["Fisika", "Kimia", "Biologi"]
  }
];

export const EXPERIENCE_DATA: TimelineItem[] = [
  {
    id: "exp-1",
    title: "Sales Account Executive",
    organization: "PT Eka Mas Republik",
    period: "Maret 2026 - Juni 2026",
    description: "Bertanggung jawab dalam membangun dan memelihara hubungan profesional dengan pelanggan, menganalisis kebutuhan solusi konektivitas telekomunikasi, merancang strategi pemasaran produk layanan internet, serta mencapai target akuisisi klien dan pertumbuhan penjualan perusahaan.",
    badges: ["Account Management", "Client Relations", "B2B/B2C Sales", "Komunikasi & Negosiasi", "Telekomunikasi"]
  },
  {
    id: "exp-2",
    title: "IT Support (Magang)",
    organization: "Dinkominfo Kota Pekalongan",
    period: "Agustus 2024 - November 2024",
    description: "Melaksanakan tugas dukungan teknis teknologi informasi di lingkungan Dinas Komunikasi dan Informatika Kota Pekalongan, meliputi pemeliharaan perangkat keras dan komputer, troubleshooting jaringan lokal (LAN/WLAN), instalasi sistem operasi dan aplikasi, serta asistensi teknis operasional harian instansi.",
    badges: ["IT Support", "Troubleshooting Hardware & Jaringan", "Pemeliharaan Komputer", "Instalasi Sistem", "Dukungan Teknis Dinkominfo"]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "websitesekolahSD",
    title: "Website Sekolah & PPDB Online SDN 1 Suka Cita",
    description: "Platform web profil sekolah dasar modern dan sistem PPDB online multi-step terintegrasi dengan animasi 3D Three.js, manajemen berkas pendaftar, dan dashboard admin.",
    longDescription: "Aplikasi web institusi pendidikan fullstack berbasis Laravel dan Tailwind CSS v4 yang memadukan profil interaktif ramah anak dengan sistem PPDB (Penerimaan Peserta Didik Baru) online. Dilengkapi elemen animasi 3D interaktif Three.js, form pendaftaran multi-step wizard, validasi berkas otomatis, dashboard admin untuk verifikasi status seleksi siswa, serta desain sepenuhnya responsif di semua perangkat.",
    image: "/project-sekolah-sd.png",
    tags: ["Laravel", "Three.js", "Tailwind CSS", "MySQL", "Blade", "Vite"],
    category: "Fullstack",
    demoUrl: "https://github.com/rulipanji3/websitesekolahSD",
    githubUrl: "https://github.com/rulipanji3/websitesekolahSD",
    featured: true,
  },
  {
    id: "webmamamatcha",
    title: "Mamamatcha Gn Muria - Artisan Drink & Tea Bar",
    description: "Modern landing page untuk outlet minuman artisan matcha dan tea bar di Purwokerto dengan Signature Bento Grid, katalog menu interaktif, dan pemesanan WhatsApp.",
    longDescription: "Mamamatcha Gn Muria X Mustika Iced Tea & Shake adalah web landing page modern berbasis Laravel dan Tailwind CSS v4 yang dirancang khusus untuk brand minuman kekinian di area kampus Unsoed, Purwokerto. Menampilkan desain visual appetizing bernuansa hijau matcha dan warm beige, fitur interaktif Signature Bento Grid, filter menu dinamis dengan live search, ulasan Google Rating 5.0 bintang, integrasi Google Maps, serta formulir pemesanan langsung terhubung ke WhatsApp.",
    image: "/project-mamamatcha.png",
    tags: ["Laravel", "Tailwind CSS", "Blade", "Alpine.js", "PHP", "Vite"],
    category: "Web App",
    demoUrl: "https://github.com/rulipanji3/webmamamatcha",
    githubUrl: "https://github.com/rulipanji3/webmamamatcha",
    featured: true,
  },
  {
    id: "webrestorant",
    title: "WebRestorant - Warung Makan Mba Neni",
    description: "Website restoran berbasis Laravel untuk Warung Makan Mba Neni dengan fitur pemesanan, manajemen menu, dan sistem admin dashboard.",
    longDescription: "WebRestorant adalah aplikasi web restoran fullstack yang dibangun menggunakan Laravel (PHP) sebagai backend dan Blade templating untuk frontend. Fitur utama meliputi halaman depan modern dengan desain responsive, sistem pemesanan online, manajemen menu/restoran, dashboard admin, dan autentikasi pengguna. Proyek ini menunjukkan kemampuan dalam pengembangan web enterprise-grade dengan ekosistem Laravel.",
    image: "https://raw.githubusercontent.com/rulipanji3/webrestorant/main/hasil%201.png",
    tags: ["Laravel", "PHP", "MySQL", "Blade", "REST API", "Vite"],
    category: "Fullstack",
    demoUrl: "https://github.com/rulipanji3/webrestorant",
    githubUrl: "https://github.com/rulipanji3/webrestorant",
    featured: false,
  }
];


export const CERTIFICATES_DATA: CertificateItem[] = [
  {
    id: "mikrotik-mtcna",
    title: "MTCNA - MikroTik Certified Network Associate",
    issuer: "Mikrotīkls SIA (Latvia)",
    issueDate: "15 Jan 2025",
    credentialId: "2501NA2544",
    credentialUrl: "https://drive.google.com/file/d/1dD6cKWABGbFVuZ9a67RUozgeM-FQqyAO/view?usp=drive_link",
    pdfUrl: "/mikrotik_mtcna.pdf",
    skills: [
      "MikroTik RouterOS",
      "Routing & Subnetting",
      "Firewall & NAT Security",
      "Bandwidth Management (Queue)",
      "Wireless & Hotspot Setup",
      "Network Troubleshooting",
      "VPN & Tunneling"
    ],
    icon: "ShieldCheck",
    description: "Sertifikasi internasional dari Mikrotīkls SIA (Latvia) yang memvalidasi keahlian komprehensif dalam instalasi, konfigurasi, firewall filtering, manajemen bandwidth jaringan, serta pemecahan masalah perangkat MikroTik RouterOS & RouterBOARD."
  },
  {
    id: "bnsp-junior-network-admin",
    title: "Sertifikat Kompetensi: Network Administrator Muda",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP) & LSP UBSI",
    issueDate: "16 Agu 2024",
    credentialId: "61100 2522 5 0001784 2024",
    credentialUrl: "https://drive.google.com/file/d/1WkgdASx4dajGxQrcV_laNPIx18l8daBN/view?usp=drive_link",
    pdfUrl: "/sertifikat_kompetensi_bnsp.pdf",
    skills: [
      "Perancangan Pengalamatan Jaringan",
      "Pemasangan Jaringan Nirkabel",
      "Konfigurasi Switch Jaringan",
      "Routing Intra Autonomous System",
      "Routing Inter Autonomous System",
      "Standar SKKNI / BNSP"
    ],
    icon: "Award",
    description: "Sertifikasi profesi nasional berstandar SKKNI dari Badan Nasional Sertifikasi Profesi (BNSP) melalui LSP Universitas Bina Sarana Informatika. Memvalidasi kualifikasi kompeten sebagai Network Administrator Muda dalam merancang IP addressing, konfigurasi switch, jaringan nirkabel, serta routing intra dan inter autonomous system."
  },
  {
    id: "cisco-ccna-srwe",
    title: "CCNAv7: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    issueDate: "22 Jan 2024",
    credentialId: "CCNA-SRWE-2024",
    credentialUrl: "https://drive.google.com/file/d/1MpVe2YiQu-uGL17Z1CGZpBVhEM4FFnoJ/view?usp=drive_link",
    pdfUrl: "/cisco_ccna_srwe.pdf",
    skills: [
      "VLANs & Inter-VLAN Routing",
      "STP & EtherChannel Redundancy",
      "Wireless LAN Controller (WLC)",
      "Switch Port Security & Mitigation",
      "IPv4 & IPv6 Static Routing",
      "DHCPv4/DHCPv6 & FHRP"
    ],
    icon: "GitBranch",
    description: "Sertifikasi tingkat lanjut dari Cisco Networking Academy yang menguji kapabilitas implementasi VLAN & inter-VLAN routing, redundansi switch jaringan menggunakan STP dan EtherChannel, konfigurasi WLAN menggunakan Wireless Controller (WLC), switch security, serta routing statis IPv4 dan IPv6."
  },
  {
    id: "cisco-ccna-itn",
    title: "CCNAv7: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    issueDate: "24 Jul 2023",
    credentialId: "CCNA-ITN-2023",
    credentialUrl: "https://drive.google.com/file/d/16uxy79axqa9qGdLc-vT7-eEnsElLMmgr/view?usp=drive_link",
    pdfUrl: "/cisco_ccna_itn.pdf",
    skills: [
      "Network Architecture & Protocols",
      "IPv4 & IPv6 Addressing & Subnetting",
      "Cisco IOS Switches & Routers",
      "Ethernet & Data Link Layer",
      "OSI & TCP/IP Model",
      "Network Troubleshooting & Security"
    ],
    icon: "Layers",
    description: "Sertifikasi fundamental dari Cisco Networking Academy yang memvalidasi pemahaman arsitektur jaringan komputer, model referensi OSI dan TCP/IP, skema subnetting IPv4 & IPv6, konfigurasi awal perangkat router dan switch Cisco IOS, serta praktik dasar keamanan jaringan."
  }
];


export const TECH_STACK_DATA: TechItem[] = [
  // Frontend
  { name: "React", category: "Frontend", level: 90, icon: "Atom", description: "Hooks, Context, State Management, Reusable Component Architecture" },
  { name: "TypeScript", category: "Frontend", level: 82, icon: "FileCode2", description: "Strict typing, Interfaces, Generics, Type-safe development" },
  { name: "Tailwind CSS", category: "Frontend", level: 95, icon: "Palette", description: "Utility-first design, Responsive layout, Glassmorphism & Custom Themes" },
  { name: "JavaScript (ES6+)", category: "Frontend", level: 88, icon: "Cpu", description: "Async/Await, Promises, Event Loop, DOM Manipulation" },
  { name: "Framer Motion", category: "Frontend", level: 85, icon: "Zap", description: "Smooth transitions, Scroll animations, Gesture controls, LayoutId" },
  { name: "HTML5 & Semantic Web", category: "Frontend", level: 95, icon: "Code2", description: "Clean structure, Accessibility (ARIA), SEO best practices" },
  { name: "Modern CSS3", category: "Frontend", level: 90, icon: "Layout", description: "Flexbox, CSS Grid, Custom animations, Backdrop filters" },
  
  // Backend
  { name: "Node.js", category: "Backend", level: 75, icon: "Server", description: "Event-driven runtime, NPM ecosystem, Server-side scripts" },
  { name: "Express.js", category: "Backend", level: 78, icon: "Network", description: "Routing, Middleware, REST API endpoint architecture" },
  { name: "RESTful API", category: "Backend", level: 85, icon: "Globe", description: "HTTP methods, Status codes, JSON payloads, Postman testing" },
  
  // Database
  { name: "MongoDB", category: "Database", level: 72, icon: "Database", description: "NoSQL document collections, Mongoose ODM, Schema design" },
  { name: "MySQL / SQL", category: "Database", level: 75, icon: "Table", description: "Relational modeling, Joins, Indexing, Query optimization" },
  { name: "Firebase", category: "Database", level: 70, icon: "Flame", description: "Firestore, Authentication, Realtime Database, Hosting" },
  
  // Tools & DevOps
  { name: "Git & GitHub", category: "Tools & DevOps", level: 88, icon: "GitFork", description: "Version control, Branching workflows, PR review, Collaboration" },
  { name: "Vite", category: "Tools & DevOps", level: 90, icon: "Flame", description: "Fast HMR, Build optimization, Modern bundling" },
  { name: "VS Code", category: "Tools & DevOps", level: 95, icon: "Terminal", description: "Power user shortcuts, Extensions, Custom linting & formatting" },
  { name: "Figma", category: "Tools & DevOps", level: 80, icon: "PenTool", description: "Wireframing, UI prototyping, Asset export, Design handoff" },
  { name: "Vercel / Netlify", category: "Tools & DevOps", level: 85, icon: "Cloud", description: "CI/CD continuous deployment, Custom domains, Preview builds" }
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/rulipanji3",
    handle: "@rulipanji3",
    description: "Repositori proyek open source & eksperimen kode",
    icon: "Github",
    color: "#2c67ed"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rully-panji-mustiko-pamungkas-1b41a217a",
    handle: "Rully Panji Mustiko Pamungkas",
    description: "Jejaring profesional & rekam jejak karir",
    icon: "Linkedin",
    color: "#0a66c2"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/panji600/",
    handle: "@panji600",
    description: "Daily tech journey, tips coding & sharing seputar IT",
    icon: "Instagram",
    color: "#e1306c"
  },
  {
    name: "Email",
    url: "mailto:rulipanji474@gmail.com",
    handle: "rulipanji474@gmail.com",
    description: "Kirim pesan langsung untuk tawaran proyek atau kolaborasi",
    icon: "Mail",
    color: "#38bdf8"
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/6285810405551",
    handle: "+62 858-1040-5551",
    description: "Fast response via WhatsApp untuk konsultasi",
    icon: "MessageSquare",
    color: "#25d366"
  }
];


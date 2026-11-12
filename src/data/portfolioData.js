// Data utama portofolio — multibahasa (ID & EN)

export const uiTranslations = {
  id: {
    navProfile: 'Profil',
    navProjects: 'Hasil Proyek',
    navSkills: 'Kompetensi',
    navContact: 'Hubungi →',
    heroCtaProjects: 'Proyek ↓',
    heroEducation: 'Pendidikan: S1 Informatika',
    heroIndexAria: 'Fokus Kompetensi',
    heroPillar1Title: 'IT Support',
    heroPillar1Desc: 'Dapat melakukan troubleshooting os windows dan melakukan perakitan pc serta mengetahui spesifikasi setiap komponen nya.',
    heroPillar2Title: 'Network Engineer',
    heroPillar2Desc: 'Pembuatan topologi sederhana untuk simulasi 4 divisi perusahaan dengan melakukan konfigurasi dasar agar jaringan berjalan dengan lancar dan optimal.',
    heroPillar3Title: 'Game Developer',
    heroPillar3Desc: 'Pengembangan mekanik game pada karakter NPC dengan implementasi algoritma pathfinding di Godot Engine (Skripsi S1 Informatika).',
    hrBioTitle: 'Biodata Personal',
    hrBadge: 'PROFIL & NILAI TAMBAH',
    hrTitle: 'Kualifikasi & Fokus Peran',
    projectsBadge: 'KARYA & STUDI KASUS',
    projectsTitle: 'Proyek',
    projectFilterAria: 'Filter Kategori Proyek',
    viewGameDetail: 'Lihat Detail Game',
    viewNetworkDetail: 'Lihat Detail Topologi',
    skillsBadge: 'KOMPETENSI TEKNIS',
    skillsTitle: 'Spesifikasi & Teknologi',
    contactBadge: 'DISKUSI & KONTAK',
    contactTitle: 'Tertarik berdiskusi atau menjadwalkan sesi wawancara?',
    contactDesc: '{name} · Cilacap, Jawa Tengah — Terbuka untuk peran penuh waktu (Full-Time) pada bidang IT Support, Network, maupun Software Engineering.',
    contactCopyBtn: 'Salin Email ({email})',
    contactCopied: 'Tersalin: {email}',
    modalClose: 'Tutup ✕',
    modalGameInfo: 'Informasi Game',
    modalMechanics: 'Mekanisme Singkat',
    modalTopology: 'Alur Topologi',
    modalVlan: 'Pembagian VLAN',
    modalSpecs: 'Konfigurasi',
    modalLabelGameTitle: 'Nama Game',
    modalLabelGenre: 'Genre',
    modalLabelPlatform: 'Platform',
    modalLabelVisual: 'Visual',
    modalLabelAi: 'AI NPC',
  },
  en: {
    navProfile: 'Profile',
    navProjects: 'Projects',
    navSkills: 'Skills',
    navContact: 'Contact →',
    heroCtaProjects: 'Projects ↓',
    heroEducation: 'Education: B.S. in Computer Science',
    heroIndexAria: 'Core Focus Areas',
    heroPillar1Title: 'IT Support',
    heroPillar1Desc: 'Skilled in Windows OS troubleshooting, hardware diagnostics, custom PC assembly, and component specification analysis.',
    heroPillar2Title: 'Network Engineer',
    heroPillar2Desc: 'Designing enterprise network topologies with 4-department VLAN simulations and foundational routing for optimal performance.',
    heroPillar3Title: 'Game Developer',
    heroPillar3Desc: 'Developing game mechanics with autonomous NPC pathfinding algorithm implementations in Godot Engine (Bachelor\'s Thesis).',
    hrBioTitle: 'Personal Bio',
    hrBadge: 'PROFILE & VALUE',
    hrTitle: 'Qualifications & Core Roles',
    projectsBadge: 'SELECTED WORKS & CASE STUDIES',
    projectsTitle: 'Projects',
    projectFilterAria: 'Filter Project Categories',
    viewGameDetail: 'View Game Details',
    viewNetworkDetail: 'View Topology Details',
    skillsBadge: 'TECHNICAL COMPETENCIES',
    skillsTitle: 'Tech Stack & Capabilities',
    contactBadge: "LET'S CONNECT",
    contactTitle: 'Interested in discussing opportunities or scheduling an interview?',
    contactDesc: '{name} · Cilacap, Central Java — Open for full-time opportunities in IT Support, Network Engineering, and Software Development.',
    contactCopyBtn: 'Copy Email ({email})',
    contactCopied: 'Copied: {email}',
    modalClose: 'Close ✕',
    modalGameInfo: 'Game Information',
    modalMechanics: 'Mechanics Overview',
    modalTopology: 'Topology Flow',
    modalVlan: 'VLAN Segmentation',
    modalSpecs: 'Specifications',
    modalLabelGameTitle: 'Game Title',
    modalLabelGenre: 'Genre',
    modalLabelPlatform: 'Platform',
    modalLabelVisual: 'Visual',
    modalLabelAi: 'AI NPC',
  },
};

const commonProjectMedia = {
  proj0Img: '/Project1.png',
  proj1Img: '/Project2.png',
  proj2Img: '/Project3.png',
  ciscoPkt: '/10-20-2026.pkt',
};

export const portfolioDataId = {
  profileData: {
    brandName: 'Haidar Farhan Zaelani',
    statusBadge: 'Siap Kerja',
    heroChip: 'PORTOFOLIO REKAYASA SISTEM & PERANGKAT LUNAK',
    fullName: 'Haidar Farhan Zaelani',
    roleTitle: 'IT Support, Network, Game developer & Web developer',
    heroDescription:
      'Menangani diagnosa hardware & Software , arsitektur jaringan lokal sekaligus merancang aplikasi web full-stack dan game.',
    locationText: 'Cilacap, Jawa Tengah',
    scrollHintText: 'Scroll ke bawah',
    email: 'haidarfarhanzaelani@gmail.com',
    githubPrimary: 'https://github.com/Hafazacode',
    photoUrl: '/foto-profil.png',
  },

  personalBioData: [
    { label: 'Nama Lengkap', value: 'Haidar Farhan Zaelani' },
    { label: 'Tempat Lahir', value: 'Cilacap, Jawa Tengah' },
    { label: 'Umur', value: '22 Tahun' },
    { label: 'Pendidikan', value: 'S1 Informatika' },
    { label: 'Hobi & Minat', value: 'Merakit PC, Game Dev & Eksperimen Jaringan' },
    { label: 'Domisili', value: 'Cilacap, Jawa Tengah' },
  ],

  heroPinsData: [
    {
      id: 'pin0',
      tag: 'Zona 01 — Game Dev (RPG & Endless Runner)',
      title: 'Godot 4 · Endless Runner & RPG',
      description: 'Simulasi karakter RPG di lintasan 3-jalur yang otomatis berpindah lane & melompat menghindari rintangan.',
      style: { left: '6%', top: '54%' },
    },
    {
      id: 'pin1',
      tag: 'Zona 02 — Topologi Jaringan Cisco 3D',
      title: 'Konfigurasi Dasar',
      description:
        'Server-PT → Router ISP → Router Kantor → Core Switch 2960 yang memecah VLAN 10 (HRD), VLAN 20 (IT Support), VLAN 30 (Finance), dan VLAN 40 (Server DNS & DHCP).',
      style: { left: '50%', top: '12%', transform: 'translateX(-50%)' },
      isCenteredDesktop: true,
    },
    {
      id: 'pin2',
      tag: 'Zona 03 — Setup PC & Workstation',
      title: 'Rig PC, Terminal Kode & Web Dev',
      description: 'Meja kerja dengan PC hasil rakitan/diagnosa POST.',
      style: { right: '6%', top: '54%' },
    },
  ],

  hrSummaryData: [
    {
      label: 'Fokus Peran',
      title: 'IT Support · Network · Web dan Game Dev',
      description:
        'Siap ditempatkan pada posisi IT Support/Helpdesk, Network Staff, maupun Web/Game Developer.',
    },
    {
      label: 'Keahlian',
      title: 'Hardware, Software, Jaringan, Koding, dan Komunikasi',
      description:
        'Terbiasa memperbaiki dan memelihara device komputer, Konfigurasi dasar device jaringan, mampu mengembangkan website dan game , dan memiliki kemampuan menjelaskan hal teknis terkait teknologi kepada orang awam.',
    },
    {
      label: 'Latar Belakang',
      title: 'Lulusan S1 Informatika Amikom Yogyakarta',
      description:
        'Membuat skripsi dengan judul "Pengembangan Game Pixel 3D Menggunakan Metode GDLC Dengan Implementasi Pathfinding Pada Karakter NPC" dan mendapatkan ipk 3,86 dengan predikat cumlaude.',
    },
  ],

  projectCategories: [
    { key: 'all', label: 'Semua' },
    { key: 'game', label: 'Game' },
    { key: 'network', label: 'Jaringan' },
  ],

  projectsData: [
    {
      id: 0,
      categoryKey: 'game',
      category: 'Game Dev · Godot Engine',
      artType: 'gamedev',
      image: commonProjectMedia.proj0Img,
      title: 'Pengembangan Game Pixel 3D dengan Pathfinding NPC',
      shortDesc:
        'Game bervisual Pixel 3D di Godot Engine dengan implementasi NavMesh3d, NavAgent3d, algoritma A* Pathfinding pada karakter NPC.',
      badges: ['Godot Engine', 'GDScript', 'A* Pathfinding'],
      actionUrl: 'https://hafaza.itch.io/snack-apocalypse',
      actionText: 'Lihat di itch.io ↗',
      isDownload: false,
      gameDetails: {
        gameTitle: 'Snack Apocalypse',
        genre: 'RPG · Eksplorasi',
        platformEngine: 'PC (Windows)',
        perspectiveVisual: '3D Environment · 2D Pixel Art',
        coreAlgorithm: 'A* Pathfinding & NavMesh 3D',
        mechanicsSummary:
          'Pemain menjelajahi dunia Apocalypse untuk menyelesaikan objektif di setiap zona sambil menghindari dan menyerang NPC yang berpatroli dan mengejar secara otomatis.',
        mechanicsPoints: [
          'Gerak bebas menjelajah area 3D.',
          'NPC berpatroli, mendeteksi pemain, lalu mengejar dengan rute terpendek (A*).',
          'NPC otomatis menghindari tembok dan rintangan tanpa tersangkut.',
        ],
      },
    },
    {
      id: 1,
      categoryKey: 'network',
      category: 'Jaringan · Cisco Packet Tracer',
      artType: 'network',
      image: commonProjectMedia.proj1Img,
      title: 'Simulasi Topologi Jaringan Kantor 4 Divisi VLAN',
      shortDesc:
        'Topologi jaringan kantor di Cisco Packet Tracer: 2 Router 2911, Core Switch 2960, dan 4 segmen VLAN untuk HRD, IT Support, Finance, serta Server DNS/DHCP.',
      badges: ['Cisco Packet Tracer', 'VLAN & Trunking', 'Subnetting', 'DHCP & DNS'],
      actionUrl: commonProjectMedia.ciscoPkt,
      actionText: 'Download Topologi (.pkt) ↓',
      downloadFileName: '10-20-2026.pkt',
      isDownload: true,
      networkDetails: {
        summary:
          'Jaringan dibagi menjadi 4 VLAN agar trafik tiap divisi terpisah dan lebih aman. Semua divisi terhubung lewat Core Switch ke Router Kantor untuk komunikasi antar-VLAN dan akses ke ISP.',
        backbone: ['Server ISP', 'Router ISP', 'Router Kantor', 'Core Switch', '4 Switch VLAN'],
        vlanTable: [
          { vlanId: '10', division: 'HRD', subnet: '192.168.10.0/27', devices: '2 PC · 1 Laptop' },
          { vlanId: '20', division: 'IT Support', subnet: '192.168.20.0/27', devices: '4 PC' },
          { vlanId: '30', division: 'Finance', subnet: '192.168.30.0/27', devices: '2 PC · 1 Laptop · 1 Printer' },
          { vlanId: '40', division: 'Server', subnet: '192.168.40.0/28', devices: 'DNS Server · DHCP Server' },
        ],
        specs: [
          { label: 'Perangkat', value: '2× Router Cisco 2911 · 5× Switch Catalyst 2960' },
          { label: 'Routing', value: 'Inter-VLAN (Router-on-a-Stick, 802.1Q)' },
          { label: 'Layanan', value: 'DHCP otomatis (ip helper-address) & DNS' },
          { label: 'Pengujian', value: 'Ping & simulasi PDU — 0% packet loss' },
        ],
      },
    },
    {
      id: 2,
      categoryKey: 'game',
      category: 'Game Dev · Godot Engine',
      artType: 'gamedev',
      image: commonProjectMedia.proj2Img,
      title: 'Pengembangan Game Pixel 2D Endless Running dengan fitur rogue-like',
      shortDesc:
        'Game yang terinspirasi oleh game browser chrome dinosaurus dengan beberapa tambahan implementasi fitur.',
      badges: ['Godot Engine', 'GDScript', 'Roguelite'],
      actionUrl: 'https://hafaza.itch.io/fruit-quest',
      actionText: 'Lihat di itch.io ↗',
      isDownload: false,
      gameDetails: {
        gameTitle: 'Fruit Quest : Island Of Peril',
        genre: 'Endless Running · Roguelite',
        platformEngine: 'PC (Windows)',
        perspectiveVisual: 'Parallax · 2D Pixel Art',
        coreAlgorithm: 'Gacha System & Dynamic Difficulty Scaling',
        mechanicsSummary:
          'Pemain menghindari rintangan yang ada, terdapat peningkatan kemampuan ketika naik level, dan survive selama mungkin.',
        mechanicsPoints: [
          'Memilih 3 lane atas, tengah, bawah.',
          'Memilih 3 kemampuan ketika naik level',
          'Terdapat beberapa musuh yang dapat memberikan debuff dan damage ke player.',
        ],
      },
    },
  ],

  skillsData: [
    {
      category: 'IT Support',
      tags: ['Perakitan PC', 'Troubleshooting Hardware', 'Troubleshooting Software', 'Instalasi OS'],
    },
    {
      category: 'Network',
      tags: ['Cisco Packet Tracer', 'Subnetting', 'Troubleshooting Jaringan'],
    },
    {
      category: 'Full-Stack Web',
      tags: ['React.js', 'Node.js & Express', 'MySQL', 'Git & Vercel', 'HTML', 'CSS'],
    },
    {
      category: 'Game Development',
      tags: ['Godot Engine'],
    },
  ],
};

export const portfolioDataEn = {
  profileData: {
    brandName: 'Haidar Farhan Zaelani',
    statusBadge: 'Open to Work',
    heroChip: 'SYSTEMS & SOFTWARE ENGINEERING PORTFOLIO',
    fullName: 'Haidar Farhan Zaelani',
    roleTitle: 'IT Support, Network, Game Developer & Web Developer',
    heroDescription:
      'Handling hardware & software diagnostics, local network architecture, while developing full-stack web applications and games.',
    locationText: 'Cilacap, Central Java, Indonesia',
    scrollHintText: 'Scroll to explore',
    email: 'haidarfarhanzaelani@gmail.com',
    githubPrimary: 'https://github.com/Hafazacode',
    photoUrl: '/foto-profil.png',
  },

  personalBioData: [
    { label: 'Full Name', value: 'Haidar Farhan Zaelani' },
    { label: 'Place of Birth', value: 'Cilacap, Central Java' },
    { label: 'Age', value: '22 Years Old' },
    { label: 'Education', value: "B.S. in Computer Science" },
    { label: 'Hobbies & Interests', value: 'PC Building, Game Dev & Network Lab' },
    { label: 'Location', value: 'Cilacap, Central Java' },
  ],

  heroPinsData: [
    {
      id: 'pin0',
      tag: 'Zone 01 — Game Dev (RPG & Endless Runner)',
      title: 'Godot 4 · Endless Runner & RPG',
      description: 'RPG character simulation on a 3-lane track that dynamically shifts lanes and leaps over obstacles.',
      style: { left: '6%', top: '54%' },
    },
    {
      id: 'pin1',
      tag: 'Zone 02 — 3D Cisco Network Topology',
      title: 'Core Configuration',
      description:
        'Server-PT → ISP Router → Office Router → Core Switch 2960 segmenting VLAN 10 (HR), VLAN 20 (IT Support), VLAN 30 (Finance), and VLAN 40 (DNS & DHCP Server).',
      style: { left: '50%', top: '12%', transform: 'translateX(-50%)' },
      isCenteredDesktop: true,
    },
    {
      id: 'pin2',
      tag: 'Zone 03 — PC Setup & Workstation',
      title: 'PC Rig, Code Terminal & Web Dev',
      description: 'Custom workstation setup with assembled PC and verified POST diagnostics.',
      style: { right: '6%', top: '54%' },
    },
  ],

  hrSummaryData: [
    {
      label: 'Core Focus',
      title: 'IT Support · Network · Web & Game Dev',
      description:
        'Ready to contribute as IT Support/Helpdesk, Network Engineer/Staff, or Web/Game Developer.',
    },
    {
      label: 'Practical Skills',
      title: 'Hardware, Software, Networking, Coding & Communication',
      description:
        'Hands-on experience in PC hardware diagnostics & maintenance, foundational network device configuration, full-stack web and game development, plus communicating technical concepts clearly to non-technical stakeholders.',
    },
    {
      label: 'Academic Background',
      title: 'B.S. in Informatics — Amikom University Yogyakarta',
      description:
        'Authored undergraduate thesis titled "Development of a 3D Pixel Game Using GDLC Method with Pathfinding Implementation on NPC Characters", graduating with a 3.86 GPA (Cum Laude honors).',
    },
  ],

  projectCategories: [
    { key: 'all', label: 'All' },
    { key: 'game', label: 'Games' },
    { key: 'network', label: 'Networking' },
  ],

  projectsData: [
    {
      id: 0,
      categoryKey: 'game',
      category: 'Game Dev · Godot Engine',
      artType: 'gamedev',
      image: commonProjectMedia.proj0Img,
      title: '3D Pixel Game Development with NPC Pathfinding',
      shortDesc:
        '3D Pixel hybrid game in Godot Engine implementing NavMesh3D, NavigationAgent3D, and A* Pathfinding for autonomous NPCs.',
      badges: ['Godot Engine', 'GDScript', 'A* Pathfinding'],
      actionUrl: 'https://hafaza.itch.io/snack-apocalypse',
      actionText: 'View on itch.io ↗',
      isDownload: false,
      gameDetails: {
        gameTitle: 'Snack Apocalypse',
        genre: 'RPG · Exploration',
        platformEngine: 'PC (Windows)',
        perspectiveVisual: '3D Environment · 2D Pixel Art',
        coreAlgorithm: 'A* Pathfinding & NavMesh 3D',
        mechanicsSummary:
          'Players navigate an apocalyptic wasteland completing zone objectives while evading and combating autonomously patrolling and pursuing NPCs.',
        mechanicsPoints: [
          'Free-movement exploration across full 3D terrain.',
          'NPCs patrol, detect player line-of-sight, and pursue via shortest calculated path (A*).',
          'Dynamic collision avoidance preventing NPCs from getting stuck on obstacles.',
        ],
      },
    },
    {
      id: 1,
      categoryKey: 'network',
      category: 'Networking · Cisco Packet Tracer',
      artType: 'network',
      image: commonProjectMedia.proj1Img,
      title: 'Enterprise 4-VLAN Network Topology Simulation',
      shortDesc:
        'Simulated corporate network architecture in Cisco Packet Tracer: 2× Cisco 2911 Routers, Catalyst 2960 Core Switch, and 4 segmented VLANs for HR, IT Support, Finance, and DNS/DHCP Services.',
      badges: ['Cisco Packet Tracer', 'VLAN & Trunking', 'Subnetting', 'DHCP & DNS'],
      actionUrl: commonProjectMedia.ciscoPkt,
      actionText: 'Download Topology (.pkt) ↓',
      downloadFileName: '10-20-2026.pkt',
      isDownload: true,
      networkDetails: {
        summary:
          'Network segmented into 4 dedicated VLANs for department-level traffic isolation and enhanced security. All segments connect through a Core Switch to the Enterprise Router for inter-VLAN routing and upstream ISP connectivity.',
        backbone: ['ISP Server', 'ISP Router', 'Enterprise Router', 'Core Switch', '4 VLAN Switches'],
        vlanTable: [
          { vlanId: '10', division: 'HR Department', subnet: '192.168.10.0/27', devices: '2 PCs · 1 Laptop' },
          { vlanId: '20', division: 'IT Support', subnet: '192.168.20.0/27', devices: '4 PCs' },
          { vlanId: '30', division: 'Finance', subnet: '192.168.30.0/27', devices: '2 PCs · 1 Laptop · 1 Printer' },
          { vlanId: '40', division: 'Infrastructure', subnet: '192.168.40.0/28', devices: 'DNS Server · DHCP Server' },
        ],
        specs: [
          { label: 'Hardware', value: '2× Cisco 2911 Routers · 5× Catalyst 2960 Switches' },
          { label: 'Routing', value: 'Inter-VLAN (Router-on-a-Stick, 802.1Q)' },
          { label: 'Services', value: 'Automated DHCP (ip helper-address) & DNS' },
          { label: 'Verification', value: 'Ping verification & PDU simulation — 0% packet loss' },
        ],
      },
    },
    {
      id: 2,
      categoryKey: 'game',
      category: 'Game Dev · Godot Engine',
      artType: 'gamedev',
      image: commonProjectMedia.proj2Img,
      title: '2D Pixel Endless Runner with Roguelite Progression',
      shortDesc:
        'Fast-paced endless runner inspired by retro arcade mechanics, enhanced with multi-lane shifting and dynamic upgrade systems.',
      badges: ['Godot Engine', 'GDScript', 'Roguelite'],
      actionUrl: 'https://hafaza.itch.io/fruit-quest',
      actionText: 'View on itch.io ↗',
      isDownload: false,
      gameDetails: {
        gameTitle: 'Fruit Quest : Island Of Peril',
        genre: 'Endless Running · Roguelite',
        platformEngine: 'PC (Windows)',
        perspectiveVisual: 'Parallax · 2D Pixel Art',
        coreAlgorithm: 'Gacha Upgrade System & Dynamic Difficulty Scaling',
        mechanicsSummary:
          'Dodge procedural hazards, choose synergistic upgrades on level-up, and survive as long as possible in an intensifying environment.',
        mechanicsPoints: [
          '3-lane movement: top, center, bottom.',
          'Choose 1 of 3 skill upgrades upon leveling up.',
          'Diverse enemy behaviors introducing debuffs and tactical threat management.',
        ],
      },
    },
  ],

  skillsData: [
    {
      category: 'IT Support',
      tags: ['PC Assembly', 'Hardware Troubleshooting', 'Software Troubleshooting', 'OS Installation'],
    },
    {
      category: 'Network',
      tags: ['Cisco Packet Tracer', 'Subnetting & VLANs', 'Network Troubleshooting'],
    },
    {
      category: 'Full-Stack Web',
      tags: ['React.js', 'Node.js & Express', 'MySQL', 'Git & Vercel', 'HTML', 'CSS'],
    },
    {
      category: 'Game Development',
      tags: ['Godot Engine', 'GDScript'],
    },
  ],
};

export function getPortfolioData(lang = 'id') {
  return lang === 'en' ? portfolioDataEn : portfolioDataId;
}

// Fallback untuk backward compatibility
export const profileData = portfolioDataId.profileData;
export const personalBioData = portfolioDataId.personalBioData;
export const heroPinsData = portfolioDataId.heroPinsData;
export const hrSummaryData = portfolioDataId.hrSummaryData;
export const projectCategories = portfolioDataId.projectCategories;
export const projectsData = portfolioDataId.projectsData;
export const skillsData = portfolioDataId.skillsData;

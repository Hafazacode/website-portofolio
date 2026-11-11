// Data utama portofolio — ubah teks profil, daftar proyek, atau kontak dari sini

export const profileData = {
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
};

export const personalBioData = [
  { label: 'Nama Lengkap', value: 'Haidar Farhan Zaelani' },
  { label: 'Tempat Lahir', value: 'Cilacap, Jawa Tengah' },
  { label: 'Umur', value: '22 Tahun' },
  { label: 'Pendidikan', value: 'S1 Informatika' },
  { label: 'Hobi & Minat', value: 'Merakit PC, Game Dev & Eksperimen Jaringan' },
  { label: 'Domisili', value: 'Cilacap, Jawa Tengah' },
];

// Kartu info yang muncul waktu scroll di area 3D
export const heroPinsData = [
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
];

// Ringkasan kualifikasi di bagian profil
export const hrSummaryData = [
  {
    label: 'Fokus Peran',
    title: 'IT Support · Network · Web dan Game Dev',
    description:
      'Siap ditempatkan pada posisi IT Support/Helpdesk, Network Staff, maupun Web/Game Developer.',
  },
  {
    label: 'Keahlian Praktis',
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
];

// Daftar proyek & kategori filter
export const projectCategories = [
  { key: 'all', label: 'Semua' },
  { key: 'game', label: 'Game' },
  { key: 'network', label: 'Jaringan' },
];

export const projectsData = [
  {
    id: 0,
    categoryKey: 'game',
    category: 'Game Dev · Godot Engine',
    artType: 'gamedev',
    image: "/Project1.png",
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
    image: "/Project2.png",
    title: 'Simulasi Topologi Jaringan Kantor 4 Divisi VLAN',
    shortDesc:
      'Topologi jaringan kantor di Cisco Packet Tracer: 2 Router 2911, Core Switch 2960, dan 4 segmen VLAN untuk HRD, IT Support, Finance, serta Server DNS/DHCP.',
    badges: ['Cisco Packet Tracer', 'VLAN & Trunking', 'Subnetting', 'DHCP & DNS'],
    actionUrl: '/10-20-2026.pkt',
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
    image: "/Project3.png",
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
];

// Data untuk simulasi workbench
export const workbenchTabs = [
  {
    id: 'pane-cli',
    label: '1. Diagnosa PC & Jaringan (IT Support)',
    barTitle: 'Simulasi 01 — Troubleshooting Hardware & Jaringan',
  },
  {
    id: 'pane-godot',
    label: '2. Simulasi Rute AI (Godot 4)',
    barTitle: 'Simulasi 02 — Algoritma A* Pathfinding (Godot 4)',
  },
  {
    id: 'pane-api',
    label: '3. Cek Database Keuangan (Web)',
    barTitle: 'Simulasi 03 — REST API & Database MySQL',
  },
];

export const cliSimulations = {
  post: {
    buttonLabel: '1. Cek Kesehatan PC & RAM',
    badge: '✓ STATUS: HARDWARE NORMAL (PASS)',
    summary:
      'Motherboard mengeluarkan 1 beep pendek (POST OK). Keping RAM Dual-Channel bersih dan siap digunakan.',
    log: '[BIOS POST 0x00] DRAM Refresh OK — 16GB DDR4-3200 Dual-Channel\n[SUHU CPU] 37.4°C (Normal) | Tegangan PSU 12V: 12.04V (Stabil)',
  },
  vlan: {
    buttonLabel: '2. Cek Pembagian Jalur VLAN',
    badge: '✓ STATUS: JARINGAN VLAN AKTIF (0% LOSS)',
    summary:
      'Jalur jaringan terpisah dengan aman antara divisi Manajemen (VLAN 10), Lab (VLAN 20), dan Server (VLAN 30).',
    log: 'VLAN 10 (MGMT)   : Port Gi0/1 - Gi0/2 [ACTIVE]\nVLAN 20 (DEV)    : Port Gi0/3 - Gi0/4 [ACTIVE]\nPing Gateway 192.168.10.1 : 1.2ms (0% Packet Loss)',
  },
  ahk: {
    buttonLabel: '3. Jalankan Otomasi AutoHotkey',
    badge: '✓ STATUS: OTOMASI BERJALAN (14ms)',
    summary:
      'Script AutoHotkey mendeteksi tombol di layar secara otomatis dan mengeksekusi tugas berulang tanpa salah klik.',
    log: '[AHK ImageSearch] Target ditemukan pada koordinat (X: 842, Y: 516)\n[ControlClick] Eksekusi berhasil — Waktu respon rata-rata: 14.2ms',
  },
};

export const apiSimulations = {
  ledger: {
    buttonLabel: '1. Tampilkan Ringkasan Kas Bulanan',
    badge: '✓ STATUS: RESPON SERVER 200 OK (11ms)',
    summary: 'Data anggaran berhasil diambil dari database MySQL melalui Express REST API.',
    log: 'SELECT category, SUM(amount_idr) FROM transactions GROUP BY category;\n→ Operasional IT: Rp 1.450.000 (Aman di bawah batas anggaran)',
  },
  auth: {
    buttonLabel: '2. Cek Keamanan Login (JWT Auth)',
    badge: '✓ STATUS: RESPON SERVER 200 OK (11ms)',
    summary:
      'Token login pengguna terverifikasi aman menggunakan enkripsi JWT (JSON Web Token).',
    log: 'POST /api/v1/auth/verify-jwt → 200 OK\nUser: haidar | Role: Administrator | Sesi Aktif: 60 Menit',
  },
};

// Daftar keahlian per bidang
export const skillsData = [
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
];

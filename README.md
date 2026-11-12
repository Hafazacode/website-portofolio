## Cara Menjalankan Proyek di Komputer Lokal

1. Buka terminal di folder proyek ini, lalu jalankan server development:
   ```bash
   npm run dev
   ```
2. Buka link lokal yang muncul di terminal (biasanya `http://localhost:5173`).
3. Untuk membuat hasil *build* siap *deploy* (production):
   ```bash
   npm run build
   ```

## Panduan Maintenance Cepat (Untuk Edit Konten)

Anda tidak perlu mengutak-atik kode animasi 3D atau komponen jika hanya ingin:
- Mengubah judul/deskripsi Hero atau lokasi (`profileData`)
- Menambah/mengubah daftar proyek & isi modal (`projectsData`)
- Menambah/mengubah daftar skill (`skillsData`)

## Struktur Folder

```text
Landing_Page_Portofolio/
├── index.html                           # File HTML utama (entry point Vite)
├── package.json                         # Daftar dependency & script npm
├── vite.config.js                       # Konfigurasi Vite
└── src/
    ├── main.jsx                         # Inisialisasi React ke #root
    ├── App.jsx                          # Susunan halaman utama dari atas ke bawah
    ├── data/
    │   └── portfolioData.js             # PUSAT DATA (Edit teks & konten di sini)
    ├── styles/
    │   └── index.css                    # Seluruh styling CSS yang sudah dikelompokkan
    └── components/
        ├── Navbar.jsx                   # 1. Navigasi atas
        ├── Hero3DStory.jsx              # 2. Hero & Animasi Pulau 3D saat scroll
        ├── HrSummary.jsx                # 3. Ringkasan 3 Detik untuk HRD
        ├── ProjectsSection.jsx          # 4. Kartu 3 Proyek Pilihan + Ilustrasi SVG
        ├── ProjectModal.jsx             # 5. Popup Modal Detail Proyek
        ├── SkillsStrip.jsx              # 6. Daftar Keahlian (4 Kategori)
        └── ContactFooter.jsx            # 7. Banner Kontak & Tombol Copy Email
```

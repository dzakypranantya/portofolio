# Dzaky Portofolio

Website portofolio pribadi Dzaky Pranantya. Dibuat dengan React dan Vite untuk memperkenalkan latar pendidikan, minat di bidang teknologi dan desain, serta tautan ke profil karya.

## Menjalankan secara lokal

Pastikan Node.js dan npm sudah terpasang, lalu jalankan:

```bash
npm install
npm run dev
```

## Perintah yang tersedia

- `npm run dev` — menjalankan server pengembangan.
- `npm run build` — membuat build produksi di folder `dist`.
- `npm run preview` — melihat build produksi secara lokal.
- `npm run lint` — memeriksa kode dengan ESLint.

## Struktur sumber

```text
src/
├── components/       # Bagian UI dan komponen tampilan
├── data/             # Data navigasi, pendidikan, minat, dan tautan
├── hooks/            # Custom React hooks
├── utils/            # Fungsi bantu
├── Portfolio.jsx     # Komposisi halaman utama
└── main.jsx          # Entry point React
```

Konten seperti pendidikan dan tautan profil dapat diperbarui di `src/data/portfolioData.js`.

export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
export const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/jpg"];

export const NAV_ITEMS = [
  { name: "Beranda", href: "/#beranda" },
  { name: "Cara Kerja", href: "/#cara-kerja" },
  { name: "Coba Analisis", href: "/#coba-analisis" },
  { name: "Kontak", href: "/#kontak" },
];

export const HERO_STATS = [
  { value: "89%", label: "Akurasi Tes" },
  { value: "VGG16", label: "Transfer Learning" },
  { value: "4", label: "Kelas Penyakit" },
];

import type { LucideIcon } from "lucide-react";
import { Upload, Brain, FileText, CheckCircle } from "lucide-react";

export type HowItWorksStep = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    icon: Upload,
    title: "Unggah Gambar",
    description:
      "Pilih atau seret gambar daun padi yang ingin dianalisis. Pastikan gambar berkualitas baik dan fokus pada daun.",
  },
  {
    icon: Brain,
    title: "Analisis AI",
    description:
      "Sistem AI kami menggunakan teknologi deep learning VGG16 untuk menganalisis pola dan karakteristik penyakit pada daun.",
  },
  {
    icon: FileText,
    title: "Hasil Diagnosis",
    description:
      "Dapatkan hasil diagnosis dengan tingkat kepercayaan, beserta probabilitas untuk semua jenis penyakit yang dideteksi.",
  },
  {
    icon: CheckCircle,
    title: "Saran Penanganan",
    description:
      "Terima rekomendasi penanganan yang tepat berdasarkan jenis penyakit yang terdeteksi untuk tindakan preventif dan kuratif.",
  },
];


export type DiseaseAdviceGroup = { category: string; items: string[] };


export const DISEASE_TIPS: Record<string, DiseaseAdviceGroup[]> = {
  "Hawar Daun Bakteri (Bacterial Blight)": [
    {
      category: "Varietas & benih",
      items: [
        "Pilih varietas tahan (Code/Angke)",
        "Gunakan benih sehat/bersertifikat",
        "Perlakuan benih hipoklorit 1:300 selama 12–24 jam",
      ],
    },
    {
      category: "Budidaya & air",
      items: [
        "Tanam serempak; atur jarak (jajar legowo)",
        "Pengairan intermiten; hindari genangan",
        "Hindari pemotongan ujung bibit saat tanam",
      ],
    },
    {
      category: "Sanitasi & lahan",
      items: [
        "Bersihkan gulma, sisa tanaman, jerami, dan ratun",
        "Kelola saluran air agar tidak tergenang",
        "Lakukan pengolahan tanah secara optimal sebelum tanam",
      ],
    },
    {
      category: "Nutrisi & pengendalian",
      items: [
        "Pemupukan berimbang (tingkatkan K, batasi N berlebih)",
        "Jika intensitas >20% gunakan bakterisida sesuai anjuran",
        "Pertimbangkan agens hayati (mis. Corynebacterium)",
      ],
    },
  ],

  "Penyakit Blas (Blast)": [
    {
      category: "Varietas & benih",
      items: [
        "Pilih varietas tahan (Inpari 21/22/26, Inpago 4)",
        "Gunakan benih sehat/bersertifikat",
        "Pertimbangkan waktu tanam yang tepat",
      ],
    },
    {
      category: "Kultur teknis & sanitasi",
      items: [
        "Terapkan jajar legowo & atur jarak untuk sirkulasi",
        "Bersihkan sisa tanaman & lakukan rotasi",
        "Perbaiki olah tanah dan drainase lahan",
      ],
    },
    {
      category: "Pengendalian hayati",
      items: [
        "Agen hayati Trichoderma spp.",
        "Manfaatkan Bacillus subtilis bila tersedia",
        "Opsional: pestisida nabati (bawang/kunyit/lengkuas) aplikasi rutin",
      ],
    },
    {
      category: "Kimia & nutrisi",
      items: [
        "Fungisida sesuai rekomendasi (benomyl, mancozeb) bila gejala meluas",
        "Pupuk seimbang; hindari N berlebih",
        "Tambahkan unsur pendukung seperti kalium/silikon",
      ],
    },
  ],

  "Bercak Coklat (Brown Spot)": [
    {
      category: "Benih & lahan",
      items: [
        "Gunakan benih sehat/bersertifikat",
        "Perlakuan benih air panas ±50°C selama ±10 menit",
        "Perbaiki drainase & pengolahan tanah",
      ],
    },
    {
      category: "Kultur teknis & sanitasi",
      items: [
        "Sanitasi sisa tanaman terinfeksi",
        "Rotasi dengan komoditas non-padi",
        "Atur jarak tanam untuk kurangi kelembapan",
      ],
    },
    {
      category: "Hayati & silika",
      items: [
        "Gunakan Trichoderma spp. / Pseudomonas fluorescens",
        "Tambahkan silika/arang kalsium silikat pada tanah rendah Si",
        "Pantau gejala sejak fase anakan untuk tindakan dini",
      ],
    },
    {
      category: "Kimia & nutrisi",
      items: [
        "Fungisida selektif (mancozeb/propineb/azoxystrobin) bila perlu",
        "Hara seimbang; tingkatkan K & Si",
        "Batasi nitrogen berlebih untuk kurangi kerentanan",
      ],
    },
  ],

  "Virus Tungro (Tungro)": [
    {
      category: "Tanam serempak & waktu tanam",
      items: [
        "Laksanakan tanam serempak minimal ±40 ha",
        "Atur waktu tanam 30–45 hari sebelum puncak hujan",
        "Targetkan tanaman >45 HST saat puncak populasi wereng",
      ],
    },
    {
      category: "Varietas tahan",
      items: [
        "Gunakan varietas tahan wereng/virus sesuai wilayah",
        "Lakukan pergiliran varietas minimal tiap dua musim",
        "Ikuti rekomendasi kewilayahan (T1–T4 / Tukad Petanu dkk.)",
      ],
    },
    {
      category: "Vektor & sanitasi",
      items: [
        "Kendalikan wereng hijau berbasis pengamatan",
        "Sanitasi gulma/inang alternatif; cabut tanaman terinfeksi berat",
        "Gunakan jajar legowo untuk menekan penyebaran vektor",
      ],
    },
    {
      category: "Insektisida & monitoring",
      items: [
        "Gunakan insektisida sistemik sesuai anjuran (imidakloprid/tiametoksam/MIPC) bila perlu",
        "Monitoring wereng di pesemaian & fase muda (±3 MST)",
        "Integrasikan dengan kultur teknis; insektisida bukan satu-satunya solusi",
      ],
    },
  ],
};

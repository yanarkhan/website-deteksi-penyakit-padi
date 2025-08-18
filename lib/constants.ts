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

export const DISEASE_TIPS: Record<string, string> = {
  "Hawar Daun Bakteri (Bacterial Blight)":
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Gunakan varietas padi yang tahan dan perhatikan sanitasi lahan.",
  "Penyakit Blas (Blast)":
    "Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Atur jarak tanam dan gunakan fungisida sesuai anjuran.",
  "Bercak Coklat (Brown Spot)":
    "Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pastikan nutrisi tanaman, terutama kalium, tercukupi dengan baik.",
  "Virus Tungro (Tungro)":
    "Cras vestibulum bibendum augue. Praesent egestas leo in pede. Kendalikan populasi wereng hijau sebagai vektor utama penyebaran virus ini.",
};

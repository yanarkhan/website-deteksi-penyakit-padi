"use client";

import { motion } from "framer-motion";
import { Upload, Brain, FileText, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
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

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.18 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function HowItWorks() {
  return (
    <section id="cara-kerja" className="py-6 border-b bg-muted/20 lg:py-14">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mb-10 max-w-2xl text-center md:mb-12"
        >
          <h2 className="mb-3 text-2xl font-bold text-foreground md:text-3xl">
            Cara Kerja Sistem
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            Proses sederhana dalam 4 langkah untuk mendapatkan diagnosis akurat
            mengenai kondisi kesehatan daun padi Anda.
          </p>
        </motion.div>

        {/* Grid steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <Card className="h-full transition-shadow duration-300 hover:shadow-lg">
                <CardHeader className="pb-4 text-center">
                  <div className="mx-auto mb-4 w-fit rounded-full bg-brand/10 p-3">
                    {/* pastikan steps.icon adalah komponen ikon yang valid */}
                    <step.icon className="h-7 w-7 text-brand" />
                  </div>

                  <div className="mb-2">
                    <span className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand text-brand-foreground text-sm font-bold">
                      {index + 1}
                    </span>
                  </div>

                  <CardTitle className="text-base md:text-lg">
                    {step.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="text-center">
                  <p className="leading-relaxed text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

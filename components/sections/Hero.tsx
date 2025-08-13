"use client";

import { motion } from "framer-motion";
import { ArrowDown, Leaf, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToAnalysis = () => {
    const element = document.querySelector("#analisis");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="beranda"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-50"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="text-center space-y-8">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Sistem Deteksi Penyakit
              <br />
              <span className="text-brand">Daun Padi Berbasis AI</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Teknologi kecerdasan buatan canggih yang membantu petani
              mengidentifikasi penyakit pada tanaman padi dengan akurasi tinggi
              dalam hitungan detik.
            </p>
          </motion.div>

          {/* Feature Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center items-center space-x-8 py-8"
          >
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Zap className="h-5 w-5 text-yellow-500" />
              <span>Analisis Cepat</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Shield className="h-5 w-5 text-blue-500" />
              <span>Akurasi Tinggi</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Leaf className="h-5 w-5 text-brand" />
              <span>Ramah Petani</span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={scrollToAnalysis}
                className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-shadow"
              >
                Mulai Analisis Sekarang
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto pt-12"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">89%</div>
              <div className="text-sm text-muted-foreground">Akurasi Tes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">77%</div>
              <div className="text-sm text-muted-foreground">
                Akurasi Eksternal
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4</div>
              <div className="text-sm text-muted-foreground">
                Jenis Penyakit
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

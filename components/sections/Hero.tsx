"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, Leaf, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HERO_STATS } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="min-h-screen pt-16 flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-50 md:pt-8"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="text-center space-y-8">
          {/* Heading */}
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
              Teknologi kecerdasan buatan yang membantu petani mengidentifikasi
              penyakit pada daun padi dengan akurasi tinggi dalam hitungan
              detik.
            </p>
          </motion.div>
          {/* Fitur singkat */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center py-6 gap-6 md:gap-10"
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Zap className="h-5 w-5 text-yellow-500" />
              <span>Analisis Cepat</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-5 w-5 text-blue-500" />
              <span>Akurasi Tinggi</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Leaf className="h-5 w-5 text-brand" />
              <span>Ramah Petani</span>
            </div>
          </motion.div>
          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-shadow"
              >
                <Link
                  href="/#coba-analisis"
                  prefetch={false}
                  aria-label="Mulai Analisis Sekarang"
                >
                  Mulai Analisis Sekarang
                  <ArrowDown className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.dl
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto pt-10"
          >
            {HERO_STATS.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.0 + idx * 0.08 }}
                className="text-center"
              >
                <dd className="text-2xl md:text-3xl font-bold text-foreground">
                  {stat.value}
                </dd>
                <dt className="text-sm text-muted-foreground">{stat.label}</dt>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}

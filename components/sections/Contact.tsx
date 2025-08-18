"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="kontak"
      className="bg-muted/20 py-20 border-t scroll-mt-16"
      aria-label="Bagian Kontak"
    > 
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 md:min-h-[calc(100vh-4rem)] md:flex md:flex-col md:justify-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.25 }}
          className="mb-16 text-center md:mb-8"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Hubungi Kami
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Ada pertanyaan tentang sistem? Hubungi kami melalui kontak di bawah
            ini.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex"
          >
            <a
              href="mailto:ryan.arkhann@gmail.com"
              rel="noopener noreferrer"
              aria-label="Kirim email ke ryan.arkhann@gmail.com"
              className="group flex h-full w-full flex-col items-center justify-center gap-4 rounded-xl border bg-background p-8 shadow-sm transition-all duration-300 hover:border-brand/30 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 transition-colors group-hover:bg-brand/20">
                <Mail className="h-8 w-8 text-brand" />
              </span>
              <div className="text-center">
                <h3 className="mb-1 text-xl font-semibold">Email</h3>
                <p className="text-sm text-muted-foreground transition-colors group-hover:text-brand">
                  ryan.arkhann@gmail.com
                </p>
              </div>
            </a>
          </motion.div>

          {/* Telepon */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex"
          >
            <a
              href="tel:+6281398180588"
              rel="noopener noreferrer"
              aria-label="Hubungi nomor +62 813-9818-0588"
              className="group flex h-full w-full flex-col items-center justify-center gap-4 rounded-xl border bg-background p-8 shadow-sm transition-all duration-300 hover:border-brand/30 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 transition-colors group-hover:bg-brand/20">
                <Phone className="h-8 w-8 text-brand" />
              </span>
              <div className="text-center">
                <h3 className="mb-1 text-xl font-semibold">Telepon</h3>
                <p className="text-sm text-muted-foreground transition-colors group-hover:text-brand">
                  +62 813-9818-0588
                </p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

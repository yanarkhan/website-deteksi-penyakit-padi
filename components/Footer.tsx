"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer role="contentinfo" className="border-t bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center justify-between gap-6 py-8 sm:flex-row"
        >
          <p className="text-xs text-muted-foreground md:text-sm">
            <strong>&#169; {new Date().getFullYear()} Deteksi Padi</strong> -
            Hak Cipta Dilindungi oleh Ryan Arkhan 🚀
          </p>

          {/* Social Links */}
          <ul className="mt-0 flex justify-center gap-6 sm:mt-0 lg:justify-end">
            <li>
              <Link
                href="https://github.com/yanarkhan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Buka profil GitHub Ryan Arkhan (tab baru)"
                className="rounded text-muted-foreground transition-all duration-200 hover:scale-110 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
              >
                <Github className="h-6 w-6" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/ryanarkhan/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Buka profil LinkedIn Ryan Arkhan (tab baru)"
                className="rounded text-muted-foreground transition-all duration-200 hover:scale-110 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </footer>
  );
}

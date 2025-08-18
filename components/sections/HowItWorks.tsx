"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HowItWorks() {
  return (
    <section
      id="cara-kerja"
      aria-label="Bagian Cara Kerja"
      className="border-t bg-muted/20 scroll-mt-16 py-12"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="md:grid md:min-h-[calc(100vh-4rem)] md:place-content-center md:py-0">
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
              Proses sederhana dalam 4 langkah untuk mendapatkan diagnosis
              akurat mengenai kondisi kesehatan daun padi Anda.
            </p>
          </motion.div>

          {/* Steps */}
          <motion.ol
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {HOW_IT_WORKS_STEPS.map(({ icon: Icon, title, description }, i) => (
              <motion.li
                key={title}
                variants={item}
                className="h-full list-none"
              >
                <Card className="h-full transition-shadow duration-300 hover:shadow-lg">
                  <CardHeader className="pb-4 text-center">
                    <div className="mx-auto mb-4 w-fit rounded-full bg-brand/10 p-3">
                      <Icon className="h-7 w-7 text-brand" aria-hidden="true" />
                    </div>
                    <div className="mb-2">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand text-brand-foreground text-sm font-bold">
                        {i + 1}
                      </span>
                    </div>
                    <CardTitle className="text-base md:text-lg">
                      {title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                  </CardContent>
                </Card>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}

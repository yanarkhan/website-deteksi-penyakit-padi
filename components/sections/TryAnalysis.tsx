"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ImageUpload } from "@/components/analysis/ImageUpload";
import { ResultDisplay } from "@/components/analysis/ResultDisplay";
import { predictDisease } from "@/lib/api";
import { PredictResponse, isUnknown } from "@/lib/types";
import { toast } from "sonner";

export default function TryAnalysis() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<PredictResponse | null>(null);
  const [error, setError] = useState<string>("");

  const abortRef = useRef<AbortController | null>(null);

  const handleImageSelect = (file: File) => {
    setSelectedImage(file);
    setResult(null);
    setError("");
  };

  const handleImageRemove = () => {
    setSelectedImage(null);
    setResult(null);
    setError("");
  };

  const handlePredict = async () => {
    if (!selectedImage) return;

    setIsLoading(true);
    setError("");

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const response = await predictDisease(selectedImage, controller.signal);
      setResult(response);

      if (isUnknown(response)) {
        toast.warning(response.message);
      } else {
        toast.success("Prediksi berhasil.");
      }
    } catch (err: any) {
      const msg =
        err?.message ||
        "Terjadi kesalahan saat melakukan prediksi. Silakan coba lagi.";
      setError(msg);
      toast.error(msg);
      console.error("Prediction error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="coba-analisis"
      className="py-12 bg-background border-t scroll-mt-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Coba Analisis Penyakit
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Unggah gambar daun padi Anda dan dapatkan diagnosis penyakit secara
            instan dengan teknologi AI yang canggih dan akurat
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
          {/* Kiri: Upload */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex"
          >
            <Card className="h-full w-full flex flex-col min-h-[520px]">
              <CardHeader>
                <CardTitle>Unggah Gambar Daun</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ImageUpload
                  onImageSelect={handleImageSelect}
                  selectedImage={selectedImage}
                  onImageRemove={handleImageRemove}
                  isLoading={isLoading}
                />

                {selectedImage && !result && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6"
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        onClick={handlePredict}
                        disabled={isLoading}
                        size="lg"
                        className="w-full bg-brand text-brand-foreground hover:bg-brand/90"
                      >
                        {isLoading ? (
                          <>
                            <div className="mr-2 h-4 w-4 animate-spin rounded-full border-b-2 border-white" />
                            Menganalisis...
                          </>
                        ) : (
                          "Coba Analisa"
                        )}
                      </Button>
                    </motion.div>
                  </motion.div>
                )}

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 rounded-lg border border-destructive/20 bg-destructive/10 p-4"
                  >
                    <p className="text-sm text-destructive">{error}</p>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Kanan: Hasil */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex"
          >
            {result ? (
              <ResultDisplay result={result} />
            ) : (
              <Card className="h-full w-full flex items-center justify-center min-h-[520px]">
                <CardContent className="text-center">
                  <div className="space-y-4">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                      <div className="h-8 w-8 rounded-full bg-muted-foreground/20" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-medium text-muted-foreground">
                        Hasil Analisis
                      </h3>
                      <p className="max-w-xs text-md text-muted-foreground">
                        Unggah gambar daun padi dan klik &quot;Coba
                        Analisa&quot; untuk melihat hasil diagnosis
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

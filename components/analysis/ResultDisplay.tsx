"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ProbabilityChart } from "./ProbabilityChart";
import { PredictResponse, isUnknown } from "@/lib/types";
import { DISEASE_TIPS } from "@/lib/constants";

interface ResultDisplayProps {
  result: PredictResponse;
}

export function ResultDisplay({ result }: ResultDisplayProps) {
  const unrecog =
    isUnknown(result) || result.predicted_class === "Tidak Dikenali";
  const confidencePercent = Math.round(result.confidence * 100);
  const tips = !unrecog ? DISEASE_TIPS[result.predicted_label] ?? null : null;
  const message = isUnknown(result) ? result.message : null;

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };
  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="h-full w-full"
    >
      <Card className="h-full w-full flex flex-col">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {unrecog ? (
              <AlertCircle className="h-5 w-5 text-yellow-500" />
            ) : (
              <CheckCircle className="h-5 w-5 text-green-500" />
            )}
            <span>Hasil Deteksi</span>
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-1 space-y-4">
          {/* Nama Penyakit (Label) */}
          <motion.div variants={item} className="space-y-1">
            <div className="text-sm text-muted-foreground">
              Nama Penyakit (Label):
            </div>
            <div className="text-lg font-semibold">
              {result.predicted_label}
            </div>
            {message && (
              <p className="text-sm text-muted-foreground">{message}</p>
            )}
          </motion.div>

          {/* Confidence */}
          <motion.div variants={item} className="pt-1">
            <div className="mb-1 text-sm text-muted-foreground">
              Tingkat Kepercayaan: {confidencePercent}%
            </div>
            <Progress value={confidencePercent} />
          </motion.div>

          {/* Semua Probabilitas */}
          <motion.div variants={item} className="pt-2">
            <ProbabilityChart probabilities={result.all_probabilities} />
          </motion.div>

          {/* Saran Penanganan (bullet only) */}
          {tips?.length ? (
            <motion.div
              variants={item}
              className="rounded-lg border bg-muted/30 p-4"
            >
              <h2 className="mb-2 font-semibold text-foreground">
                Saran Penanganan :
              </h2>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {tips.map((group, i) => (
                  <li key={i}>
                    <div className="font-semibold text-foreground">
                      {group.category}:
                    </div>
                    <ul className="list-disc pl-5 space-y-1">
                      {group.items.map((sub, j) => (
                        <li key={j}>{sub}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </motion.div>
          ) : null}
        </CardContent>
      </Card>
    </motion.div>
  );
}

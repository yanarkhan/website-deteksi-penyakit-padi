'use client'

import { motion } from 'framer-motion'
import { AlertCircle, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { ProbabilityChart } from './ProbabilityChart'
import { PredictResponse, isUnknown } from '@/lib/types'
import { DISEASE_TIPS } from '@/lib/constants'

interface ResultDisplayProps {
  result: PredictResponse
}

export function ResultDisplay({ result }: ResultDisplayProps) {
  const unrecog = isUnknown(result) || result.predicted_class === 'Tidak Dikenali'
  const confidencePercent = Math.round(result.confidence * 100)
  const advice = !unrecog ? (DISEASE_TIPS[result.predicted_label] ?? null) : null
  const message = isUnknown(result) ? result.message : null

  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12 } } }
  const item = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.35 } } }

  return (
    <motion.div initial="hidden" animate="show" variants={container} className="h-full w-full">
      <Card className="h-full w-full flex flex-col">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {unrecog ? (
              <AlertCircle className="h-5 w-5 text-yellow-500" />
            ) : (
              <CheckCircle className="h-5 w-5 text-green-500" />
            )}
            <span>Hasil Prediksi</span>
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-1 space-y-4">
          {/* Nama Penyakit (Label) */}
          <motion.div variants={item} className="space-y-1">
            <div className="text-sm text-muted-foreground">Nama Penyakit (Label):</div>
            <div className="text-lg font-semibold">{result.predicted_label}</div>
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
            <div className="mb-2 text-sm font-medium">Semua Probabilitas</div>
            <ProbabilityChart probabilities={result.all_probabilities} />
          </motion.div>

          {/* Saran Penanganan */}
          {advice && (
            <motion.div variants={item} className="rounded-lg border bg-muted/30 p-4 text-sm text-muted-foreground">
              <div className="mb-1 font-semibold text-foreground">Saran Penanganan</div>
              <p>{advice}</p>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

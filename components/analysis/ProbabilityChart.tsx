'use client'

import { motion } from 'framer-motion'
import { Progress } from '@/components/ui/progress'

interface ProbabilityChartProps {
  probabilities: Record<string, number>
}

export function ProbabilityChart({ probabilities }: ProbabilityChartProps) {
  const entries = Object.entries(probabilities || {})
  const sorted = entries
    .sort(([, a], [, b]) => b - a)
    .map(([disease, probability], index) => ({
      disease,
      probability: probability * 100,
      index,
    }))

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const item = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  }

  if (sorted.length === 0) {
    return (
      <div className="text-sm text-muted-foreground">
        Tidak ada data probabilitas untuk ditampilkan.
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <h4 className="text-lg font-medium">Semua Probabilitas</h4>
      <motion.div variants={container} initial="hidden" animate="visible" className="space-y-3">
        {sorted.map(({ disease, probability, index }) => (
          <motion.div key={disease} variants={item} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">{disease}</span>
              <span className="text-sm text-muted-foreground">{probability.toFixed(1)}%</span>
            </div>
            <Progress value={probability} className="h-2" aria-label={`Probabilitas ${disease}`} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

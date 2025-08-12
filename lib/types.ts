export type AllProbabilities = Record<string, number>

export interface PredictSuccess {
  filename: string
  predicted_class: string
  predicted_label: string
  confidence: number
  all_probabilities: AllProbabilities
}

export interface PredictUnknown extends PredictSuccess {
  message: string
}

export type PredictResponse = PredictSuccess | PredictUnknown

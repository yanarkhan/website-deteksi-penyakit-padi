import { PredictResponse } from "./types"

const API_URL = process.env.NEXT_PUBLIC_API_URL as string

export async function predictImage(file: File, signal?: AbortSignal): Promise<PredictResponse> {
  const formData = new FormData()
  formData.append("file", file)

  const res = await fetch(API_URL, {
    method: "POST",
    body: formData,
    signal,
  })

  if (!res.ok) {
    const text = await res.text().catch(() => "")
    throw new Error(text || `Gagal memanggil API (status ${res.status})`)
  }

  const data = (await res.json()) as PredictResponse
  return data
}

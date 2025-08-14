import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatBytes(bytes: number, decimals = 2) {
  if (bytes === 0) return "0 Bytes"
  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
}

// ---- Validasi gambar (pakai di komponen upload) ----
export const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"] as const
export const MAX_IMAGE_SIZE = 5 * 1024 * 1024 // 5MB

export function validateImageFile(file: File): { isValid: boolean; error?: string } {
  if (!ALLOWED_IMAGE_TYPES.includes(file.type as any)) {
    return {
      isValid: false,
      error: "Format file tidak didukung. Harap gunakan format JPG, JPEG, atau PNG.",
    }
  }
  if (file.size > MAX_IMAGE_SIZE) {
    return {
      isValid: false,
      error: "Ukuran file terlalu besar. Maksimal 5MB.",
    }
  }
  return { isValid: true }
}

  import { PredictResponse } from "./types";

  export async function predictDisease(
    file: File,
    signal?: AbortSignal
  ): Promise<PredictResponse> {
    const endpoint = process.env.NEXT_PUBLIC_API_URL;
    if (!endpoint) {
      throw new Error(
        "ENV NEXT_PUBLIC_API_URL tidak terdefinisi. Tambahkan di .env.local"
      );
    }

    const fd = new FormData();
    fd.append("file", file);

    const res = await fetch(endpoint, { method: "POST", body: fd, signal });

    const text = await res.text();

    let data: unknown;
    try {
      data = JSON.parse(text);
    } catch {
      throw new Error(
        res.ok
          ? "Respons API tidak valid (bukan JSON)."
          : `Gagal (status ${res.status})`
      );
    }

    if (!res.ok) {
      const msg =
        (data as { message?: string; error?: string } | undefined)?.message ||
        (data as { message?: string; error?: string } | undefined)?.error ||
        `Gagal memanggil API (status ${res.status})`;
      throw new Error(msg);
    }

    return data as PredictResponse;
  }

"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Upload, X, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { validateImageFile, formatBytes } from "@/lib/utils";

interface ImageUploadProps {
  onImageSelect: (file: File) => void;
  selectedImage: File | null;
  onImageRemove: () => void;
  isLoading?: boolean;
}

export function ImageUpload({
  onImageSelect,
  selectedImage,
  onImageRemove,
  isLoading = false,
}: ImageUploadProps) {
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState<string>("");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!selectedImage) {
      setPreviewUrl(null);
      return;
    }
    const url = URL.createObjectURL(selectedImage);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [selectedImage]);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    setError("");
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFileSelect(files[0]);
    }
  };

  const handleFileSelect = (file: File) => {
    const validation = validateImageFile(file);
    if (!validation.isValid) {
      setError(validation.error || "File tidak valid");
      return;
    }
    setError("");
    onImageSelect(file);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) handleFileSelect(files[0]);
  };

  const openFileSelector = () => fileInputRef.current?.click();

  return (
    <div className="space-y-4">
      {/* Upload Area */}
      {!selectedImage && (
        <Card className="p-6">
          <div
            className={`relative cursor-pointer rounded-lg border-2 border-dashed p-8 text-center transition-colors ${
              dragActive
                ? "border-primary bg-primary/5"
                : "border-muted-foreground/25 hover:border-primary/50"
            }`}
            onClick={openFileSelector}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <div className="space-y-4">
              <div className="flex justify-center">
                <Upload className="h-12 w-12 text-muted-foreground" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Unggah Gambar Daun Padi</h3>
                <p className="text-sm text-muted-foreground">
                  Seret & lepas gambar di sini atau klik untuk memilih file
                </p>
                <p className="text-xs text-muted-foreground">
                  Format: JPG, JPEG, PNG • Maksimal: 5MB
                </p>
              </div>
              <Button variant="outline" disabled={isLoading}>
                <ImageIcon className="mr-2 h-4 w-4" />
                Pilih Gambar
              </Button>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept=".jpg,.jpeg,.png"
              onChange={handleFileInput}
              className="hidden"
            />
          </div>
        </Card>
      )}

      {/* Selected Image Preview */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Pratinjau Gambar</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onImageRemove}
                  disabled={isLoading}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="relative">
                <img
                  src={previewUrl ?? ""}
                  alt="Preview"
                  className="h-64 w-full rounded-lg border object-cover"
                  draggable={false}
                />
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/50">
                    <div className="text-center text-white">
                      <div className="mx-auto mb-2 h-8 w-8 animate-spin rounded-full border-b-2 border-white" />
                      <p className="text-sm">Menganalisis...</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="text-sm text-muted-foreground">
                <p>
                  <strong>Nama file:</strong> {selectedImage.name}
                </p>
                <p>
                  <strong>Ukuran:</strong> {formatBytes(selectedImage.size)}
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      )}

      {/* Error Message */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-lg border border-destructive/20 bg-destructive/10 p-4"
          role="alert"
          aria-live="polite"
        >
          <p className="text-sm text-destructive">{error}</p>
        </motion.div>
      )}
    </div>
  );
}

export type ImageUploadProps = {
  onImagesChange: (files: File[]) => void
  onError?: (message: string) => void
  maxImages?: number
  currentImageCount: number
  inputRef?: React.RefObject<HTMLInputElement | null>
}
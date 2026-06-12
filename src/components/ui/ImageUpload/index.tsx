import * as S from './styles'
import type { ImageUploadProps } from './types'

const VALID_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/gif',
  'image/webp'
]

const MAX_SIZE_BYTES = 5 * 1024 * 1024 // 5MB

const ImageUpload = ({
  onImagesChange,
  onError,
  maxImages = 4,
  currentImageCount,
  inputRef
}: ImageUploadProps) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])

    if (!files.length) return

    const validFiles = files.filter((file) => {
      if (!VALID_TYPES.includes(file.type)) {
        onError?.(`Arquivo "${file.name}" não é uma imagem válida`)
        return false
      }

      if (file.size > MAX_SIZE_BYTES) {
        onError?.(`Arquivo "${file.name}" excede o limite de 5MB`)
        return false
      }

      return true
    })

    const remaining = maxImages - currentImageCount
    const filesToAdd = validFiles.slice(0, remaining)

    if (validFiles.length > remaining) {
      onError?.(`Você pode adicionar no máximo ${maxImages} imagens`)
    }

    if (filesToAdd.length > 0) {
      onImagesChange(filesToAdd)
    }

    e.target.value = ''
  }

  const isDisabled = currentImageCount >= maxImages

  return (
    <S.HiddenInput
      ref={inputRef}
      type="file"
      accept={VALID_TYPES.join(',')}
      multiple
      onChange={handleFileChange}
      disabled={isDisabled}
    />
  )
}

export default ImageUpload
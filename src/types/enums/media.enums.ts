export const MediaType = {
  Image: 'image',
  Video: 'video',
  Document: 'document'
}

export type MediaType = (typeof MediaType)[keyof typeof MediaType]

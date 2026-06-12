export type GalleryItem = {
  url: string
  alt?: string
}

export type GalleryProps = {
  items: GalleryItem[]
  columns?: number
}
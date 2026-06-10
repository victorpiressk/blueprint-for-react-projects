export interface CreatePostRequest {
  content: string
  mediaIds?: string[]
  tagIds?: string[]
}

export interface UpdatePostRequest {
  content?: string
  mediaIds?: string[]
  tagIds?: string[]
}

export interface SearchParams {
  query: string
  page?: number
  limit?: number
  filters?: Record<string, string>
}

import type { SearchResult } from '../models/searchResult'

export interface SearchResponse {
  results: SearchResult[]
  total: number
  query: string
}

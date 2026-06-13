import { Search, X } from 'lucide-react'
import * as S from './styles'
import type { SearchBarProps } from './types'

const SearchBar = ({
  value,
  onChange,
  onSubmit,
  placeholder = 'Buscar'
}: SearchBarProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = value.trim()
    if (trimmed) {
      onSubmit?.(trimmed)
    }
  }

  const handleClear = () => {
    onChange('')
  }

  return (
    <S.SearchBarContainer>
      <S.SearchForm onSubmit={handleSubmit}>
        <S.SearchIcon>
          <Search size={16} strokeWidth={2} />
        </S.SearchIcon>

        <S.SearchInput
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />

        {value && (
          <S.ClearButton
            type="button"
            onClick={handleClear}
            aria-label="Limpar busca"
          >
            <X size={12} strokeWidth={2} />
          </S.ClearButton>
        )}
      </S.SearchForm>
    </S.SearchBarContainer>
  )
}

export default SearchBar
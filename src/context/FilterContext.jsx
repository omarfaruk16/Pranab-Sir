import { createContext, useContext, useState, useCallback } from 'react'

const FilterContext = createContext(null)

export function FilterProvider({ children }) {
  const [researchThemeFilter, setResearchThemeFilter] = useState(null)

  const setThemeFilter = useCallback((themeId) => {
    setResearchThemeFilter((prev) => (prev === themeId ? null : themeId))
  }, [])

  const clearFilter = useCallback(() => setResearchThemeFilter(null), [])

  return (
    <FilterContext.Provider value={{ researchThemeFilter, setThemeFilter, clearFilter }}>
      {children}
    </FilterContext.Provider>
  )
}

export function useFilter() {
  const ctx = useContext(FilterContext)
  if (!ctx) throw new Error('useFilter must be used within FilterProvider')
  return ctx
}

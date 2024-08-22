import { useContext } from "react"
import { FiltersContext } from "../context/filters"

export function useFilters () {

  const context = useContext(FiltersContext)

  if( context === undefined ) {
    throw new Error('FiltersContext fallando')
  }

  return context
}
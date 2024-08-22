import { useContext, useId } from "react"
import {Select, SelectItem} from "@nextui-org/react";
import { FiltersContext } from "../context/filters";

export function Filters () {
  
  const minPriceId = useId()
  const { filters, setFilters } = useContext(FiltersContext)

  const handleChangeMinPrice = (e) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: e.target.value
    }))
  }

  const handleChangeCategory = (e) => {
    setFilters(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }
   
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex gap-4 text-xl">
        <label htmlFor={minPriceId} >Precío</label>
        <input
          id={minPriceId} 
          type="range" 
          min={'0'}
          max={'200'}
          value={filters.minPrice}
          onChange={handleChangeMinPrice}  
        />
        <p>S/.{filters.minPrice}</p>
      </div>
      <div className="flex flex-col gap-4 w-52 m-2 p-2">
        <Select
          variant="underlined"
          placeholder="Selecciona una categoría"
          className="max-w-xs"
          onChange={handleChangeCategory}
        >
          <SelectItem key={'all'}>Todos</SelectItem>
          <SelectItem key={'beauty'}>Bellesa</SelectItem>
          <SelectItem key={'fragrances'}>Fragancias</SelectItem>
          <SelectItem key={'furniture'}>Muebles</SelectItem>
          <SelectItem key={'groceries'}>Comestibles</SelectItem>
        </Select>
      </div>
    </div>
  )
}
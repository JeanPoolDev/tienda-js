import { useContext } from "react"
import { CardContext } from "../context/card"


export function useCard () {
  
  const context = useContext(CardContext)
  
  
  
  return context
}
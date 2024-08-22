import { useContext } from "react"
import { CardContext } from "../context/card"


export function Footer () {
  
  const { card } = useContext(CardContext)

  
  return (
    <footer className="fixed bottom-1 left-1 bg-[#111] p-4 rounded-lg z-50">
      <div className="">
        Prueba tecnica Midudev ~  Jp
      </div>
    </footer>
  )
}
import { createContext, useState } from "react";


export const CardContext = createContext()


// eslint-disable-next-line react/prop-types
export const CardProvider = ({ children }) => {

  const [ card, setCard ] = useState([])
  
  const addToCard = product => {
    //* Encontrar el producto en el carrito
    const indexProduct = card.findIndex(item => item.id === product.id)

    //? Si el producto esta en el carrito
    if ( indexProduct >= 0 ) {
      const newProduct = structuredClone( card )
      newProduct[indexProduct].quantity += 1
      return setCard( newProduct )
    }

    //! si el producto no esta en el carrito

    setCard(prevState => [
      ...prevState,
      {
       ...product,
       quantity: 1 
      }
    ])
  }

  const removeFromCard = product => {
    setCard(prevState => prevState.filter(item => item.id !== product.id))
  }

  const clearCard = () => {
    setCard([])
  }

  return (
    <CardContext.Provider value={{
      card,
      addToCard,
      removeFromCard,
      clearCard
    }}>
      { children }
    </CardContext.Provider>
  )
}
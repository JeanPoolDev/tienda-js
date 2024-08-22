import { products as initialProducts} from './mocks/products.json'
import { useState } from 'react'
import { CardProducts } from './components/CardProducts'
import { useFilters } from './hooks/useFilters'
import { Filters } from './components/Filters'
import { Header } from './components/Header'
import { Card } from './components/Card'
import { CardProvider } from './context/card'
import { Footer } from './components/Footer'

function App() {
  
  const [products] = useState(initialProducts)

  const { filterProducts } = useFilters()

  const newProducts = filterProducts(products)

  return (

    <CardProvider>

        <Header />      

        <Card />

        <Filters />
        
        <CardProducts products={newProducts}/>

        <Footer />


    </CardProvider>
  )
}

export default App

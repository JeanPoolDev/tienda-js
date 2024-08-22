import { products as initialProducts} from './mocks/products.json'
import { useState } from 'react'
import { CardProducts } from './components/CardProducts'
import { useFilters } from './hooks/useFilters'
function App() {
  
  const [products] = useState(initialProducts)

  const { filterProducts } = useFilters()

  const newProducts = filterProducts(products)

  return (
    <>

      <header className="text-6xl text-center py-10">
        <h1>Tienda JP 🏪</h1>
      </header>

      <main>
        <section>
          <CardProducts products={newProducts}/>
        </section>
      </main>


    </>
  )
}

export default App

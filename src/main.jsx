import { FiltersProvider } from './context/filters.jsx'
import { createRoot } from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <NextUIProvider>
      <main className="dark text-foreground ">
        <App />
      </main>
    </NextUIProvider>
  </FiltersProvider>,
)

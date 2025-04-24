import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { BrowserRouter, Route } from 'react-router'
import { Routes } from 'react-router'
import PokemonInfo from './components/PokemonInfo.tsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='pokemon/:pokeId' element={<PokemonInfo />}></Route>
      </Routes>
    </BrowserRouter>

    <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
  </QueryClientProvider>
)

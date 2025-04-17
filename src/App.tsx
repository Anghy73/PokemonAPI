import { useEffect, useState } from 'react'
import './App.css'
import { fecthPokemons } from './services/fecthPokemons'
// import { Pokemon } from './components/Pokemon'
import { PokemonsResults } from './types'
import { Logo } from './components/Logo'
import { ListPokemons } from './components/ListPokemons'

import { Loader } from './components/Loader'

function App() {

  const [pokemons, setPokemons] = useState<PokemonsResults[]>([])

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const [currentPage, setCurrentPage] = useState(0)


  useEffect(() => {
    setIsLoading(true)
    setError(false)

    fecthPokemons({ offsetValue: currentPage, limitValue: 10 })
      .then(res => {
        setPokemons(() => {
          if (currentPage !== 0) {
            return pokemons.concat(res.results)
          }
          return res.results
        })
      })
      .catch(err => {
        console.log(err);
        setError(err)
      }).finally(() => {
        setIsLoading(false)
      })
  }, [currentPage])

  console.log(pokemons);


  return (
    <>
      <Logo></Logo>
      {pokemons.length > 0 && <ListPokemons pokemons={pokemons}></ListPokemons>}
      {isLoading ?
        <Loader></Loader>
        :
        <button onClick={() => setCurrentPage(prev => prev + 10)} style={{ transition: 'all 200ms ease-in-out' }} className="w-full bg-transparent border-2 border-[#282828] p-3 rounded-md hover:border-amber-300 cursor-pointer shadow-lg hover:shadow-amber-300 max-w-[200px] mt-25 mb-20 hover:text-amber-300 font-semibold text-lg">Load More ...</button>
      }
    </>
  )
}

export default App
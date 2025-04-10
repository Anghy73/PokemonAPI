import { useEffect, useState } from 'react'
import './App.css'
import { fecthPokemons } from './services/fecthPokemons'
import { Pokemon } from './components/Pokemon'



function App() {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fecthPokemons({ offsetValue: 0, limitValue: 10 })
      .then(res => setPokemons(res.results))
  }, [])

  return (
    <>
      <h1 className='text-cyan-500 font-bold title'>PokemonAPIv2</h1>
      {
        pokemons.map(pokemon => (
          <Pokemon key={pokemon.name} pokemon={pokemon}></Pokemon>
        ))
      }
    </>
  )
}

export default App

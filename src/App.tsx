import { useEffect, useState } from 'react'
import './App.css'
import { fecthPokemons } from './services/fecthPokemons'
// import { Pokemon } from './components/Pokemon'
import { PokemonsResults } from './types'
import { Logo } from './components/Logo'
import { ListPokemons } from './components/ListPokemons'

function App() {

  const [pokemons, setPokemons] = useState<PokemonsResults[]>([])

  useEffect(() => {
    fecthPokemons({ offsetValue: 0, limitValue: 25 })
      .then(res => setPokemons(res.results))
  }, [])

  // console.log(pokemons);


  return (
    <>
      {/* <Logo></Logo> */}
      <ListPokemons pokemons={pokemons}></ListPokemons>
    </>
  )
}

export default App
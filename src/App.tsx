import { useEffect, useState } from 'react'
import './App.css'
import { fecthPokemons } from './services/fecthPokemons'
// import { Pokemon } from './components/Pokemon'
import { PokemonsResults } from './types'
import { CardPokemon } from './components/CardPokemon'
import { Logo } from './components/Logo'



function App() {

  // const [pokemons, setPokemons] = useState<PokemonsResults[]>([])

  // useEffect(() => {
  //   fecthPokemons({ offsetValue: 0, limitValue: 10 })
  //     .then(res => setPokemons(res.results))
  // }, [])

  // console.log(pokemons);


  return (
    <>
      <Logo></Logo>
      {/* <h1 className='text-cyan-500 font-bold text-4xl title'>PokemonAPIv2</h1> */}
      <div className='flex justify-center items-center gap-5 w-full h-full mt-30'>
        <CardPokemon></CardPokemon>
        <CardPokemon></CardPokemon>
        <CardPokemon></CardPokemon>
      </div>
      {/* {
        pokemons.map(pokemon => (
          <Pokemon key={pokemon.name} pokemonURL={pokemon.url}></Pokemon>
        ))
      } */}
    </>
  )
}

export default App

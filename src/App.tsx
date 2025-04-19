import { useEffect, useState } from 'react'
import './App.css'
import { fecthPokemons, fetchAllPokemons } from './services/fecthPokemons'
// import { Pokemon } from './components/Pokemon'
import { PokemonsResultsTypes, PokemonsResults } from './types'
import { Logo } from './components/Logo'
import { ListPokemons } from './components/ListPokemons'

import { Loader } from './components/Loader'
import { ListTypesFilter } from './components/ListTypesFilter'

import { fecthPokemonType } from "./services/fecthPokemons"
import { PokemonNameFilter } from './components/PokemonNameFilter'


function App() {
  const [pokemons, setPokemons] = useState<PokemonsResults[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)


  const [pokemonsTypes, setPokemonsTypes] = useState<PokemonsResultsTypes[]>([])
  const [typeNumber, setTypeNumber] = useState<number | null>(null)

  const [currentPage, setCurrentPage] = useState(0)

  const [pokemonsFilterName, setPokemonsFilterName] = useState<PokemonsResults[]>([])
  const [pokemonName, setPokemonName] = useState<string>('')
  console.log(pokemonsFilterName);

  const [allPokemons, setAllPokemons] = useState([])
  useEffect(() => {
    fetchAllPokemons()
      .then(async res => await res.json())
      .then(res => setAllPokemons(res.results))
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    console.log(pokemonName);
    const matchPokemon = allPokemons.filter(poke => poke.name.startsWith(pokemonName))
    // console.log(matchPokemon);
    if (pokemonName.trim() == '') {
      return setPokemonsFilterName([])
    }

    setPokemonsFilterName(matchPokemon)
  }, [pokemonName])


  useEffect(() => {
    // setIsLoading(true)
    // setError(false)

    if (typeNumber == 0 || typeNumber == null) {
      return setPokemonsTypes([])
    }

    // if (typeNumber == ) return

    fecthPokemonType(typeNumber)
      .then(res => setPokemonsTypes(res.pokemon))
      .catch(err => {
        // setError(err)
        console.log(err)
      })
    // .finally(() => setIsLoading(false))
  }, [typeNumber])

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
        setError(err)
        console.log(error);
      }).finally(() => {
        setIsLoading(false)
      })
  }, [currentPage])


  const handlePokemonsFilterName = (name: React.SetStateAction<string>) => {
    setPokemonName(name)
  }

  const handleTypeNumber = (num: React.SetStateAction<number | null>) => {
    setTypeNumber(num)
  }

  return (
    <>
      <Logo></Logo>


      <div className='flex justify-between items-center gap-30 mt-30'>
        <ListTypesFilter updateTypeNumber={handleTypeNumber}></ListTypesFilter>
        <PokemonNameFilter updatePokemonsFilterName={handlePokemonsFilterName}></PokemonNameFilter>
      </div>

      {typeof (typeNumber) == 'number' && pokemonsTypes.length == 0 && isLoading == false ? <p className='mt-20 font-bold text-3xl'>No hay pokemons</p> : (pokemonsTypes.length > 0 && pokemonName == '') ? <ListPokemons pokemons={pokemonsTypes}></ListPokemons> : pokemonsFilterName.length > 0 ? <ListPokemons pokemons={pokemonsFilterName} ></ListPokemons> : <ListPokemons pokemons={pokemons} ></ListPokemons>}

      {isLoading ?
        <Loader></Loader>
        :
        (pokemonsTypes.length > 0 || pokemonsFilterName.length > 0 || typeof (typeNumber) == 'number') ? null : <button onClick={() => setCurrentPage(prev => prev + 10)} style={{ transition: 'all 200ms ease-in-out' }} className="w-full bg-transparent border-2 border-[#282828] p-3 rounded-md hover:border-amber-300 cursor-pointer shadow-lg hover:shadow-amber-300 max-w-[200px] mt-25 mb-20 hover:text-amber-300 font-semibold text-lg">Load More ...</button>
      }
    </>
  )
}

export default App
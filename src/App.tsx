import './App.css'
import { fecthPokemons } from './services/fecthPokemons'
import { PokemonsResults } from './types'
import { Logo } from './components/Logo'
import { ListPokemons } from './components/ListPokemons'

import { Loader } from './components/Loader'

import { Filters } from './components/Filters'
import { useInfiniteQuery } from '@tanstack/react-query'
import { usePokemonsStore } from './store/usePokemons'


function App() {

  const { isLoading, data, fetchNextPage } = useInfiniteQuery<{ pokemons: PokemonsResults[], nextPage: string}>({
    queryKey: ['pokemons'],
    queryFn: ({ pageParam }: { pageParam: number }) => fecthPokemons({  offset: pageParam, limitValue: 15 }),
    getNextPageParam: (lastPage) => lastPage.nextPage,
    refetchOnWindowFocus: false,
  })

  const pokemons: PokemonsResults[] = data?.pages?.flatMap(page => page.pokemons) ?? []


  const pokemonsFilterType = usePokemonsStore(state => state.pokemonsFilterType)
  const typeIsLoading = usePokemonsStore(state => state.typeIsLoading)
  const pokemonType = usePokemonsStore(state => state.pokemonTypeNumber)
  const pokemonName = usePokemonsStore(state => state.pokemonName)
  // console.log(pokemonsFilterType);
  // console.log(pokemonType);

  // const matchPokemons = usePokemonsStore(state => state.matchPokemons)
  // console.log(matchPokemons);

  // const pokemonName = usePokemonsStore(state => state.pokemonName)
  // const allPokemons = usePokemonsStore(state => state.allPokemons)
  const matchPokemons = usePokemonsStore(state => state.matchPokemons)

  // console.log(matchPokemons);
  

  // const matchPokemon = allPokemons.filter(poke => poke.name.startsWith(pokemonName))
  // console.log(matchPokemon);
  


  




  
  
  // const updatePokemons = usePokemonsStore(state => state.updatePokemons)
  // updatePokemons(fetchPokemons)
  
  // const pokemons = usePokemonsStore(state => state.pokemons)


  // const [pokemons, setPokemons] = useState<PokemonsResults[]>([])
  // const [isLoading, setIsLoading] = useState(false)
  // const [error, setError] = useState(false)


  // const [pokemonsTypes, setPokemonsTypes] = useState<PokemonsResultsTypes[]>([])
  // console.log(pokemonsTypes);
  
  // const [typeNumber, setTypeNumber] = useState<number | null>(null)

  // const [currentPage, setCurrentPage] = useState(0)

  // const [pokemonsFilterName, setPokemonsFilterName] = useState<PokemonsResults[]>([])
  // const [pokemonName, setPokemonName] = useState<string>('')
  // console.log(pokemonsFilterName);

  // const [allPokemons, setAllPokemons] = useState<PokemonsResults[]>([])
  // useEffect(() => {
  //   fetchAllPokemons()
  //     .then(async res => await res.json())
  //     .then(res => setAllPokemons(res.results))
  //     .catch(err => console.log(err))
  // }, [])

  // useEffect(() => {
  //   console.log(pokemonName);
  //   const matchPokemon = allPokemons.filter(poke => poke.name.startsWith(pokemonName))
  //   if (pokemonName.trim() == '') {
  //     return setPokemonsFilterName([])
  //   }

  //   setPokemonsFilterName(matchPokemon)
  // }, [pokemonName])


  // useEffect(() => {
  //   // setIsLoading(true)
  //   // setError(false)

  //   if (pokemonType == 0 || pokemonType == null) {
  //     return setPokemonsTypes([])
  //   }

  //   // if (pokemonType == ) return

  //   fecthPokemonType(pokemonType)
  //     .then(res => setPokemonsTypes(res.pokemon))
  //     .catch(err => {
  //       // setError(err)
  //       console.log(err)
  //     })
  //   // .finally(() => setIsLoading(false))
  // }, [pokemonType])

  // useEffect(() => {
  //   setIsLoading(true)
  //   setError(false)

  //   fecthPokemons({ offsetValue: currentPage, limitValue: 10 })
  //     .then(res => {
  //       setPokemons(() => {
  //         if (currentPage !== 0) {
  //           return pokemons.concat(res.results)
  //         }
  //         return res.results
  //       })
  //     })
  //     .catch(err => {
  //       setError(err)
  //       console.log(error);
  //     }).finally(() => {
  //       setIsLoading(false)
  //     })
  // }, [currentPage])


  // const handlePokemonsFilterName = (name: React.SetStateAction<string>) => {
  //   setPokemonName(name)
  // }

  // const handleTypeNumber = (num: React.SetStateAction<number | null>) => {
  //   setTypeNumber(num)
  // }

  console.log(pokemonName);
  

  return (
    <>
      <Logo></Logo>

      <Filters></Filters>

      { typeIsLoading && <Loader></Loader> }

      { pokemonType == null && matchPokemons.length > 0 && <ListPokemons pokemons={matchPokemons}></ListPokemons> }

      { pokemonsFilterType.length == 0 && typeof pokemonType == 'number' && <p className='max-w-xl m-auto p-4 mt-20 rounded-2xl border-2 border-amber-600'>No hay pokemones de este tipo por el momento</p> }

      { pokemonsFilterType.length > 0 && pokemonType != null && <ListPokemons pokemons={pokemonsFilterType}></ListPokemons>}

      { pokemons.length > 0 && pokemonType == null && pokemonName == '' && <ListPokemons pokemons={pokemons}></ListPokemons>}

      { isLoading && <Loader></Loader> }

      { pokemonType == null && pokemonName == '' && <button onClick={() => fetchNextPage()} style={{ transition: 'all 200ms ease-in-out' }} className="w-full bg-transparent border-2 border-[#282828] p-3 rounded-md hover:border-amber-300 cursor-pointer shadow-lg hover:shadow-amber-300 max-w-[200px] mt-25 mb-20 hover:text-amber-300 font-semibold text-lg">Load More ...</button> }



      {/* { !isLoading && pokemonType != null && pokemonsFilterType.length == 0 &&  } */}

      {/* {typeof (typeNumber) == 'number' && pokemonsTypes.length == 0 && isLoading == false ? <p className='mt-20 font-bold text-3xl'>No hay pokemons</p> : (pokemonsTypes.length > 0 && pokemonName == '') ? <ListPokemons pokemons={pokemonsTypes}></ListPokemons> : pokemonsFilterName.length > 0 ? <ListPokemons pokemons={pokemonsFilterName} ></ListPokemons> : <ListPokemons pokemons={pokemons} ></ListPokemons>} */}

        {/* { isLoading ? <Loader></Loader> : <button onClick={() => fetchNextPage()} style={{ transition: 'all 200ms ease-in-out' }} className="w-full bg-transparent border-2 border-[#282828] p-3 rounded-md hover:border-amber-300 cursor-pointer shadow-lg hover:shadow-amber-300 max-w-[200px] mt-25 mb-20 hover:text-amber-300 font-semibold text-lg">Load More ...</button> } */}

        {/* {isLoading ?
        : */}
        {  }
        {/* (pokemonsTypes.length > 0 || pokemonsFilterName.length > 0 || typeof (typeNumber) == 'number') ? null : <button onClick={() => setCurrentPage(prev => prev + 10)} style={{ transition: 'all 200ms ease-in-out' }} className="w-full bg-transparent border-2 border-[#282828] p-3 rounded-md hover:border-amber-300 cursor-pointer shadow-lg hover:shadow-amber-300 max-w-[200px] mt-25 mb-20 hover:text-amber-300 font-semibold text-lg">Load More ...</button> */}
      {/* } */}
    </>
  )
}

export default App
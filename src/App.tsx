import './App.css'
import { useInfiniteQuery } from '@tanstack/react-query'

import { fecthPokemons } from './services/fecthPokemons'
import { usePokemonsStore } from './store/usePokemons'
import { PokemonsResults } from './types'

import { ListPokemons } from './components/ListPokemons'
import { Loader } from './components/Loader'
import { Filters } from './components/Filters'
import { MainPokemonInfo } from './components/MainPokemonInfo'


import venusaurIMG from './assets/img/venusaur.png'


function App() {
  const { isLoading, data, fetchNextPage } = useInfiniteQuery<{ pokemons: PokemonsResults[], nextPage: string }>({
    queryKey: ['pokemons'],
    queryFn: ({ pageParam }: { pageParam: number }) => fecthPokemons({ offset: pageParam, limitValue: 15 }),
    getNextPageParam: (lastPage) => lastPage.nextPage,
    refetchOnWindowFocus: false,
  })

  const pokemons: PokemonsResults[] = data?.pages?.flatMap(page => page.pokemons) ?? []

  const pokemonsFilterType = usePokemonsStore(state => state.pokemonsFilterType)
  const typeIsLoading = usePokemonsStore(state => state.typeIsLoading)
  const pokemonType = usePokemonsStore(state => state.pokemonTypeNumber)
  const pokemonName = usePokemonsStore(state => state.pokemonName)
  const matchPokemons = usePokemonsStore(state => state.matchPokemons)

  const pokemonsFilterGender = usePokemonsStore(state => state.pokemonsFilterGender)
  const gender = usePokemonsStore(state => state.gender)
  const genderIsLoading = usePokemonsStore(state => state.genderIsLoading)





  const mainPokemons = [
    {
      name: 'Venusaur',
      colorbg1: '#00ff00',
      colorbg2: '#00ffaa',
      img: venusaurIMG,
      type: [
        {
          slot: 1,
          type: {
            name: "grass",
            url: "..."
          }
        },
        {
          slot: 2,
          type: {
            name: "poison",
            url: "..."
          }
        }
      ],
      info: 'The plant blooms when it is absorbing solarenergy. It stays on the move to seek sunlight. The flower on its back catches the suns rays. The sunlight is then absorbed and used for energy. By spreading the broad petals of its flower and catching the suns rays, it fills its body with power. It is able to convert sunlight into energy. As aresult, it is more powerful in the summertime. As it warms it self and absorbs the sunlight, its flower petals release a pleasant fragrance.',
      id: 1
    },
    {
      name: 'Venusaur',
      colorbg1: '#00ff00',
      colorbg2: '#00ffaa',
      img: venusaurIMG,
      type: [
        {
          slot: 1,
          type: {
            name: "grass",
            url: "..."
          }
        },
        {
          slot: 2,
          type: {
            name: "poison",
            url: "..."
          }
        }
      ],
      info: 'The plant blooms when it is absorbing solarenergy. It stays on the move to seek sunlight. The flower on its back catches the suns rays. The sunlight is then absorbed and used for energy. By spreading the broad petals of its flower and catching the suns rays, it fills its body with power. It is able to convert sunlight into energy. As aresult, it is more powerful in the summertime. As it warms it self and absorbs the sunlight, its flower petals release a pleasant fragrance.',
      id: 1
    },
    {
      name: 'Venusaur',
      colorbg1: '#00ff00',
      colorbg2: '#00ffaa',
      img: venusaurIMG,
      type: [
        {
          slot: 1,
          type: {
            name: "grass",
            url: "..."
          }
        },
        {
          slot: 2,
          type: {
            name: "poison",
            url: "..."
          }
        }
      ],
      info: 'The plant blooms when it is absorbing solarenergy. It stays on the move to seek sunlight. The flower on its back catches the suns rays. The sunlight is then absorbed and used for energy. By spreading the broad petals of its flower and catching the suns rays, it fills its body with power. It is able to convert sunlight into energy. As aresult, it is more powerful in the summertime. As it warms it self and absorbs the sunlight, its flower petals release a pleasant fragrance.',
      id: 1
    }

  ]


  return (
    <>
      <header className='w-screen h-[90vh] overflow-hidden rounded-bl-[100px] rounded-br-[100px]'>
        <div className='bg-red-500 w-full relative'>
          <MainPokemonInfo arrMainPokemons={mainPokemons}></MainPokemonInfo>
        </div>
      </header>

      <main className='max-w-7xl flex justify-center items-center flex-col m-auto'>
        <Filters></Filters>
        {typeIsLoading || genderIsLoading && <Loader></Loader>}

        {pokemonType == null && matchPokemons.length > 0 && <ListPokemons pokemons={matchPokemons}></ListPokemons>}

        {!genderIsLoading && pokemonType == null && pokemonName == '' && pokemonsFilterGender.length > 0 && gender != '' && <ListPokemons pokemons={pokemonsFilterGender}></ListPokemons>}

        {pokemonsFilterType.length == 0 && typeof pokemonType == 'number' && !isLoading && !typeIsLoading && <p className='max-w-xl m-auto p-4 mt-20 rounded-2xl border-2 border-amber-600'>No hay pokemones de este tipo por el momento</p>}

        {pokemonsFilterType.length > 0 && pokemonType != null && !typeIsLoading && <ListPokemons pokemons={pokemonsFilterType}></ListPokemons>}

        {pokemons.length > 0 && pokemonType == null && pokemonName == '' && gender == '' && <ListPokemons pokemons={pokemons}></ListPokemons>}

        {isLoading && <Loader></Loader>}

        {pokemonType == null && pokemonName == '' && gender == '' && <button onClick={() => fetchNextPage()} style={{ transition: 'all 200ms ease-in-out' }} className="w-full bg-transparent border-2 border-[#282828] p-3 rounded-md hover:border-amber-400 cursor-pointer shadow-lg hover:shadow-amber-400 max-w-[200px] mt-25 mb-20 hover:text-amber-400 font-semibold text-lg">Load More ...</button>}
      </main>

    </>
  )
}

export default App
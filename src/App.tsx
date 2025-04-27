import './App.css'
import { useInfiniteQuery } from '@tanstack/react-query'

import { fecthPokemons } from './services/fecthPokemons'
import { usePokemonsStore } from './store/usePokemonsStore'
import { PokemonsResults } from './types'

import { ListPokemons } from './components/ListPokemons'
import { Loader } from './components/Loader'
import { Filters } from './components/Filters'

import { BsBackpack2 } from "react-icons/bs";

import venusaurIMG from './assets/img/venusaur.png'
import charizardIMG from './assets/img/charizard.png'
import blastoiseIMG from './assets/img/blastoise.png'
import SlidePokemonsMain from './components/SlidePokemonsMain'
import { Link } from 'react-router'

import { Toaster } from 'sonner'

function App() {
  const { isLoading, data, fetchNextPage } = useInfiniteQuery<{ pokemons: PokemonsResults[], nextPage: number }>({
    queryKey: ['pokemons'],
    queryFn: ({ pageParam = 0 }) => fecthPokemons({ offset: pageParam as number, limitValue: 15 }),
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialPageParam: 0,
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
      colorbg1: '#009262',
      colorbg2: '#00523D',
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
      info: 'The plant blooms when it is absorbing solarenergy. It stays on the move to seek sunlight. The flower on its back catches the suns rays. The sunlight is then absorbed and used for energy. By spreading the broad petals of its flower and catching the suns rays, it fills its body with power. It is able to convert sunlight into energy. As aresult, it is more powerful in the summertime. As it warms it self and absorbs the sunlight, its flower petals release.',
      id: 3
    },
    {
      name: 'Charizard',
      colorbg1: '#ff6700',
      colorbg2: '#fb3035',
      img: charizardIMG,
      type: [
        {
          slot: 1,
          type: {
            name: "fire",
            url: "..."
          }
        },
        {
          slot: 2,
          type: {
            name: "flying",
            url: "..."
          }
        }
      ],
      info: 'Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally. When expelling a blast of super hot fire, the red flame at the tip of its tail burns more intensely. If CHARIZARD be comes furious, the flame at the tip of its tail flares up in a whitish-blue color. Breathing intense, hot flames, it can melt almost anything. Its breath inflicts terrible pain on enemies. Breathing intense, hot flames, it can melt almost anything.',
      id: 6
    },
    {
      name: 'Blastoise',
      colorbg1: '#2882ff',
      colorbg2: '#00b6dc',
      img: blastoiseIMG,
      type: [
        {
          slot: 1,
          type: {
            name: "water",
            url: "..."
          }
        }
      ],
      info: 'A brutal POKéMON with pressurized water jets on its shell. They are used for high speed tackles. Once it takes aim at its enemy, it blasts out water with even more force than a fire hose. It deliberately makes itself heavy so it can with stand the recoil of the water jets it fires. The rocket cannons on its shell fire jets of water capable of punching holes through thick steel. It firmly plants its feet on the ground before shooting water from the jets on its back.',
      id: 9
    }
  ]

  return (
    <div className='relative'>
      <Toaster></Toaster>
      <Link to='/favPage'>
        <div className='fixed top-10 right-10 flex justify-center items-center w-15 h-15 border-4 border-[#282828] rounded-2xl z-10 text-3xl text-[#282828] hover:text-amber-400 hover:border-amber-400'><BsBackpack2 /></div>
      </Link>
      <header className='flex justify-center items-center m-auto max-w-[2000px] overflow-hidden rounded-bl-[100px] rounded-br-[100px] bg-transparent'>
        <SlidePokemonsMain arrMainPokemons={mainPokemons}></SlidePokemonsMain>
      </header>

      <main className='max-w-7xl md:px-10 flex justify-start items-center flex-col m-auto min-h-[110vh]'>
        <Filters></Filters>

        {typeIsLoading && <Loader></Loader>}
        {genderIsLoading && <Loader></Loader>}

        {pokemonType == null && matchPokemons.length > 0 && <ListPokemons pokemons={matchPokemons}></ListPokemons>}

        {matchPokemons.length == 0 && pokemonName != '' && !isLoading && !typeIsLoading && <p className='max-w-3xl m-auto p-4 mt-50 text-2xl rounded-2xl border-2 border-amber-600'>There are no Pokémon with that name at the moment.</p>}

        {!genderIsLoading && pokemonType == null && pokemonName == '' && pokemonsFilterGender.length > 0 && gender != '' && <ListPokemons pokemons={pokemonsFilterGender}></ListPokemons>}

        {pokemonsFilterType.length == 0 && typeof pokemonType == 'number' && !isLoading && !typeIsLoading && <p className='max-w-3xl m-auto p-4 mt-50 text-2xl rounded-2xl border-2 border-amber-600'>There are no pokemon of this type at the moment.</p>}

        {pokemonsFilterType.length > 0 && pokemonType != null && !typeIsLoading && <ListPokemons pokemons={pokemonsFilterType}></ListPokemons>}

        {!typeIsLoading && pokemons.length > 0 && pokemonType == null && pokemonName == '' && gender == '' && <ListPokemons pokemons={pokemons}></ListPokemons>}

        {isLoading && <Loader></Loader>}

        {pokemonType == null && pokemonName == '' && gender == '' && !isLoading && !typeIsLoading && !genderIsLoading && <button onClick={() => fetchNextPage()} style={{ transition: 'all 200ms ease-in-out' }} className="w-full bg-transparent border-2 border-[#282828] p-3 rounded-md hover:border-amber-400 cursor-pointer shadow-lg hover:shadow-amber-400 max-w-[200px] mt-25 mb-20 hover:text-amber-400 font-semibold text-lg">Load More ...</button>}
      </main>
    </div>
  )
}

export default App
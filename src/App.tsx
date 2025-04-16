import { useEffect, useState } from 'react'
import './App.css'
import { fecthPokemons } from './services/fecthPokemons'
// import { Pokemon } from './components/Pokemon'
import { PokemonsResults } from './types'
import { Logo } from './components/Logo'
import { ListPokemons } from './components/ListPokemons'


import imgLoad from './assets/img/nofound.png'

function App() {

  const [pokemons, setPokemons] = useState<PokemonsResults[]>([])

  useEffect(() => {
    fecthPokemons({ offsetValue: 0, limitValue: 25 })
      .then(res => setPokemons(res.results))
  }, [])

  // console.log(pokemons);


  return (
    <>
      <Logo></Logo>
      <ListPokemons pokemons={pokemons}></ListPokemons>
      <div className='mt-20 flex flex-col justify-center items-center relative cursor-pointer'>
        <img className='max-w-[100px]' src={imgLoad} alt="" />
        <p className='absolute top-3/4'>Cargar Más...</p>
      </div>
    </>
  )
}

export default App
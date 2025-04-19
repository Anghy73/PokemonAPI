import { useState } from "react"
import { useFilterName } from "../hooks/useFilterName"
import { PokemonsResults } from "../types"
import { useDebounce } from "use-debounce"

export const PokemonNameFilter = ({ updatePokemonsFilterName }: { updatePokemonsFilterName: React.Dispatch<React.SetStateAction<string>>}) => {

  // const [ value ] = useDebounce(pokemonName, 1000)
  // const { matchPokemon } = useFilterName({ pokemonName: value })

  // updatePokemonsFilterName(matchPokemon)

  // const handleSearchPokemon = () => {
  //   setPokemonName('pika')
  // }
  // console.log(matchPokemon);

  const [name, setName] = useState('')

  const handleChangeName = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchInput = e.target.value
    setName(searchInput)
    
    updatePokemonsFilterName(searchInput)
  }
  

  return (
    <>
      <div className="flex flex-col items-start gap-2 w-full">
        <h3 className="font-semibold text-2xl pl-4">Búsqueda por Nombre</h3>
        <form className="w-full flex justify-between items-center gap-2 hover:border-amber-300 h-18 rounded-xl border-2 border-[#282828]">
          <input onChange={handleChangeName} value={name} className="outline-0 w-full h-full pl-3" type="text" placeholder="Pikachu..." />
          {/* <button type="button" onClick={handleSearchPokemon} className="font-bold cursor-pointer px-3 h-full">Buscar</button> */}
        </form>
      </div>
    </>
  )
}
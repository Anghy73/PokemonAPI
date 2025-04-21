import { useQuery } from "@tanstack/react-query"
import { fetchAllPokemons } from "../services/fecthPokemons"
import { usePokemonsStore } from "../store/usePokemons"
import { useEffect, useState } from "react"
import { useDebounce } from "use-debounce"

export const PokemonNameFilter = () => {
  const setAllPokemons = usePokemonsStore(state => state.setAllPokemons)
  const setPokemonName = usePokemonsStore(state => state.setPokemonName)
  const pokemonName = usePokemonsStore(state => state.pokemonName)
  const setPokemonType = usePokemonsStore(state => state.setPokemonType)

  const [name, setName] = useState('')
  const [value] = useDebounce(name, 500)

  const { data } = useQuery({
    queryKey: ['allPokemons'],
    queryFn: () => fetchAllPokemons()
  })

  const allPokemons = data ?? []

  useEffect(() => {
    setAllPokemons(allPokemons)
  }, [data])

  useEffect(() => {
    setPokemonName(value.toLocaleLowerCase())
  }, [value])

  const handleChangeName = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchInput = e.target.value
    setName(searchInput)
  }


  return (
    <>
      <div className="flex flex-col items-start gap-2 w-full max-w-xl">
        <h3 className="font-semibold text-2xl pl-4">Búsqueda por Nombre</h3>
        <form className="w-full max-w-xl flex justify-between items-center gap-2 hover:border-amber-300 h-18 rounded-xl border-2 border-[#282828]">
          <input onChange={handleChangeName} value={name} className="outline-0 w-full h-full pl-3" type="text" placeholder="Pikachu..." />
          {/* <button type="button" onClick={handleSearchPokemon} className="font-bold cursor-pointer px-3 h-full">Buscar</button> */}
        </form>
      </div>
    </>
  )
}
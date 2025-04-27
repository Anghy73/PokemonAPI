import { useQuery } from "@tanstack/react-query"
import { fetchAllPokemons } from "../services/fecthPokemons"
import { usePokemonsStore } from "../store/usePokemonsStore"
import { useEffect, useState } from "react"
import { useDebounce } from "use-debounce"

export const PokemonNameFilter = () => {
  const setAllPokemons = usePokemonsStore(state => state.setAllPokemons)
  const setPokemonName = usePokemonsStore(state => state.setPokemonName)
  const setPokemonType = usePokemonsStore(state => state.setPokemonType)
  const setGender = usePokemonsStore(state => state.setGender)

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
    setGender('')
    setPokemonType(null)
  }

  return (
    <>
      <div className="flex flex-col items-start gap-2 w-full">
        <h3 className="font-semibold text-xl md:text-2xl pl-4">Name</h3>
        <form className="w-full flex justify-between items-center gap-2 hover:border-amber-400 h-18 rounded-xl border-2 border-[#282828] max-w-[500px] focus-within:border-amber-400">
          <input onChange={handleChangeName} value={name} className="outline-0 w-full h-full pl-3" type="text" placeholder="Pikachu..." />
        </form>
      </div>
    </>
  )
}
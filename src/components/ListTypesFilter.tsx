import { useEffect, useState } from "react"
import { Species } from "../types"
import { MdFilterAltOff } from "react-icons/md"
import { fecthPokemonsTypes } from "../services/fecthPokemons"
import { usePokemonsStore } from "../store/usePokemons"
import { Type } from "./Type"

export const ListTypesFilter = () => {
  const setPokemonType = usePokemonsStore(state => state.setPokemonType)
  const setGender = usePokemonsStore(state => state.setGender)
  const [types, setTypes] = useState<Array<Species>>([])

  useEffect(() => {
    fecthPokemonsTypes()
      .then(res => setTypes(res.results))
      .catch(err => console.log(err))
  }, [])

  const handleNoneTypes = () => {
    setGender('')
    setPokemonType(null)
  }

  return (
    <div className="flex flex-col items-start gap-2 w-full">
      <h3 className="font-semibold text-xl md:text-2xl pl-4">Types</h3>

      <div className="container-snap flex justify-start items-center gap-2 w-full max-w-[500px] overflow-x-scroll snap-x p-3 py-4 rounded-xl border-2 border-[#282828] h-18">
        <div onClick={handleNoneTypes} className="text-2xl cursor-pointer shadow hover:shadow-white rounded-full p-2 bg-[#00000055]">
          <MdFilterAltOff></MdFilterAltOff>
        </div>
        {
          types.map(type => (
            <Type key={type.name} typeName={type.name}></Type>
          ))
        }
      </div>
    </div>
  )
}
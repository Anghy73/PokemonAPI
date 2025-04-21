import { useEffect, useState } from "react"
import { defineType } from "../utilities/defineType"
import { Species } from "../types"
import { MdFilterAltOff } from "react-icons/md"
import { defineTypeNumber } from "../utilities/defineTypeNumber"
import { fecthPokemonsTypes } from "../services/fecthPokemons"
import { usePokemonsStore } from "../store/usePokemons"


const Type = ({ typeName }: { typeName: string }) => {

  const updatePokemonsFilterType = usePokemonsStore(state => state.updatePokemonsFilterType)
  const setPokemonType = usePokemonsStore(state => state.setPokemonType)
  const [isHoverActive, setIsHoverActive] = useState(false)

  const handleMouseOn = () => {
    setIsHoverActive(true)
  }

  const handleMouseOff = () => {
    setIsHoverActive(false)
  }

  const handleFilterType = () => {
    const typeNumber = defineTypeNumber(typeName)
    setPokemonType(typeNumber)
    updatePokemonsFilterType(typeNumber)
    
    console.log('hi');
    console.log(typeName);
  }

  return (
    <button
      onClick={handleFilterType}
      onMouseEnter={handleMouseOn}
      onMouseLeave={handleMouseOff}
      style={isHoverActive ? { boxShadow: `0 4px 30px ${defineType({ type: typeName }).color}4f, 0 0 10px ${defineType({ type: typeName }).color}3f inset` } : {}}
      className="p-2 rounded-full cursor-pointer bg-[#00000055]"
    >
      {defineType({ type: typeName, w: '25px', h: '25px' }).typeIcon}
    </button>
  )
}

// interface Props {
//   updateTypeNumber?: React.Dispatch<React.SetStateAction<number | null>>
// }

export const ListTypesFilter = () => {
  const setPokemonType = usePokemonsStore(state => state.setPokemonType)
  const [types, setTypes] = useState<Array<Species>>([])

  useEffect(() => {
    fecthPokemonsTypes()
      .then(res => setTypes(res.results))
      .catch(err => console.log(err))
  }, [])

  const handleNoneTypes = () => {
    setPokemonType(null)
  }

  // console.log(types);

  return (
    <div className="flex flex-col items-start gap-2">
      <h3 className="font-semibold text-2xl pl-4">Búsqueda por Tipos</h3>

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
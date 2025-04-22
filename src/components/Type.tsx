import { useState } from "react"
import { usePokemonsStore } from "../store/usePokemons"
import { defineType } from "../utilities/defineType"
import { defineTypeNumber } from "../utilities/defineTypeNumber"

export const Type = ({ typeName }: { typeName: string }) => {
  const [isHoverActive, setIsHoverActive] = useState(false)
  const updatePokemonsFilterType = usePokemonsStore(state => state.updatePokemonsFilterType)
  const pokemonTypeNumber = usePokemonsStore(state => state.pokemonTypeNumber)
  const setPokemonType = usePokemonsStore(state => state.setPokemonType)
  const setGender = usePokemonsStore(state => state.setGender)

  const handleMouseOn = () => {
    setIsHoverActive(true)
  }

  const handleMouseOff = () => {
    setIsHoverActive(false)
  }

  const handleFilterType = () => {
    const typeNumber = defineTypeNumber(typeName)
    setGender('')
    setPokemonType(typeNumber)
    updatePokemonsFilterType(typeNumber)
  }

  const isSelected = defineTypeNumber(typeName) == pokemonTypeNumber
  
  if (typeName == 'unknown') return

  return (
    <button
      onClick={handleFilterType}
      onMouseEnter={handleMouseOn}
      onMouseLeave={handleMouseOff}
      style={(isHoverActive || isSelected) ? { boxShadow: `0 4px 30px ${defineType({ type: typeName }).color}4f, 0 0 10px ${defineType({ type: typeName }).color}3f inset` } : {}}
      className="p-2 rounded-full cursor-pointer bg-[#00000055]"
    >
      {defineType({ type: typeName, w: '25px', h: '25px' }).typeIcon}
    </button>
  )
}
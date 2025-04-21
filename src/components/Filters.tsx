import { ListTypesFilter } from "./ListTypesFilter"
import { PokemonNameFilter } from "./PokemonNameFilter"

interface Props {
  updateTypeNumber: (num: React.SetStateAction<number | null>) => void
  updatePokemonsFilterName: (name: React.SetStateAction<string>) => void
}

export const Filters = ({ updateTypeNumber, updatePokemonsFilterName }: Props) => {
  return (
    <>
      <div className='flex justify-between items-center gap-30 mt-30'>
        <ListTypesFilter updateTypeNumber={updateTypeNumber}></ListTypesFilter>
        <PokemonNameFilter updatePokemonsFilterName={updatePokemonsFilterName}></PokemonNameFilter>
      </div>
    </>
  )
}
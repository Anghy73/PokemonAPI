import { ListTypesFilter } from "./ListTypesFilter"
import { PokemonNameFilter } from "./PokemonNameFilter"

export const Filters = () => {
  return (
    <>
      <div className='flex justify-between items-center gap-30 mt-30'>
        <ListTypesFilter></ListTypesFilter>
        <PokemonNameFilter></PokemonNameFilter>
      </div>
    </>
  )
}